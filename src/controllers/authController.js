import { RegisterServices, LoginServices } from "../services/authService.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = await RegisterServices(name, email, password, role);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error in register controller:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await LoginServices(email, password);
    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};