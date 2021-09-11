import express from 'express';
import { UserModel } from '../Models';

const updateLastSeen = (_: express.Request, __: express.Response, next: express.NextFunction) => {
  UserModel.findOneAndUpdate(
    { _id: '613c8baf85dd1f194079e5e1' },
    {
      fullname: 'qwe',
      last_seen: new Date(),
    },
    { new: true },
    () => {},
  );
  //   UserModel.updateOne(
  //     { _id: '613c8baf85dd1f194079e5e1' },
  //     {
  //       $set: {
  //         fullname: 'qwe',
  //         last_seen: new Date(),
  //       },
  //     },
  //   );
  next();
};

export default updateLastSeen;
