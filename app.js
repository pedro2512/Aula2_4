/* Imports */
import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(studentRouter);

/* Conexao com o mongoDB */
mongoose
  .connect(
    'mongodb+srv://{ $process.env.USERDB }:{ $process.env.PWDDB }@cluster0.oosiu.mongodb.net/grades?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(console.log('Conectado ao mongodb Atlas'))
  .catch((err) => console.log(err));

app.listen('{ $process.env.PORT }', () => console.log('API INICIADA'));
