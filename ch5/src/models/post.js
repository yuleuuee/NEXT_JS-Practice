import mongoose from "mongoose";

// defining Schema :
const postSchema = new mongoose.Schema({
    title : {type: String, required: true,trim:true}, // field name (columns)
    body :{type: String, required: true,trim:true},

})

// compileing Schema (creating a model):
const Post = mongoose.models.post || mongoose.model('post',postSchema)

export default Post