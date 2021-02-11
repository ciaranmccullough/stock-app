import dotenv from 'dotenv';
dotenv.config({
  path: '.env',
});
import express from 'express';
import { userRouter } from './routes/user.routes';

export const app = express();

const API_ENDPOINT = '/api';
const API_VERSION = 'v1';
app.use(`${API_ENDPOINT}/${API_VERSION}/users`, userRouter);
