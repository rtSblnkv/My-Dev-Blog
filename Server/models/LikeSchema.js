import {Schema} from "mongoose";

const LikeSchema = new Schema({
    user:{type:Schema.ObjectId,ref:'User'},
    post:{type:Schema.ObjectId,ref:'Post'}
});

const Like = model("Like",LikeSchema);
export {Like};