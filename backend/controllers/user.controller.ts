import { Request, Response } from "express";
import Joi from "joi";
import { asyncHandler } from "../middleware/asyncHandler";
import { generateToken } from "../utils/generateToken";
import { createUser } from "../services/user.service";

const registerUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

/**
 * Registers a new user.
 *
 * @param req - The Express Request object.
 * @param res - The Express Response object.
 * @returns A Promise that resolves to void.
 */
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    // Validate the request body
    const { error } = registerUserSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    // Basic validation
    if (!username || !email || !password) {
      res.status(400).json({ message: "Please provide all required fields" });
      return; // Explicitly return to stop further execution
    }

    // Create the new user
    const user = await createUser(username, email, password);

    if (user) {
      // Generate a JWT token
      const token = generateToken(user._id.toString());

      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: token,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    res.status(500).json({ message: "Server Error", error: errorMessage });
  }
});

export { registerUser };
