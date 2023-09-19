import mongoose from "mongoose";

//very important concepts of refPath has been used 
// if one action can performed on multiple things then we can follow this type of design
const likeSchema = new mongoose.Schema({
    onModel: {
        type : String,
        required : true,
        enum : ['Tweet' , 'Comment']
    },
    likeable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
},{timestamps : true});

const Like = mongoose.model('Like', likeSchema);

export default Like;