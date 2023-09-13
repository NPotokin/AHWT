import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
    {
        name: String,
        waitTimes: String
    },
    {timestamps: true}
);

export default mongoose.model('Hospital', HospitalSchema);