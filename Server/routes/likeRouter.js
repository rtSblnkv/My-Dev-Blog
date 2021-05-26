import {Router} from "express";
import {Like} from "../models/LikeSchema.js";

const likeRouter = Router();

likeRouter.post('/:section/:id', (req,res)=>{
    Like.create(
        {user:req.body.user._id,
        post:req.params.section},(err)=>{
            if(err)
            {
                console.log(err.code);
                res.status(400).json(err.code);
            }
            else res.status(200).json(`User ${req.body.user} liked ${req.params.section} successfully`);
        });
    });

    export default likeRouter;
