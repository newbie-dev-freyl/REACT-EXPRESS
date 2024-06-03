import { Sequelize } from 'sequelize';
import { env } from './config.env.js';

const setEnv = 'dev';
const getEnv = env[setEnv];

export const DB = new Sequelize(getEnv.db, getEnv.user, getEnv.pass, {
  host: getEnv.host,
  timezone: getEnv.tz,
  dialect: getEnv.dialect,
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});
