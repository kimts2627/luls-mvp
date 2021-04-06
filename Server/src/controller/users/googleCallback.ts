import axios from 'axios';

export default async (req, res) => {
  // let test = "ya29.a0AfH6SMBP22_10gPNy0koZLS6WE1KKBNo-d3Tumk9x1Z6gKqysCZOKhzfa5pL5NCiriBHI7bo7-xDhGdwg1eMLT82t-GaZHBDeB-4OiFlRpbbeeS7kIwFqXumrUEkmHhkfoniei-RvaBVJOQKAloeWHPst52B"
  const authorization = req.headers['authorization'];
  console.log(authorization);
  const token = authorization.split(' ')[1];
  console.log(token);
  await axios
    .get('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { authorization: `Bearer ${token}` },
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
