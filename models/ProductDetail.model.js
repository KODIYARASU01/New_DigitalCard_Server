import mongoose from 'mongoose';

let ProductDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    productImage:{
        type:String,
        required:true,
    },
    productTitle:{
        type:String,
        required:true,
    },
    productReleaseDate:{
        type:String,
        required:true,
    },
    productSummary:{
        type:String,
        required:true,
    }
},
{timestamps:true}
);


let ProductDetails=mongoose.model('ProductDetails',ProductDetailSchema);

export default ProductDetails;