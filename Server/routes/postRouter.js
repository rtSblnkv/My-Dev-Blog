import {Router} from "express";
import {Post} from "../models/PostSchema.js";
import {createPostsResponse,createPostResponse} from "../functions/ServerResponses.js";
import {getSectionId} from "../functions/GetId.js"

const postRouter = Router();

postRouter.get('/:section_name',async(req,res)=>{
    let sectionId = await getSectionId(req.params.section_name);
    Post.find({'section': sectionId})
    .populate('author')
    .sort({date:-1})
    .exec((err,posts) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).json(createPostsResponse(posts));
        }
    });  
})

postRouter.get('/:section/:id',(req,res)=>{
    Post.findOne({_id:req.parama.id})
    .populate('author')
    .exec((err,post) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).json(createPostResponse(post));
        }
    });  
});

postRouter.post('/',(req,res)=>{
    
})

postRouter.put('/',(req,res)=>{
    
})

postRouter.delete('/',(req,res)=>{
    
})

export {postRouter};