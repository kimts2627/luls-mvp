import { NextFunction, Request, Response } from 'express';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email = res.locals.email.split('@')[1];
  // if (email === 'likelion.org') {
  //   res.locals.permission = 'admin';
  //   next();
  // } else if (email === 'likelion.net') {
  //   res.locals.permission = 'student';
  //   next();
  // } else if (email === 'gmail.com') {
  //   res.locals.permission = 'common';
  //   next();
  // } else {
  //   res.status(400).send('저희 유저가 아닙니다.');
  // }
  if (email === 'likelion.net') {
    res.locals.permission = 'admin';
  } else if (email === 'gmail.com') {
    res.locals.permission = 'student';
  } else {
    res.status(400).send('저희 유저가 아닙니다');
  }
};
