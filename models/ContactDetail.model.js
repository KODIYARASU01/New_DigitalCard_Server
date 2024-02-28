import mongoose from 'mongoose';


let ContactDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    AlternateEmail:{
        type:String,
        unique:true
    },
    MobileNumber:{
        type:Number,
        required:true,
        unique:true
    },
    AlternateMobileNumber:{
        type:Number,
        unique:true
    },
    DOB:{
        type:String,
        required:true
    },
    Address :{
        type:String,
    }
},
{timestamps:true}
);


let ContactDetails=mongoose.model('ContactDetails',ContactDetailSchema);

export default ContactDetails;