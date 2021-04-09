require('dotenv').config();
import { Request, Response } from 'express';
import { getGoogleAuthURL } from '../../utils/getGoogleAuthURL';

export default async (req: Request, res: Response) => {
  return res.send(getGoogleAuthURL());
};
