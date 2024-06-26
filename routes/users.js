import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
// import { verifyToken } from "../utils/verifyToken.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router=express.Router();
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("logged in sptial user ")
// })
// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user , you are logged in and delete your accout ")
// })
// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin ,you are logged in you can delete all accounts")
// })
//UPDATE USER
router.put("/:id",verifyUser,updateUser);
//DELETE USER
router.delete("/:id",verifyUser,deleteUser);
//GET USER
router.get("/:id",verifyUser,getUser); 
//GET ALLUSERS
router.get("/",verifyAdmin,getUsers);

export default router;