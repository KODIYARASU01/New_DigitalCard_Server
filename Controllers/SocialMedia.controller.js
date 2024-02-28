import router from "../Routes/BasicDetail.router.js";
import SocialMediaDetails from "../models/SocialMediaDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.WhatsUp) {
      return res.status(401).json({
        message: "Send all required fields : WhatsUp",
      });
    }
    let SocialMediaData = {
      user: req.user.id,
        Facebook: req.body.Facebook,
        LinkedIn: req.body.LinkedIn,
        WhatsUp: req.body.WhatsUp,
        Instagram: req.body.Instagram,
        Twiter: req.body.Twiter,
    };

    let postData = await SocialMediaDetails.create(SocialMediaData);

    return res.status(201).send(`Data post sucessfully , ${postData}`);
  } catch (err) {
    return res.status(401).send("SocialMedia Detail not sended to database" +err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getSocialMediaDetail = await SocialMediaDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getSocialMediaDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed");
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getSocialMediaDetail = await SocialMediaDetails.findById(req.user.id);
  
      return res.status(201).json({getSocialMediaDetail});
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed");
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateSocialMediaDetails = await SocialMediaDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateSocialMediaDetails) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateSocialMediaDetails);
    } catch (err) {
      return res.status(401).send("Specific data updating failed");
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await SocialMediaDetails.findByIdAndDelete(id );
  
      if (!deleteData) {
        return res.status(401).send("Data not found that specific Id");
      }
  
      return res
        .status(401)
        .send("Specific data Deleting Sucessfully " + deleteData);
    } catch (error) {
      return res.status(401).send("Specific data Deleting failed");
    }
  };


  export default router;