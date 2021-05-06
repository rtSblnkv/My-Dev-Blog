import {Router} from "express";
import {User} from "../models/UserSchema"

const userRouter = Router();

userRouter.get('/user/get',(req,res)=>{
    const {filter,skip,limit,sort,projection,population} = aqp(req.query);
    User.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .projection(projection)
    .populate(population)
    .exec((err,users) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).send(users.flatMap(x => x));
        }
    });
    

});

userRouter.post('/user/post',(req,res)=>{
    
})

userRouter.put('/user/update',(req,res)=>{
    
})

userRouter.delete('/user/:id',(req,res)=>{
    
})

export {userRouter};