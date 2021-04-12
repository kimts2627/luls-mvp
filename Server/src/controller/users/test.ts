import { Request, Response } from 'express';
import { test } from '.';
import { getGoogleAuthURL } from '../../utils/getGoogleAuthURL';

export default async (req: Request, res: Response) => {
  res.redirect(getGoogleAuthURL());
};
