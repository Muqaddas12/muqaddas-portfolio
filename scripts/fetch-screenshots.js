const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    https.get(url, { headers: { 'User-Agent': 'node' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error('Status ' + res.statusCode));
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    }).on('error', reject);
  });
}

async function main() {
  const sugScreens = [
    'assets/screenshots/screenshot_1_home.jpg',
    'assets/screenshots/screenshot_2_history.jpg',
    'assets/screenshots/screenshot_3_selector.jpg',
    'assets/screenshots/screenshot_4_result.jpg',
    'assets/screenshots/screenshot_5_downloads.jpg'
  ];
  for (let i = 0; i < sugScreens.length; i++) {
    const url = 'https://raw.githubusercontent.com/Muqaddas12/sugresults/master/' + sugScreens[i];
    const dest = path.join('public', 'projects', 'screenshots', 'sugresults', 'screen_' + (i + 1) + '.jpg');
    try {
      await download(url, dest);
      console.log('Downloaded', dest);
    } catch (e) {
      console.error('Error sug', i, e.message);
    }
  }

  const trueScreens = [
    'screenshots/Screenshot_2025-05-01-15-07-52-473_com.mmbyown.truescandocumentscanner.jpg',
    'screenshots/Screenshot_2025-05-01-15-07-55-279_com.mmbyown.truescandocumentscanner.jpg',
    'screenshots/Screenshot_2025-05-01-15-08-05-232_com.mmbyown.truescandocumentscanner.jpg',
    'screenshots/Screenshot_2025-05-01-15-08-08-750_com.mmbyown.truescandocumentscanner.jpg',
    'screenshots/Screenshot_2025-05-01-15-08-16-878_com.mmbyown.truescandocumentscanner.jpg'
  ];
  for (let i = 0; i < trueScreens.length; i++) {
    const url = 'https://raw.githubusercontent.com/Muqaddas12/TrueScan/master/' + trueScreens[i];
    const dest = path.join('public', 'projects', 'screenshots', 'truescan', 'screen_' + (i + 1) + '.jpg');
    try {
      await download(url, dest);
      console.log('Downloaded', dest);
    } catch (e) {
      console.error('Error true', i, e.message);
    }
  }
}
main().catch(console.error);

