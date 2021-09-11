import express from 'express';
import { verifyJWTToken } from '../utils';
import { IUser } from '../Models/User';

const checkAuth = (req: any, res: any, next: any) => {
  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user: any) => {
      req.user = user;
      next();
    })
    .catch(() => {
      res.status(403).json({
        message: 'Invalid auth token provided.',
      });
    });

  next();
};

export default checkAuth;
