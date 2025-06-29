import express from "express";
import userRouter from "./src/routes/user.route.js";
import dotenv from "dotenv";
import { dbConnect } from "./src/config/db.js";
import jobRouter from "./src/routes/job.route.js";
import cors from "cors";

dotenv.config();
dbConnect();

const app = express();

app.use(express.json());
app.use(cors());


app.use(cors({
  origin: "https://jobfinderrr.vercel.app", 
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true 
}));

app.options("*", cors());


// app.get("/:skill", async (req, res) => {
//   const param = req.params.skill;
//   const skills = param.split(",");
//    try {
//     const response = await fetch("https://remoteok.com/api");
//     const data = await response.json();

//     const jobs = data.slice(1); 

//     const matchedJobs = jobs.filter((job) => {
//       const tags = job.tags?.map((tag) => tag.toLowerCase()) || [];

//       return skills.some((skill) =>
//         tags.includes(skill)
//       );
//     });

//     res.json(matchedJobs.length);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to fetch jobs" });
//   }
// });
app.get("/", (req, res) => {
  res.send("JobFinder API running...");
});

app.use("/api/user",userRouter);

app.use("/api/jobs",jobRouter);

try {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
} catch (err) {
  console.error("Error starting server:", err.message);
}
