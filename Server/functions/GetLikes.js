import {Like} from "../models/LikeSchema";

export async function getPostLikes(id){
   Like.countDocuments({user:id}).exec((err,count)=>{
       if(err)
       {
           console.log(err.code);
           return null;
       }
       else
       {
           return count;
       }

   });
}
