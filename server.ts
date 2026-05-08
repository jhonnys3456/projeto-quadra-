import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Database path
  const DB_PATH = path.join(__dirname, 'db.json');

  // Initialize DB if not exists
  try {
    await fs.access(DB_PATH);
  } catch {
    const initialDB = {
      site: {
        name: "Arena Master",
        hero: {
          title: "Sua Arena de Esportes e Eventos",
          subtitle: "O melhor espaço para seu futebol e sua festa.",
          buttonTextText: "Fazer Reserva",
          buttonLink: "/contato",
          gradient: "from-blue-600 to-indigo-900"
        },
        banner: {
          active: true,
          text: "🎉 Promoção de inauguração: 20% de desconto nos horários matutinos!"
        },
        pages: [
          { id: 'home', title: 'Início', content: {} },
          { id: 'sobre', title: 'Sobre', content: 'Nossa arena foi fundada com o objetivo de...' },
        ]
      },
      agenda: [],
      customers: [],
      finances: [],
      rentals: [
        { id: '1', name: 'Quadra Society', price: 150, description: 'Aluguel por hora' },
        { id: '2', name: 'Espaço Eventos', price: 800, description: 'Diária' }
      ],
      history: [],
      trash: [],
      widgets: [
        { id: '1', type: 'revenue', title: 'Fluxo Financeiro', position: { x: 0, y: 0, w: 2, h: 1 }, config: {} },
        { id: '2', type: 'reservations', title: 'Últimas Reservas', position: { x: 2, y: 0, w: 1, h: 1 }, config: {} }
      ]
    };
    await fs.writeFile(DB_PATH, JSON.stringify(initialDB, null, 2));
  }

  // API Routes
  app.get('/api/db', async (req, res) => {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    res.json(JSON.parse(data));
  });

  app.post('/api/db', async (req, res) => {
    await fs.writeFile(DB_PATH, JSON.stringify(req.body, null, 2));
    res.json({ success: true });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
