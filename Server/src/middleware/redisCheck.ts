import redis from 'redis';

export const redisCheck: Function = async (user_id: string, Token: any) => {
  const client = redis.createClient();
  client.get(user_id, function (err, reply) {
    if (err) throw err;
    if (reply) {
      console.log(reply.toString());
    } else {
      client.set(user_id, Token, function (err, result) {
        if (err) throw err;
        console.log('caching ' + result);
      });
    }
  });
};
