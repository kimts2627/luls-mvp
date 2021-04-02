import express from 'express';
import cors from 'cors';
import session from 'express-session';
import logger from 'morgan';
import { createConnection } from 'typeorm';
import 'dotenv/config';
const usersRouter = require('./routes/user');

createConnection()
  .then(() => console.log('typeorm connection complete'))
  .catch((error) => console.log('TypeORM connection error: ', error));
const app = express();
// const usersRouter = require('./src/routes/user');
// import redis from 'redis';
// const socialsRouter = require('./routes/social');

const PORT = 3006;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
);

app.set('trust proxy', 1);

app.use(
  session({
    secret: '@codestates',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 6 * 60 * 10000,
      httpOnly: true,
      secure: true,
      sameSite: 'none',
    },
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Success');
});

// app.use('/userImg', express.static('./controller/users/userImg'));
app.use('/users', usersRouter);
// app.get('/redis', (req, res) => {
//   var client = redis.createClient();
//   client.on('error', function (err) {
//     console.log('Error ' + err);
//   });

//   // 값을 저장 (일반, 해쉬 테이블 저장)
//   client.set('String Key', 'String Value', redis.print);
//   client.hset('Hash Key', 'HashTest 1', '1', redis.print);
//   client.hset(['Hash Key', 'HashTest 2', '2'], redis.print);

//   // 값을 가져옴
//   client.get('String Key', function (err, reply) {
//     console.log(reply.toString());
//   });

//   // 해시 테이블의 값을 가져옴
//   client.hkeys('Hash Key', function (err, replies) {
//     console.log(replies.length + ' replies:');
//     replies.forEach(function (reply, i) {
//       console.log('  ' + i + ': ' + reply);
//     });
//   });

//   // 키값으로 배열 형태로 얻음.
//   client.hgetall('Hash Key', function (err, obj) {
//     console.dir(obj);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is Running : Port ${PORT}`);
});

module.exports = app;
