import router from "../Routes/BasicDetail.router.js";
import GalleryDetails from "../models/GalleryDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.galleryImage) {
      return res.status(401).json({
        message: "Send all required fields : galleryImage",
      });
    }
    let GalleryData = {
      user: req.user.id,
        galleryImage: req.body.galleryImage,
        videoURL: req.body.videoURL,
    };

    let postData = await GalleryDetails.create(GalleryData);

    return res.status(201).send(`Data post sucessfully , ${postData}`);
  } catch (err) {
    return res.status(401).send("Gallery Detail not sended to database"+err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getGalleryDetail = await GalleryDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getGalleryDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed"+err.message);
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getGalleryDetail = await GalleryDetails.findById(req.user.id);
  
      return res.status(201).json({getGalleryDetail});
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed"+err.message);
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateGallery = await GalleryDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateGallery) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateGallery);
    } catch (err) {
      return res.status(401).send("Specific data updating failed"+err.message);
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await GalleryDetails.findByIdAndDelete(id );
  
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