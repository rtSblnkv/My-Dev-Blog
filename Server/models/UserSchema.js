import {Schema} from "mongoose";

const UserSchema = new Schema({
    login:{type:String,required:true},
    password:{type:String,required:true},
    nickname:String  
});

const User = model("user",UserSchema);
export {User};