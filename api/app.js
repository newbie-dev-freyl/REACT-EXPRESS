import express from 'express';
const app = express();
import USERS from './models/models.users.js';

app.use(express.json);

app.post('/api/users', async (req, res) => {
  try {
    const user = await USERS.create({
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json({
      status: 'success',
      message: 'added',
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const allUser = await USERS.findAll();
    res.status(200).json({
      status: 'success',
      message: 'added',
      allUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: 'fail',
      message: 'something went wrong',
      error,
    });
  }
});

export default app;
