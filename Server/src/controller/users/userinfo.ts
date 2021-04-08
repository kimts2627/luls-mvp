import { Request, Response } from 'express';
import axios from 'axios';
import { getTokenUserInfo } from '../../utils/getTokenUserInfo';

export default async (req: Request, res: Response) => {
  const authorization = req.headers['authorization'];
  if (authorization) {
    // barer 빼고 토큰만 가져오기
    const token = authorization.split(' ')[1];
    //토큰 유효한지 확인하는 작업 verify 토큰 내용 가져오기
    const googleUser = await getTokenUserInfo(token);
  } else {
    res.status(400).send({ data: null, message: 'invalid access token' });
  }
};
