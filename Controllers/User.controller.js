import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const postRegister = async (req, res) => {
  let { userName, email, password, profile } = req.body;

  try {
    let hashedPassword = await bcrypt.hash(password, 10);

    let data = { userName, email, password: hashedPassword, profile };

    let result = await User.create(data);
    return res
      .status(201)
      .json({ message: "User Register Succesfully" + result });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "User not registered" + error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    let { userName, password, profile } = req.body;
    let user = await User.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password, profile))) {
      return res.status(201).json({
        _id: user._id,
        userName: user.userName,
        password: user.password,
        profile: user.profile,
        status: "Login Successs",
        token: generateToken(user._id),
      });
    } else {
      return res.status(401).json({ message: "UserDoes not exist" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "User not yet registered" + error.message });
  }
};
export const getLoginUserData = async (req, res) => {
  try {
    let { userName, password, profile } = req.body;
    let user = await User.findOne({ userName });

    if (user && (await bcrypt.compare(password, user.password, profile))) {
      return res.status(201).json({
        _id: user._id,
        user: user,
        userName: user.userName,
        password: user.password,
        profile: user.profile,
        status: "Login Successs",
        token: generateToken(user._id),
      });
    } else {
      return res.status(401).json({ message: "UserDoes not exist" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: "User not yet registered" + error.message });
  }
};
export const adminUser = async (req, res) => {
  try {
    let { userName, _id, email } = await User.findById(req.user.id);
    return res.status(201).json({ _id, userName, email });
  } catch (error) {
    return res.status(401).json(error.message);
  }
};

let generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN);
};
