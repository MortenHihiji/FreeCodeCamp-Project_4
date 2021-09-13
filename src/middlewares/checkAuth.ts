import express from 'express';
import { verifyJWTToken } from '../utils';
import { IUser } from '../Models/User';

const checkAuth = (req: any, res: any, next: any) => {
  if (req.path === '/user/login' || req.path === '/user/registration') {
    return next();
  }

  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(403).json({
        message: 'Invalid auth token provided.',
      });
    });
};

export default checkAuth;
