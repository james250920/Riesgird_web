import 'zone.js/node';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// The Express server
const app = express();
const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = join(serverDistFolder, '../browser');

// Serve static files from /browser
app.use(express.static(browserDistFolder, {
  maxAge: '1y',
  index: false,
  redirect: false,
}));

// All other routes should return the index.html
app.get('*', (req, res) => {
  res.sendFile(join(browserDistFolder, 'index.html'));
});

// Start up the Node server
const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});

export default app;
