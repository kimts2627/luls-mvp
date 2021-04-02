const dotenv = require('dotenv').config();

module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/database/entity/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  seeds: ['src/database/seeder/**/*.ts'],
  factories: ['src/database/factories/**/*{.ts,.js}'],
  subscribers: ['src/database/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/database/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/database/subscriber',
  },
};
