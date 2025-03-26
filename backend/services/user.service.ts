import { User, IUser } from "../models/user.model";
import bcrypt from "bcryptjs";

export const createUser = async (
  username: string,
  email: string,
  password: string
): Promise<IUser> => {
  const userExists = await User.findOne({ email });

  // Check if user already exists
  if (userExists) {
    throw new Error("User already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};

export const findUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};
