import axios from 'axios';
import * as dotenv from 'dotenv';
import Hospital from './models/HospitalModel.js';
dotenv.config();

const url = process.env.URL;

async function getDataAndTransformIt() {
  try {
    const response = await axios.get(url);
    const dataSet = response.data;

    for (const city in dataSet) {
      if (dataSet.hasOwnProperty(city)) {
        for (const category in dataSet[city]) {
          if (dataSet[city].hasOwnProperty(category)) {
            for (const obj of dataSet[city][category]) {
              const waitTime = obj.WaitTime;
              const transformedWaitTime = parseFloat(
                transformWaitTimeToMinutes(waitTime).toFixed(2)
              );
              const extractedData = {
                Name: obj.Name,
                WaitTime: transformedWaitTime,
              };

              try {
                // Create a new document and await its creation
                const dbInput = await Hospital.create(extractedData);
                console.log('Document created:', dbInput);
              } catch (error) {
                console.error('Error creating document:', error);
              }
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

function transformWaitTimeToMinutes(waitTimeString) {
  const parts = waitTimeString.split(' ');
  let totalMinutes = 0;

  if (parts.length === 4 && parts[1] === 'hr' && parts[3] === 'min') {
    const hours = parseInt(parts[0], 10);
    const minutes = parseInt(parts[2], 10);
    totalMinutes = hours + minutes/60;
  }

  return totalMinutes;
}

// Set up an interval to call getDataAndTransformIt every 5 minutes (300,000 milliseconds)
setInterval(getDataAndTransformIt, 360000);


export default getDataAndTransformIt;