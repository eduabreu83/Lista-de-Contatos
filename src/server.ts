import express from 'express';
import helmet from 'helmet';
import router from './routes';

const server = express();
// Middleware to enhance security
server.use(helmet());
// Middleware to parse JSON bodies
server.use(express.json());
// Middleware to parse URL-encoded bodies
server.use(express.urlencoded({ extended: true }));

server.use('/', router);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


