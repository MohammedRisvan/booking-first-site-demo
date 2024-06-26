import mongoose from"mongoose";

const UserSchema=mongoose.Schema({
    username:{  
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{Timestamp:true});
export default mongoose.model("User",UserSchema);