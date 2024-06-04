import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { DB } from './config/config.db.js';
import { handleErrorsAsync } from './middlewares/errors.async.js';

handleErrorsAsync(async () => {
  await DB.sync({ force: true });
  app.listen(process.env.PORT, () => {
    console.log('SERVER UP AND RUNNING AT ' + process.env.PORT + ' ...');
  });
})();
