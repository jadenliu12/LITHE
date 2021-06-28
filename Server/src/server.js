require('../config.js');
const express = require('express');

const userRouter = require('./routers/users.js');
const userInfoRouter = require('./routers/usersInfo.js');
const userAvatarRouter = require('./routers/usersAvatar.js');
const requestLogger = require('./middleware/request-logger.js');
const accessController = require('./middleware/access-controller.js');
const errorHandler = require('./middleware/error-handler.js');

const app = express();

// app.use(requestLogger);
app.use(
  express.static('dist', {
    setHeaders: (res, path, stat) => {
      res.set('Cache-Control', 'public, s-maxage=86400');
    },
  })
);
app.use(accessController);
app.use('/api', userRouter);
app.use('/api', userInfoRouter);
app.use('/api', userAvatarRouter);
app.get('/*', (req, res) => res.redirect('/'));
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}...`);
});
