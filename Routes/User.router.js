import express from "express";
import { auth } from "../Middleware/AuthMiddleware.js";

import {
  adminUser,
  loginUser,
  getLoginUserData,
  postRegister,
} from "../Controllers/User.controller.js";
let router = express.Router();

export let userRegisterRoute = router.post("/register", postRegister);
export let userLoginRoute = router.post("/login", loginUser);
export let loginUserDataRoute = router.get("/login:_id", getLoginUserData);
export let adminDashboard = router.get("/admin", adminUser);
