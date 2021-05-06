import {Router} from "express";
import {Post} from "../models/PostSchema"

const postRouter = Router();

postRouter.get('/post/get',(req,res)=>{
    const {filter,skip,limit,sort,projection,population} = aqp(req.query);
    Post.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .projection(projection)
    .populate(population)
    .exec((err,posts) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).send(posts.flatMap(x => x));
        }
    });  
})

postRouter.post('/post/post',(req,res)=>{
    
})

postRouter.put('/post/update',(req,res)=>{
    
})

postRouter.delete('/post/delete',(req,res)=>{
    
})

export {postRouter};