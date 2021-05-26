import {Router} from "express";
import {Section} from "../models/SectionSchema.js";

const sectionRouter = Router();

sectionRouter.get('/',async(req,res)=>{
    await Section.find()
    .exec((err,sections) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).json(sections.map(x => x));
        }
    });  
})

sectionRouter.post('/',(req,res)=>{
    
})

sectionRouter.put('/',(req,res)=>{
    
})

sectionRouter.delete('/post/delete',(req,res)=>{
    
})

export {sectionRouter};