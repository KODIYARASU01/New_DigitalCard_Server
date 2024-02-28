import express from "express";
let router = express.Router();
import {
  postData,
  getData,
  getSpecificData,
  updateData,
  deleteData,
} from "../Controllers/ContactDetail.controller.js";
import { auth } from "../Middleware/AuthMiddleware.js";
//Create Contact Details :
router.post("/",auth, postData);

//Get Contact Detail :

router.get("/",auth, getData);
//Get Specific Contact Detail :
router.get("/:id",auth, getSpecificData);

//Update Speicfic Data From Database :

router.put("/:id",auth, updateData);

//Delete Specific Data :

router.delete("/:id",auth, deleteData);

export default router;
