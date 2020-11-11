import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();
app.use(express.json());
app.use(studentRouter);

mongoose
  .connect(
    'mongodb+srv://dbUser:123456789bootCamp@cluster0.oosiu.mongodb.net/grades?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(console.log('Conectado ao mongodb Atlas'))
  .catch((err) => console.log(err));

app.listen(3000, () => console.log('API INICIADA'));
