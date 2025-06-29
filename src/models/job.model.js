import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  job_id: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  company_logo: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  epoch: {
    type: Number,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "Remote",
  },
  salary_min: {
    type: Number,
  },
  salary_max: {
    type: Number,
  },
  apply_url: {
    type: String,
  },
  url: {
    type: String,
  },
});

const jobModel = mongoose.model("Job", jobSchema);
export default jobModel;
