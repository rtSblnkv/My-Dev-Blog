import {Router} from "express";

const likeRouter = Router();

likeRouter.get('/like/get',(req,res)=>{
    const {filter,skip,limit,sort,projection,population} = aqp(req.query);
    Like.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .projection(projection)
    .populate(population)
    .exec((err,likes) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).json(likes.flatMap(x => x));
        }
    }); 
})

likeRouter.post('/like/post',(req,res)=>{
    
})

likeRouter.put('/like/update',(req,res)=>{
    
})

likeRouter.delete('/like/delete',(req,res)=>{
    
})

export {likeRouter}; 