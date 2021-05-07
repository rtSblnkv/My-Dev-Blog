import pkg from 'mongoose';
const {Schema,model} = pkg;

const SectionSchema = new Schema({
    name:{type:String,required:true}
});
const Section = model("section",SectionSchema);
export{Section};