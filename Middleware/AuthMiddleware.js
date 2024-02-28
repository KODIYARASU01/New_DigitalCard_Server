import User from "../models/User.model.js";
// import About from "../models/About.model.js";
import jwt from "jsonwebtoken";
export const auth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      const decode = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ error: "Not Autherized ,Wrong Token" });
    }

    if (!token) {
      return res.status(401).send("No Token Found");
    }
  }
};
// export const aboutAuth = async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       token = req.headers.authorization.split(" ")[1];
//       console.log(token);
//       const decode = jwt.verify(token, process.env.SECRET_TOKEN);
//       req.user = await User.findById(decode.id).select("-password");
//       next();
//     } catch (error) {
//       return res.status(401).json({ error: "Not Autherized ,Wrong Token" });
//     }

//     if (!token) {
//       return res.status(401).send("No Token Found");
//     }
//   }
// };
