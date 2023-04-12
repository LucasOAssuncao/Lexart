import { Router } from 'express';
import get from '../controllers/ProductsController';

const productsRouter = Router();
productsRouter.get('/', get);

export default productsRouter;
