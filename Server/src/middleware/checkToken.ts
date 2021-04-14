import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import { getTokenUserInfo } from '../utils/getTokenUserInfo';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    // barer 빼고 토큰만 가져오기
    const token = authorization.split(' ')[1];
    // Token내용 가져오기
    await getTokenUserInfo(token)
      .then((result) => {
        res.locals.email = result.email;
        next();
      })
      .catch((err) => {
        res.status(400).send('getTokenUserInfo / invaild access token');
      });
  } else {
    res
      .status(400)
      .send({ data: null, message: 'checkToken / invalid access token' });
  }
};
