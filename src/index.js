import express from 'express';
import routes from './routes';
import mongoConnect from './DAL/mongooseConnection';
import loggerUtil from './Utils/loggerUtil';

mongoConnect();

const app = express();

// Middleware
express.Router().use((req, res, next) => {
  //Authentication middleware
  next();
});

app.get('/', (req, res) => {
    res.send('Working');
});

Object.keys(routes).forEach((routeName) => {
  app.use(`/${routeName}`, routes[routeName]);
});

app.listen(3000, () => {
    loggerUtil.logInformation('Gror API listening on port 3000');
});