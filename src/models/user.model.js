import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    default: [],
  },

  description: {
    type: String,
    required: true,
  },
  isAvailableForJob: {
    type: Boolean,
    default: true,
  },

  location: {
    type: String,
    default: "Remote",
  },

  resumeLink: {
    type: String,
  },

  socialLinks: {
    linkedin: { type: String },
    github: { type: String },
    portfolio: { type: String },
  },
});

const userModal = mongoose.model("User", userSchema);
export default userModal;
