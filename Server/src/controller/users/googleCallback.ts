require('dotenv').config();
import jwt from 'jsonwebtoken';
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const SERVER_ROOT_URI = process.env.SERVER_ROOT_URI;
const COOKIE_NAME = process.env.COOKIE_NAME;
const JWT_SECRET = process.env.JWT_SECRET;
const redirectURI = 'users/googleCallback';
import { getTokens } from '../../utils/getTokens';
import { getTokenUserInfo } from '../../utils/getTokenUserInfo';

export default async (req, res) => {
  const code = req.query.code as string;

  const data = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `${SERVER_ROOT_URI}/${redirectURI}`,
  });
  console.log(data);
  // Fetch the user's profile with the access token
  const googleUser = await getTokenUserInfo(data.access_token);

  const access_Token = jwt.sign(
    { access_token: data.access_token, expires_in: data.expires_in },
    JWT_SECRET,
    { expiresIn: '30m' }
  );

  req.session.access_Token = access_Token;

  res.cookie(COOKIE_NAME, data.refresh_token, {
    maxAge: 900000, // 900000 -> 900초 ->15분
    httpOnly: true,
    secure: true,
    sameSite: 'none',
  });

  // res.redirect('https://www.likelionusa.com');
  // res.status(200).send();
};
