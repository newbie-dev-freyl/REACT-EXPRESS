import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import { DB } from './config/config.database.js';

(async () => {
  try {
    await DB.sync({ force: true });
    app.listen(process.env.PORT, () => {
      console.log(
        'SERVER IS UP AND RUNNING ON PORT ' + process.env.PORT + '...'
      );
    });
  } catch (error) {
    console.error(error);
  }
})();
