import axios from 'axios'
import * as dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL

async function getDataAndTransformIt() {
    const response = await axios.get(url);

    const dataSet = response.data;
    const finalData = [];
    

// Loop through each city in the dataset
    for (const city in dataSet) {
    if (dataSet.hasOwnProperty(city)) {
        // Loop through the "Emergency" and "Urgent" arrays for each city
        for (const category in dataSet[city]) {
        if (dataSet[city].hasOwnProperty(category)) {
            // Loop through the objects in the current category
            dataSet[city][category].forEach((obj) => {
            // Push each object into the finalObjects array
            const extractedData = {
                Name: obj.Name,
                WaitTime: obj.WaitTime
              };
              // Push the new object into the preliminary array
              finalData.push(extractedData);
            
            });
        }   
        }
    }
}

// Now, finalObjects contains all the extracted objects in an array
    console.log(finalData);
    
}

getDataAndTransformIt();


export default getDataAndTransformIt;