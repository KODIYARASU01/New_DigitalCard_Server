import mongoose from "mongoose";

let BasiDetailSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    banner: {
      type: String,
    },
    logo: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  { timestamps: true }
);

let BasicDetail = mongoose.model("BasicDetail", BasiDetailSchema);

export default BasicDetail;
