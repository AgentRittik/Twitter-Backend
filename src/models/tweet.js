const mongoose = require('mongoose');


const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required : true,
    },
    userEmail:{
        type:String
    },
    comments:[
        {
          type: mongoose.Schema.Types.ObjectId,
          ref:'Comment'
        }
    ]
},{timestamps: true});

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \nCreated By : ${this.userEmail}`;
});
//triggers ad hooks 
tweetSchema.pre('save', function(next){
    console.log("inside a hook");
    this.content = this.content+"....";  // manpulating the data that is coming from the user
    next();
})



const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;