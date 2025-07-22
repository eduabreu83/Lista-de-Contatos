import { RequestHandler } from 'express';

export const privateRequest: RequestHandler = (req, res, next) => {
    // fazer a autorizaçao do usuário
  let logged = true;
  if (logged) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' }); 
  }
}