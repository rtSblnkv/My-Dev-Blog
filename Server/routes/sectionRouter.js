import {Router} from "express";
import {Section} from "../models/SectionSchema.js";

const sectionRouter = Router();

sectionRouter.get('/',(req,res)=>{
    Section.find(filter)
    .skip(skip)
    .limit(limit)
    .sort(sort)
    .projection(projection)
    .populate(population)
    .exec((err,sections) => {
        if(err){
            console.log(err.code);
            res.status(400).json(err.Code);
        }
        else {
            res.status(200).send(sections.flatMap(x => x));
        }
    }); 
});

sectionRouter.post('/',(req,res)=>{
    
})

sectionRouter.put('/',(req,res)=>{
    
})

sectionRouter.delete('/post/delete',(req,res)=>{
    
})

export {sectionRouter};