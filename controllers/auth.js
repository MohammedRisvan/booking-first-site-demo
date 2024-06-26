import User from "../model/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register=async(req,res,next)=>{
    const {username,email,password}=req.body;
 try{
    const salt=bcrypt.genSaltSync(10);
    const hash=bcrypt.hashSync(password,salt)
    console.log(hash);
const newUser=new User({
    username:username,
    email:email,
    password:hash,
})
await newUser.save()
res.status(200).send("User has been created")
 }catch(err){
    next(err)
 }
};
export const login=async (req,res,next)=>{
    try{
        const user= await User.findOne({username:req.body.username});
        if(!user)return next(createError(404,"User not found!"))
        const isPasswordCorrect=await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect)return next(createError(400,"Wrong password or username!"))
        const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)


        const {password,isAdmin,...othersDetailes}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,  
        }).status(200).json(othersDetailes)
    }catch(err){
next(err)
}};