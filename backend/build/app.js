import express from 'express';
import cors from 'cors';
import ErrorHandler from './middlewares/ErrorHandler';
const app = express();
app.use(express.json());
app.use(cors());
app.get('/healthz', (_req, res) => res.status(200).json({ message: "OK!" }));
app.use(ErrorHandler.handle);
export default app;
//# sourceMappingURL=app.js.map