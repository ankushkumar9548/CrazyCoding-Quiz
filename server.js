/**
 * ====================================================================
 *  CrazyCoding Quiz — Live JSON Database & Web Server
 *  Created for: Mr. Ankush (Assistant Professor, CSE)
 *  Pure Node.js (Zero external dependencies needed!)
 * ====================================================================
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'students_database.json');

// Ensure JSON database file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf8');
}

// MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon'
};

const server = http.createServer((req, res) => {
  // CORS Headers for cross-origin or local requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API 1: POST /api/submit — Save student result directly to students_database.json
  if (req.method === 'POST' && req.url === '/api/submit') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const newRecord = JSON.parse(body);
        let currentData = [];
        try {
          currentData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8') || '[]');
        } catch (e) {
          currentData = [];
        }

        // Add server timestamp and ID if not present
        if (!newRecord.id) newRecord.id = Date.now();
        if (!newRecord.timestamp) newRecord.timestamp = new Date().toLocaleString('en-IN');

        currentData.unshift(newRecord);

        // Write permanently to students_database.json with clean formatting
        fs.writeFileSync(DATA_FILE, JSON.stringify(currentData, null, 2), 'utf8');

        console.log(`[SUCCESS] New student quiz saved to JSON: ${newRecord.name} (QUID: ${newRecord.quid}, Score: ${newRecord.score}/${newRecord.total})`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', message: 'Saved permanently to JSON file!', totalSaved: currentData.length }));
      } catch (err) {
        console.error('[ERROR] Failed to save submission:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: err.message }));
      }
    });
    return;
  }

  // API 2: GET /api/submissions — Fetch all saved JSON submissions
  if (req.method === 'GET' && req.url === '/api/submissions') {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf8') || '[]';
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // Static File Serving
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const filePath = path.join(__dirname, reqPath);

  // Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    res.end('Access Denied');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

// Find Local Network IP Address
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('================================================================');
  console.log('  🚀 CrazyCoding Quiz Portal Server Running Successfully!');
  console.log('  👨‍🏫 Evaluator : Mr. Ankush (Assistant Professor, CSE)');
  console.log('  💾 Live JSON  : students_database.json (Permanent Storage)');
  console.log('================================================================');
  console.log(`  🖥️  Aapke PC par link   : http://localhost:${PORT}`);
  console.log(`  📱  Students ke liye link : http://${localIP}:${PORT}`);
  console.log('================================================================');
  console.log('  Student ke submit karte hi data automatically JSON mein save hoga!');
});
