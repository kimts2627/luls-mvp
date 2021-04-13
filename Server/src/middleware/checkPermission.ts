import { NextFunction, Request, Response } from 'express';

export default async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email = res.locals.email.split('@');
  if (email[1] === 'likelion.org') {
    res.locals.permission = 'admin';
    next();
  } else if (email[1] === 'likelion.net') {
    res.locals.permission = 'student';
    next();
  } else if (email[1] === 'gmail.com') {
    res.locals.permission = 'common';
    next();
  } else {
    res.status(400).send('저희 유저가 아닙니다.');
  }
};
