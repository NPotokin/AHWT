import express from 'express'
import * as dotenv from 'dotenv';
import getDataAndTransformIt from './apiReqester.js';
import mongoose from 'mongoose'
dotenv.config();

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

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

function scheduleGetDataAndTransformIt() {
  
  // Schedule the function to run every 5 minutes
  const intervalInMinutes = 5;
  setInterval(() => {
    getDataAndTransformIt(); // Call the function at the specified interval
  }, intervalInMinutes * 60 * 1000); // Convert minutes to milliseconds
}
// Start the scheduling when the server starts
scheduleGetDataAndTransformIt();




