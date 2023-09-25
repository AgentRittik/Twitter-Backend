import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required : true,
    },
    userId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    onModel: {
        type : String,
        required : true,
        enum : ['Tweet' , 'Comment'] // later if we want to  add comment feature on feedback then we can easily add it here 
    },
    commentable :{ 
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    }
},{timestamps: true});

const Comment = mongoose.model('Comment',commentSchema);
export default Comment;