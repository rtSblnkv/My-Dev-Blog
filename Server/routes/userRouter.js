import {Router} from "express";
import {User} from "../models/UserSchema.js"

const userRouter = Router();

userRouter.get('/',(req,res)=>{
    User.find()
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

userRouter.post('/',(req,res)=>{
    
})

userRouter.put('/',(req,res)=>{
    
})

userRouter.delete('/:id',(req,res)=>{
    
})

export default  userRouter;