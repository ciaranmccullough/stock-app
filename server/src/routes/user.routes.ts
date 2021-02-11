import express, { Router } from 'express';
import { getUsers } from '../controllers/user';

export const userRouter = Router();

userRouter.get('/', getUsers);
