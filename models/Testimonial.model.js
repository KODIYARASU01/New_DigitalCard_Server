import mongoose from 'mongoose';

let TestimonialDetailSchema=new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    clientImage:{
        type:String,
        required:true,
    },
    clientName:{
        type:String,
        required:true,
    },
    clientFeedbackDate:{
        type:String,
        required:true,
    },
    clientFeedback:{
        type:String,
        required:true,
    }
},
{timestamps:true}
);


let TestimonialDetails=mongoose.model('TestimonialDetails',TestimonialDetailSchema);

export default TestimonialDetails;