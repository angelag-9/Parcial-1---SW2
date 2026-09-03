import path from 'node:path';
import express from 'express';
import droneRoutes from './routes/drone.routes.js';

const app = express();
const publicDir = path.resolve(process.cwd(), 'public');

app.use(express.json());
app.use(express.static(publicDir));
app.use('/api/drones', droneRoutes);

app.get('/', (_req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

export default app;
