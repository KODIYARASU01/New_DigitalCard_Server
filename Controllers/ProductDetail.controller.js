import router from "../Routes/BasicDetail.router.js";
import ProductDetails from "../models/ProductDetail.model.js";

export const postData = async (req, res) => {
  try {
    if (!req.body.productImage || !req.body.productTitle || !req.body.productSummary || !req.body.productReleaseDate) {
      return res.status(401).json({
        message: "Send all required fields : productImage , productTitle, productSummary,productReleaseDate",
      });
    }
    let ProductData = {
      user: req.user.id,
        productImage: req.body.productImage,
        productTitle: req.body.productTitle,
        productSummary: req.body.productSummary,
        productReleaseDate:req.body.productReleaseDate
    };

    let postData = await ProductDetails.create(ProductData);

    return res.status(201).send(`Data post sucessfully , ${postData}`);
  } catch (err) {
    return res.status(401).send("Product Detail not sended to database"+err.message);
  }
};


export const getData=async (req, res) => {
    try {
      let getProductDetail = await ProductDetails.find({ user: req.user.id });
  
      return res
        .status(201)
        .json({getProductDetail});
    } catch (err) {
      return res.status(401).send("Data Fetching failed"+err.message);
    }
  };


  export const getSpecificData=async (req, res) => {
    try {
      let { id } = req.params;
      let getProductDetail = await ProductDetails.findById(req.user.id);
  
      return res.status(201).json({getProductDetail});
    } catch (err) {
      return res.status(401).send("Specific Data Fetching failed"+err.message);
    }
  };


  export const updateData=async (req, res) => {
    try {
      let { id } = req.params;
  
      let updateProduct = await ProductDetails.findByIdAndUpdate(id, req.body);
  
      if (!updateProduct) {
        return res.status(401).send("Data not found that specific id");
      }
      return res.status(201).send("Data Updated Sucessfull" + updateProduct);
    } catch (err) {
      return res.status(401).send("Specific data updating failed"+err.message);
    }
  };


  export const deleteData= async (req, res) => {
    try {
      let id = req.params.id;
  
      let deleteData = await ProductDetails.findByIdAndDelete(id );
  
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