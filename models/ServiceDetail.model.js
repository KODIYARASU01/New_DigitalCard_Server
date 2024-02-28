import mongoose from 'mongoose';

let ServiceDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    serviceImage:{
        type:String,
        required:true,
    },
    serviceTitle:{
        type:String,
        required:true,
    },
    serviceSummary:{
        type:String,
        required:true,
    }
},
{timestamps:true}
);


let ServiceDetails=mongoose.model('ServiceDetails',ServiceDetailSchema);

export default ServiceDetails;