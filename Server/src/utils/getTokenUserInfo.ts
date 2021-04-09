import axios from 'axios';

export const getTokenUserInfo = (access_token: any) => {
  return axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        // headers: {
        //   Authorization: `Bearer ${data.id_token}`,
        // },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });
};
