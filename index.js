import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
let app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
let PORT = process.env.PORT || 3000;
let uri = process.env.MONGODB_URI;

import BasicDetailRoute from './Routes/BasicDetail.router.js';
import ContactDetailRoute from './Routes/ContactDetail.route.js';
import ServiceDetailRoute from './Routes/ServiceDetails.route.js';
import ProductDetailRoute from './Routes/ProductDetail.route.js';
import GalleryDetailRoute from './Routes/GalleryDetail.route.js';
import SocialMediaDetailRoute from './Routes/SocialMedia.route.js'
import TestimonialDetailRoute from './Routes/TestimonialDetail.route.js';
import {
  userRegisterRoute,
  userLoginRoute,
  loginUserDataRoute,
  adminDashboard,
} from "./Routes/User.router.js";

//Routes Initialize:

app.use('/api',userRegisterRoute);
app.use('/api',userLoginRoute);
app.use('/api',loginUserDataRoute);
app.use('/basic_detail',BasicDetailRoute);
app.use('/contact_detail',ContactDetailRoute);
app.use('/service_detail',ServiceDetailRoute);
app.use('/product_detail',ProductDetailRoute);
app.use('/gallery_detail',GalleryDetailRoute);
app.use('/socialMedia_detail',SocialMediaDetailRoute);
app.use('/testimonial_detail',TestimonialDetailRoute);


app.get('/',(req,res)=>{
  res.status(201).send('Server Is working on home route')
})
mongoose.set("strictQuery", false);
mongoose
  .connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => {
    console.log("Mongodb Connected Succesfully");
    app.listen(PORT, () => {
      console.log(`Server is running ${PORT} port number`);
    });
  })
  .catch((error) => {
    console.log("mongoDB connection Failed" + error.message);
  });
