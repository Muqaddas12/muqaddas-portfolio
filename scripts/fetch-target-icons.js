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

async function getIcons(repoName) {
  const user = 'Muqaddas12';
  const repoInfo = await fetchJson(`https://api.github.com/repos/${user}/${repoName}`);
  const branch = repoInfo.default_branch || 'master';
  console.log(`${repoName} branch: ${branch}`);
  const treeData = await fetchJson(`https://api.github.com/repos/${user}/${repoName}/git/trees/${branch}?recursive=1`);
  if (!treeData.tree) {
    console.log(`No tree for ${repoName}:`, treeData);
    return;
  }
  const images = treeData.tree.filter(t => t.type === 'blob' && /\.(png|webp|ico|jpg|svg)$/i.test(t.path));
  console.log(`All image files in ${repoName}:`, images.map(i => i.path));

  let icon = images.find(c => c.path.toLowerCase().includes('ic_launcher-web.png')) ||
             images.find(c => c.path.toLowerCase().includes('playstore-icon.png')) ||
             images.find(c => c.path.toLowerCase().includes('ic_launcher.png') && c.path.includes('xxxhdpi')) ||
             images.find(c => c.path.toLowerCase().includes('ic_launcher.png')) ||
             images.find(c => c.path.toLowerCase().includes('logo.png')) ||
             images.find(c => c.path.toLowerCase().includes('icon.png')) ||
             images[0];

  if (icon) {
    const rawUrl = `https://raw.githubusercontent.com/${user}/${repoName}/${branch}/${icon.path}`;
    const ext = path.extname(icon.path) || '.png';
    const dest = path.join(__dirname, '..', 'public', 'projects', `${repoName.toLowerCase()}${ext}`);
    console.log(`Downloading ${rawUrl} to ${dest}`);
    await downloadFile(rawUrl, dest);
    console.log(`Successfully saved ${dest}`);
  }
}

async function main() {
  await getIcons('sugresults');
  await getIcons('TrueScan');
}

main().catch(console.error);

