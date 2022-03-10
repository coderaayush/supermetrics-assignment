require('dotenv').config()
import express from 'express';
import { config } from './config';
import { statsController } from './controllers';
const app = express();
const port = config.port;

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', statsController.getStats);
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});