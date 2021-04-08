import { Request, Response } from 'express';
import { test } from '.';

export default async (req: Request, res: Response) => {
  res.status(200).send({ message: 'testing' });
};
