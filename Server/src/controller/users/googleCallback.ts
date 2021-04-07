import axios from 'axios';
import jwt from 'jsonwebtoken';
require('dotenv').config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const SERVER_ROOT_URI = process.env.SERVER_ROOT_URI;
// const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = process.env.COOKIE_NAME;
// const UI_ROOT_URI = process.env.UI_ROOT_URI;
const redirectURI = 'users/googleCallback';
import { getTokens } from '../../utils/getTokens';

export default async (req, res) => {
  const code = req.query.code as string;

  const data = await getTokens({
    code,
    clientId: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    redirectUri: `${SERVER_ROOT_URI}/${redirectURI}`,
  });
  console.log(data);
  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${data.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${data.id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });
  console.log(googleUser);

  // const token = jwt.sign(googleUser, JWT_SECRET);

  res.cookie(COOKIE_NAME, data.access_token, {
    maxAge: 900000, // 900000 -> 900초 ->15분
    httpOnly: true,
    secure: false,
  });

  // res.redirect(UI_ROOT_URI);
  res.status(200).send(googleUser);
};