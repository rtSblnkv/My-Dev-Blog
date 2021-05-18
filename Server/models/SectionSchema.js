import pkg from 'mongoose';
const {Schema,model} = pkg;

const SectionSchema = new Schema({
    section_name:{type:String,required:true}
});
const Section = model("sections",SectionSchema);
export{Section};