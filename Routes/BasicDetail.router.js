import express from "express";
import upload from "../upload.js";
import {
  postData,
  getData,
  getSpecificData,
  updateData,
  deleteData,
} from "../Controllers/BasicDetail.controller.js";
import { auth } from "../Middleware/AuthMiddleware.js";
let router = express.Router();
// Create Data
router.post("/",auth,upload.single('image'), postData);

//Read Data;
router.get("/",auth, getData);

//Specific data get from database :
router.get("/:id",auth, getSpecificData);
//Upate Data:
router.put("/:id",auth, updateData);

//Delete route:
router.delete("/:id",auth, deleteData);

export default router;
