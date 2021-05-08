import pkg from 'mongoose';
const {Schema,model} = pkg;

const PostSchema = new Schema({
    title:{type:String,required:true},
    description:String, 
    text:{type:String,required:true},
    date:{type:Date,default:Date.now},
    hashtags:{type:[String],match:'\#[a-zA-Z]'},
    section:{type:Schema.ObjectId,ref:'Section',required:true},
    author:{type:Schema.ObjectId,ref:'User',required:true},
});

const Post = model("post",PostSchema);
export {Post};