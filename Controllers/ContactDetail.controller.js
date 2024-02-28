import router from "../Routes/BasicDetail.router.js";
import ContactDetails from "../models/ContactDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.Email || !req.body.MobileNumber || !req.body.DOB) {
      return res.status(401).json({
        message: "Send all required fields : Email , MobileNumber, DOB",
      });
    }
    let ContactData = {
      user: req.user.id,
      Email: req.body.Email,
      AlternateEmail: req.body.AlternateEmail,
      MobileNumber: req.body.MobileNumber,
      AlternateMobileNumber: req.body.AlternateMobileNumber,
      DOB: req.body.DOB,
      Address: req.body.Address,
    };

    let postData = await ContactDetails.create(ContactData);

    return res.status(201).json({postData});
  } catch (err) {
    return res.status(401).send("Contact Detail not sended to database" + err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getContactDetail = await ContactDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getContactDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed");
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getContactDetail = await ContactDetails.findById(req.user.id);
  
      return res.status(201).json({getContactDetail});
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed");
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateDetails = await ContactDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateDetails) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateDetails);
    } catch (err) {
      return res.status(401).send("Specific data updating failed");
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await ContactDetails.findByIdAndDelete(id );
  
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