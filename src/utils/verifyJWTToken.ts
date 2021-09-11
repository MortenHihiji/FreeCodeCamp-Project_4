import jwt from 'jsonwebtoken';
import { IUser } from '../Models/User';

const verifyJWTToken = (token: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET || '', (err, decodedData) => {
      if (err || !decodedData) {
        return reject(err);
      }

      resolve(decodedData);
    });
  });
};

export default verifyJWTToken;
