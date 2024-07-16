import express from 'express'
const app = express()
app.use(express.json())

import routeUsers from './routes/route.users.js'
app.use(routeUsers)

import { getErrorSequelize } from './middlewares/error.sequelize.js';
import { getErrorGlobal } from './middlewares/error.global.js';
app.use(getErrorSequelize)
app.use(getErrorGlobal)

export default app;