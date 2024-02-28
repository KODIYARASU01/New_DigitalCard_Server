import mongoose from "mongoose";
let adminSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    count: {
      type: Number,
    },
    profileImage: {
      type: String,
    },
    authorName: {
      type: String,
      // required: true,
      // unique: true,
    },
    mobile: {
      type: String,
    },
    whatsup: {
      type: String,
    },
    location: {
      type: String,
    },
    mail: {
      type: String,
    },
    companyAddress: {
      type: String,
    },
    companyEmail: {
      type: String,
    },
    websiteLink: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    companyName: {
      type: String,
    },
  },
  { timestamps: true }
);

let Admin = mongoose.model("Admin", adminSchema);

export default Admin;
