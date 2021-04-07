import { Request, Response, NextFunction } from 'express';
import 'dotenv/config';
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.ACCESS_SECRET;

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    // barer 빼고 토큰만 가져오기
    const token = authorization.split(' ')[1];
    //토큰 유효한지 확인하는 작업 verify 토큰 내용 가져오기
    const id: any = jwt.verify(
      JSON.parse(token),
      jwtSecret,
      (err: Error, checkJwt: any) => {
        if (err) {
          res.status(400).send({ message: 'expried access token' });
        } else {
          return checkJwt.id;
        }
      }
    );

    res.locals.id = id;
    next();
  } else {
    res.status(400).send({ data: null, message: 'invalid access token' });
  }
};
