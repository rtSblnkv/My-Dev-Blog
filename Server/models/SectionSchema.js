import {Schema} from "mongoose";

const SectionSchema = new Schema({
    section:{type:String,required:true}
});
const Section = model("section",SectionSchema);
export{Section};