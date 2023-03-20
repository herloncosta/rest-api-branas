import express, { json, urlencoded } from 'express';
import morgan from 'morgan';

import { router } from './route/postsRoute.js';

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('dev'));
app.use(router);

app.use(function (error, req, res, next) {
  if (error.message === 'Post already exists') {
    res.status(409).json({ message: error.message });
    return;
  }

  if (error.message === 'Post not found') {
    res.status(404).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: error.message });
});

app.listen(3000);
