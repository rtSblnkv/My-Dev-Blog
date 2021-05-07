import {Schema} from "mongoose";

const SectionSchema = new Schema({
    name:{type:String,required:true}
});
const Section = model("section",SectionSchema);
export{Section};