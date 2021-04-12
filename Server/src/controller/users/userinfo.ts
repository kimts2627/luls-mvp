import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;
import { getTokenUserInfo } from '../../utils/getTokenUserInfo';

export default async (req: Request, res: Response) => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    // barer 빼고 토큰만 가져오기
    const token = authorization.split(' ')[1];
    //토큰 유효한지 확인하는 작업 verify 토큰 내용 가져오기
    let access_token = jwt.verify(
      JSON.parse(token),
      jwtSecret,
      (err: Error, checkJwt: any) => {
        if (err) {
          res.status(400).send({ message: 'expried access token' });
        } else {
          return checkJwt.access_token;
        }
      }
    );
    // access_token으로 유저 정보 가져오기
    await getTokenUserInfo(access_token)
      .then((userinfo) => {
        res.status(200).send({ userinfo: userinfo });
      })
      .catch((err) => {
        res.status(400).send('invalid access token');
      });
  } else {
    res.status(400).send({ message: 'headers not authorized' });
  }
};
