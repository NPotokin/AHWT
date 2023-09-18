import mongoose from "mongoose";

const HospitalSchema = new mongoose.Schema(
    {
        Name: String,
        WaitTime: Number
    },
    {timestamps: true}
);

export default mongoose.model('Hospital', HospitalSchema);