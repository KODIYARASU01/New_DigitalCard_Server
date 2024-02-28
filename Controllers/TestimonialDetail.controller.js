import router from "../Routes/BasicDetail.router.js";
import TestimonialDetails from "../models/Testimonial.model.js";
export const postData = async (req, res) => {
  try {
    if (!req.body.clientImage || !req.body.clientName || !req.body.clientFeedback || !req.body.clientFeedbackDate) {
      return res.status(401).json({
        message: "Send all required fields : productImage , productTitle, productSummary,productReleaseDate",
      });
    }
    let TestimonialData = {
      user: req.user.id,
        clientImage: req.body.clientImage,
        clientName: req.body.clientName,
        clientFeedback: req.body.clientFeedback,
        clientFeedbackDate:req.body.clientFeedbackDate
    };

    let postData = await TestimonialDetails.create(TestimonialData);

    return res.status(201).send(`Data post sucessfully , ${postData}`);
  } catch (err) {
    return res.status(401).send("Testimonial Detail not sended to database"+err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getTestimonialDetail = await TestimonialDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getTestimonialDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed"+err.message);
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getTestimonialDetail = await TestimonialDetails.findById(req.user.id);
  
      return res.status(201).json({getTestimonialDetail});
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed"+err.message);
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateTestimonial = await TestimonialDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateTestimonial) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateTestimonial);
    } catch (err) {
      return res.status(401).send("Specific data updating failed"+err.message);
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await TestimonialDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).send("Data not found that specific Id");
      }
  
      return res
        .status(401)
        .send("Specific data Deleting Sucessfully " + deleteData);
    } catch (error) {
      return res.status(401).send("Specific data Deleting failed"+error.message);
    }
  };


  export default router;