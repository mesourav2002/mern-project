import User from "../modules/user.module.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    res.status(201).json({ message: "user Created Sucessfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// npm i bcryptjs  :- password save in differnt for secure website
