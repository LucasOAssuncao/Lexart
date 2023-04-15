import express from 'express';
import cors from 'cors';
import ErrorHandler from './middlewares/ErrorHandler';
import productsRouter from './routes/products.route';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);

app.get('/healthz', (_req, res) => res.status(200).json({ message: "OK!" }));


app.use(ErrorHandler.handle);
export default app;
