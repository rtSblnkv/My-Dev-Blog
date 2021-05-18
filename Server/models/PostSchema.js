import pkg from 'mongoose';
const {Schema,model} = pkg;

const PostSchema = new Schema({
    title:{type:String,required:true},
    description:String, 
    text:{type:String,required:true},
    date:{type:Date,default:Date.now},
    hashtags:{type:[String],match:'\#[a-zA-Z]'},
    section:{type:String,required:true},
    author:{type:Schema.ObjectId,ref:'users',required:true},
});

const Post = model("posts",PostSchema);
export {Post};