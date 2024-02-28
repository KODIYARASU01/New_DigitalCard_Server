import router from "../Routes/BasicDetail.router.js";
import ServiceDetails from "../models/ServiceDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.serviceImage || !req.body.serviceTitle || !req.body.serviceSummary) {
      return res.status(401).json({
        message: "Send all required fields : serviceImage , serviceImage, serviceSummary",
      });
    }
    let ServiceData = {
      user: req.user.id,
        serviceImage: req.body.serviceImage,
        serviceTitle: req.body.serviceTitle,
        serviceSummary: req.body.serviceSummary,
    };

    let postData = await ServiceDetails.create(ServiceData);

    return res.status(201).send(`Data post sucessfully , ${postData}`);
  } catch (err) {
    return res.status(401).send("Service Detail not sended to database"+err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getServiceDetail = await ServiceDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getServiceDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed"+err.message);
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getServiceDetail = await ServiceDetails.findById(req.user.id);
  
      return res.status(201).json(getServiceDetail);
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed"+err.message);
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateService = await ServiceDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateService) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateService);
    } catch (err) {
      return res.status(401).send("Specific data updating failed"+err.message);
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await ServiceDetails.findByIdAndDelete(id );
  
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