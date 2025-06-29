import express from "express";
import { demandingSkills, fetchJobs } from "../controllers/job.controller.js";

const jobRouter = express.Router(); 


jobRouter.get("/",fetchJobs);

jobRouter.get("/demandingSkills",demandingSkills)

export default jobRouter;
