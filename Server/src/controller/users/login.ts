import { json } from 'body-parser';
import { JsonWebTokenError } from 'jsonwebtoken';

require('dotenv').config();

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios');

export default async (req, res) => {
  // console.log(req.query.code);
  let code = req.query.code;
  let google = await axios
    .post(
      'https://accounts.google.com/o/oauth2/token',
      {
        client_id: clientID,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://127.0.0.1:3006/users/login',
      },
      {
        headers: { Accept: 'application/json' },
      }
    )
    .then((google) => {
      const token = google.data.access_token;
      axios
        .get(
          `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

  console.log(google.data);
  res.send(200, { accessToken: google.data.access_token });
};
