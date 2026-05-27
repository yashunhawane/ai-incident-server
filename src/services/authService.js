import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { requireEnv } from "../config/env.js";

const JWT_SECRET = requireEnv("JWT_SECRET");

const createToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, JWT_SECRET);
};

export const RegisterServices = async (name, email, password, role) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  return user;
};

export const LoginServices = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  const token = createToken(user._id, user.role);
  const safeUser = user.toObject();
  delete safeUser.password;

  return { user: safeUser, token };
};
