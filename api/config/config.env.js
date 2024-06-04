import dotenv from 'dotenv';
dotenv.config();

export const env = {
  dev: {
    db: process.env.DB,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    host: process.env.DB_HOST,
    tz: process.env.DB_TZ,
    dialect: 'mysql',
  },
  test: {
    db: process.env.DB_TEST,
    user: process.env.DB_USER_TEST,
    pass: process.env.DB_PASS_TEST,
    host: process.env.DB_HOST_TEST,
    tz: process.env.DB_TZ_TEST,
    dialect: 'mysql',
  },
};
