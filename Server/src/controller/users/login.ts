require('dotenv').config();

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios');

export default async (req, res) => {
  console.log(req.query.code);
  let google = await axios.post(
    'https://oauth2.googleapis.com/token',
    {
      client_id: clientID,
      client_secret: clientSecret,
      code: req.query.code,
      grant_type: 'authorization_code',
      redirect_uri: 'http://127.0.0.1:3006/users/googleCallback',
    },
    {
      headers: { Accept: 'application/json' },
    }
  );
  console.log(google.data.access_token);
  res.send(200, { accessToken: google.data.access_token });
};
