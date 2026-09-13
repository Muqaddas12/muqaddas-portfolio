const fs = require('fs');
const path = require('path');
const https = require('https');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  const user = 'Muqaddas12';
  const repos = await fetchJson(`https://api.github.com/users/${user}/repos?per_page=100`);
  console.log(`Found ${repos.length} repos`);

  const outDir = path.join(__dirname, '..', 'public', 'projects');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const results = {};

  for (const r of repos) {
    const repoName = r.name;
    const branch = r.default_branch || 'main';
    console.log(`Checking ${repoName}...`);
    try {
      const treeData = await fetchJson(`https://api.github.com/repos/${user}/${repoName}/git/trees/${branch}?recursive=1`);
      if (!treeData.tree) continue;

      // Prioritize launcher icons, logos, app icons
      const candidates = treeData.tree.filter(item => {
        const p = item.path.toLowerCase();
        return (
          item.type === 'blob' &&
          (p.endsWith('.png') || p.endsWith('.svg') || p.endsWith('.jpg') || p.endsWith('.webp') || p.endsWith('.ico')) &&
          (
            p.includes('ic_launcher') ||
            p.includes('app_icon') ||
            p.includes('logo') ||
            p.includes('icon') ||
            p.includes('favicon')
          ) &&
          !p.includes('node_modules')
        );
      });

      console.log(`  Candidates for ${repoName}:`, candidates.map(c => c.path));

      // Choose best candidate
      let best = candidates.find(c => c.path.toLowerCase().includes('ic_launcher-playstore.png')) ||
                 candidates.find(c => c.path.toLowerCase().includes('ic_launcher-web.png')) ||
                 candidates.find(c => c.path.toLowerCase().includes('ic_launcher.png') && c.path.includes('xxxhdpi')) ||
                 candidates.find(c => c.path.toLowerCase().includes('ic_launcher.png') && c.path.includes('xxhdpi')) ||
                 candidates.find(c => c.path.toLowerCase().includes('ic_launcher.png') && c.path.includes('xhdpi')) ||
                 candidates.find(c => c.path.toLowerCase().includes('ic_launcher.png')) ||
                 candidates.find(c => c.path.toLowerCase().includes('app_icon')) ||
                 candidates.find(c => c.path.toLowerCase().includes('logo.png')) ||
                 candidates.find(c => c.path.toLowerCase().includes('logo.svg')) ||
                 candidates.find(c => c.path.toLowerCase().includes('logo')) ||
                 candidates.find(c => c.path.toLowerCase().includes('icon.png')) ||
                 candidates.find(c => c.path.toLowerCase().includes('icon')) ||
                 candidates[0];

      if (best) {
        console.log(`  -> Selected: ${best.path}`);
        const ext = path.extname(best.path) || '.png';
        const rawUrl = `https://raw.githubusercontent.com/${user}/${repoName}/${branch}/${best.path}`;
        const fileName = `${repoName.toLowerCase()}${ext}`;
        const dest = path.join(outDir, fileName);
        await downloadFile(rawUrl, dest);
        console.log(`  -> Downloaded to ${dest}`);
        results[repoName] = `/projects/${fileName}`;
      }
    } catch (err) {
      console.error(`  Error in ${repoName}:`, err.message);
    }
  }

  console.log('\nFinal Results Map:\n', JSON.stringify(results, null, 2));
}

run();

