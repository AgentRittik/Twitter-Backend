const Tweet = require('../models/tweet');
const tweet = require('../models/tweet');

class TweetRepository {
    async create(data){
        try{
            const tweet = await Tweet.create(data);
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
            const tweet = await Tweet.findById(id);
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }

    async getWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path:'comments'}); //WE HAVE TO USE path here because we don't have direct association we pass comment as an array but if we pass the object then we just write ('comments')
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }
    
    async update(tweetId , data){
        try{
            const tweet = await Tweet.findByIdAndUpdate(tweetId , data, {new:true}); // we have to pass the new:true otherwise it will return thee previous data after an update
            return tweet;

        }
        catch(error){
            console.log(error);
        }
    }
    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }
}
module.exports = TweetRepository;