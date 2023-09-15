import Hospital from '../models/HospitalModel.js'
import mongoose from 'mongoose'
import moment from 'moment/moment.js'

export async function getHospitalDataLastHour(req, res) {
    try {
      const hospitalName = req.params.hospitalName; 
      const oneHourAgo = moment().subtract(1, 'hour').toDate();
  
      const data = await Hospital.find({
        Name: hospitalName,
        createdAt: { $gte: oneHourAgo },
      });
  
      console.log(data)
      res.json(data);

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' }); 
    }
  };

  getHospitalDataLastHour();
