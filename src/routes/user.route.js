import express from "express";
import { loginUser, registerUser, updateUser } from "../controllers/user.controller.js";

const userRouter = express.Router();


userRouter.post("/register",registerUser);

userRouter.post("/login",loginUser);

userRouter.patch("/update/:id",updateUser);


export default userRouter;