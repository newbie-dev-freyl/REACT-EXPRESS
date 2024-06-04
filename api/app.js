import express from 'express';
import routeUsers from './routes/route.users.js';
import { handleErrorsGlobal } from './middlewares/errors.global.js';
import { handleErrorsSequelize } from './middlewares/errors.sequelize.js';
const app = express();

app.use(express.json());
app.use(routeUsers);
app.use(handleErrorsSequelize);
app.use(handleErrorsGlobal);
export default app;
