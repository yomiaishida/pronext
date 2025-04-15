import { Request, Response } from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { generateToken } from "../utils/generateToken.js";
import { createUser, findUserByEmail } from "../services/user.service.js";

/**
 * Registers a new user.
 * POST /api/auth/register
 * @access Public
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @returns A Promise that resolves to void.
 */
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  // Create the new user
  const user = await createUser(username, email, password);

  // Generate a JWT token
  const token = generateToken(user._id.toString());

  // Respond with user details and token
  res.status(201).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token,
  });
});

/**
 * Logs in a user.
 * POST /api/auth/login
 * @access Public
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @returns A Promise that resolves to void.
 */
const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await findUserByEmail(email);
  if (!user) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // Check if the password matches
  const isPasswordMatch = await user.matchPassword(password);
  if (!isPasswordMatch) {
    res.status(401).json({ message: "Invalid email or password" });
    return;
  }

  // Generate a JWT token
  const token = generateToken(user._id.toString());

  // Respond with user details and token
  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    token,
  });
});

export { registerUser, login };
