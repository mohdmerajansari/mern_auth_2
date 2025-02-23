import bcrypt from "bcrypt"
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const userSingup = async (req, res) => {
  const user = req.body;
  if(!user.name || !user.email || !user.password) {
   return res.status(400).json({success: false, message: "Please provide all the required fields"})
  }
  const userDetails = await User.findOne({email : user.email})

  if(userDetails) {
   return res.status(409).json({success: false, message: "User already exists!"})
  }
  user.password = await bcrypt.hash(user.password, 10);
  const newUser = User(user);
  try {
    await newUser.save();
    res.status(200).json({success: true, data: newUser})
  } catch (error) {
    console.log("Error: ", error.message)
    res.status(500).json({success: false, message: "Server side error"})
  }
}


export const userLogin = async (req, res) => {
  const user = req.body;
  const errorMessage = "Authentication failed! Email or password is wrong!"
  if(!user.email || !user.password) {
   return res.status(400).json({success: false, message: "Please provide all the required fields"})
  }
  const userDetails = await User.findOne({email : user.email})

  if(!userDetails) {
   return res.status(409).json({success: false, message: errorMessage})
  }
  const isPassEqual = await bcrypt.compare(user.password, userDetails.password)
  if(!isPassEqual) {
    return res.status(409).json({success: false, message: errorMessage})
  }
  const jwtToken = jwt.sign({email: userDetails.email, id: userDetails._id}, process.env.JWT_TOKEN,{expiresIn:'24h'})

  try {
  
    res.status(200).json({success: true, message: "Login successfull!", jwtToken, Email:user.email, Name: userDetails.name})
  } catch (error) {
    console.log("Error: ", error.message)
    res.status(500).json({success: false, message: "Server side error"})
  }
}