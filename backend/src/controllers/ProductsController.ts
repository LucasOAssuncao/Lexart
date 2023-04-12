import { NextFunction, Request, Response } from 'express';
import IError from '../interfaces/IError';
import IScrapper from '../interfaces/IScrapper';
import getAll from '../services/ProductsService';

export default async function get(req: Request, res: Response, next: NextFunction) {

    const { url, category } = req.query;
    const products = await getAll({ url, category } as IScrapper);
    return res.status(200).json(products);
}
