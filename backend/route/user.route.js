import express from "express";
import { userLogin, userSingup } from "../controller/user.controller.js";
import { loginValidation, signupValidation } from "../validation/user.validation.js";
const userRouter = express.Router();

userRouter.post("/signup", signupValidation, userSingup);
userRouter.post("/login", loginValidation, userLogin);

export default userRouter;