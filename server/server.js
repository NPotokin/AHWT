import express from 'express'
import * as dotenv from 'dotenv';
import getDataAndTransformIt from './apiReqester.js';
import router from './routes/HospitalRouter.js';

import mongoose from 'mongoose'
dotenv.config()


const app = express()
const port = process.env.PORT

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}

app.use('/api', router)

getDataAndTransformIt();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Howdy!')
})






