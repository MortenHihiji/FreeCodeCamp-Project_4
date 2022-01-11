import express from 'express';
import { UserModel } from '../Models';

const updateLastSeen = (req: any, __: express.Response, next: express.NextFunction) => {
  if (req.path === '/user/signin' || req.path === '/user/signup' || req.path === '/user/verify') {
    return next();
  }

  UserModel.findOneAndUpdate(
    { _id: req.user._id },
    {
      last_seen: new Date(),
    },
    { new: true },
    () => {},
  );
  next();
};

export default updateLastSeen;
