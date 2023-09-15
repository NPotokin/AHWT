import { Router } from "express";
const router = Router();
import {getHospitalDataLastHour} from '../controllers/HospitalController.js'

router
    .route('/:hospitalName/hourly')
    .get(getHospitalDataLastHour);

export default router;