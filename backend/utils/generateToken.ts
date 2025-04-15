import jwt from "jsonwebtoken";
/**
 * Generates a JSON Web Token (JWT) for a given user ID.
 *
 * @param id - The user ID to generate the token for.
 * @returns A JWT string.
 */
export const generateToken = (id: string): string => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
    // Use the non-null assertion here
    expiresIn: "30d",
  });
};
