import mongoose from 'mongoose';


let SocialMediaDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    Facebook:{
        type:String,
        unique:true
    },
    LinkedIn:{
        type:String,
        unique:true
    },
    WhatsUp:{
        type:String,
        required:true,
        unique:true
    },
    Instagram:{
        type:String,
        unique:true
    },
    Twiter:{
        type:String,
        unique:true
    }
},
{timestamps:true}
);


let SocialMediaDetails=mongoose.model('SocialMediaDetails',SocialMediaDetailSchema);

export default SocialMediaDetails;