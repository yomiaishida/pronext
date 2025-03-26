import express from "express";
import { registerUser, login } from "../controllers/user.controller";
import { validateRequest } from "../middleware/validateRequest";
import Joi from "joi";

const router = express.Router();

const registerUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

router.post("/register", validateRequest(registerUserSchema), registerUser);
router.post("/login", validateRequest(loginSchema), login);

export default router;
