import express, { Request, Response } from 'express';
import cors from 'cors';
import session from 'express-session';
import logger from 'morgan';
import { createConnection } from 'typeorm';
import 'dotenv/config';
import ratelimit from 'express-rate-limit';
import redis from 'redis';
import { redisCheck } from './utils/redisCheck';
const usersRouter = require('./routes/user');
const bulletinRouter = require('./routes/bulletin');
const app = express();
const PORT = 3006;
const limiter = ratelimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  delayMs: 0,
  handler(req: Request, res: Response) {
    res.status(this.statusCode).json({
      code: this.statusCode,
      message:
        '너무 많은 요청을 보냈습니다. 잠시 후 다시 시도해 주시기 바랍니다.',
    });
  },
});

createConnection()
  .then(() => console.log('typeorm connection complete'))
  .catch((error) => console.log('TypeORM connection error: ', error));

// const redisClient = redis.createClient();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

app.use(
  cors({
    origin: ['https://likelionusa.com', 'https://www.likelionusa.com'],
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

app.get('/test', (req, res) => {
  redisCheck('Seokjae', 'Access_Token');
});

app.use('/users', usersRouter);
app.use('/bulletin', bulletinRouter);
// app.get('/redis', (req, res) => {
//   let client = redis.createClient();
//   client.on('error', function (err) {
//     console.log('Error ' + err);
//   });

//   // 값을 저장 (일반, 해쉬 테이블 저장)
//   client.set('String Key', 'String Value', redis.print);
//   client.hset('Hash Key', 'HashTest 1', '1', redis.print);
//   client.hset(['Hash Key', 'HashTest 2', '2'], redis.print);

//   // 값을 가져옴
//   client.get('String Key', function (err, reply) {
//     console.log('-------------');
//     console.log('String Key 값');
//     console.log(reply.toString());
//     console.log('-------------');
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
