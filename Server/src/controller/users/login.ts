require('dotenv').config();
import { getGoogleAuthURL } from '../../utils/getGoogleAuthURL';

export default async (req, res) => {
  return res.redirect(getGoogleAuthURL());
};
