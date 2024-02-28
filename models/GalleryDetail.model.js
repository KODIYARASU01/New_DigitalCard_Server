import mongoose from 'mongoose';

let GalleryDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    galleryImage:{
        type:String,
        required:true,
    },
    videoURL:{
        type:String,
    }
},
{timestamps:true}
);


let GalleryDetails=mongoose.model('GalleryDetails',GalleryDetailSchema);

export default GalleryDetails;