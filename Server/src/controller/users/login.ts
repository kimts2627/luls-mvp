require('dotenv').config();

const clientID = process.env.GOOGLE_CLIENT_ID;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
const axios = require('axios');
import { getGoogleAuthURL } from '../../utils/getGoogleAuthURL';

export default async (req, res) => {
  return res.redirect(getGoogleAuthURL());
};
