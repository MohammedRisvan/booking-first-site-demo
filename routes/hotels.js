import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router=express.Router();

//CREATE
// router.post("/",(req,res)=>{
// console.log(req.body);
//     res.send("hello howareyou")
// })
router.post("/",createHotel)
//UPDATE
router.put("/:id",updateHotel);
//DELETE
router.delete("/:id",deleteHotel);
//GET
router.get("/:id",getHotel);
//GET ALL
router.get("/",getHotels);
//GET HOTEL COUNT
router.get("/countByCity",countByCity);
//GETHOTEL TYPE
router.get("/countByType")

export default router;