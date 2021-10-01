import bodyParser from 'body-parser';
import express from 'express';
import io from 'socket.io';
import { updateLastSeen, checkAuth } from '../middlewares';
import { loginValidation } from '../utils/validations';

import { UserController, DialogController, MessageController } from '../controllers';

const routes = (app: express.Express, io?: io.Socket) => {
  app.use(bodyParser.json());
  app.use(updateLastSeen);
  app.use(checkAuth);

  app.get('/user/me', UserController.getMe.bind(null, io));
  app.get('/user/:id', UserController.show);
  app.delete('/user/:id', UserController.delete);
  app.post('/user/registration', UserController.create);
  app.post('/user/login', loginValidation, UserController.login);

  app.get('/dialogs', DialogController.index);
  app.delete('/dialogs/:id', DialogController.delete);
  app.post('/dialogs', DialogController.create);

  app.get('/messages', MessageController.index);
  app.post('/messages', MessageController.create);
  app.delete('/messages/:id', MessageController.delete);
};

export default routes;
