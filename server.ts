import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// API health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', app: 'Talenta' });
});

// Serve static assets from production dist
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback for SPA routing
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Talenta server listening on port ${PORT}`);
});
