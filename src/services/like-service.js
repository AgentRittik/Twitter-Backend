import { LikeRepository , TweetRepository } from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    
    //if the user already liked the tweet then it will unlike it otherwise it will like it
    //modelId act as tweet id 
    async toggleLike(modelId, modelType , userId){//  /api/v1/likes/toggle?id=model&type=Tweet
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.get(modelId);
        }
        else if(modelType == 'Comment'){
            ///Todo
        }
        else{
            throw new Error('unknown moddel type');
        }

        var isAdded;
        const exists = await this.likeRepository.findByUserAndLikable({
            user : userId,
            onModel : modelType,
            likeable : modelId
        });
        if(exists){ // we have to remove it  // also understan opull operation of mongodb
            likeable.likes.pull(exists.id) // removed from tweet like property array
            await likeable.save();
            await exists.deleteOne();
            isAdded = false;
        }
        else{ // create a new like
            const newLike = await this.likeRepository.create({
                user : userId,
                onModel : modelType,
                likeable : modelId
            });
            likeable.likes.push(newLike); // tweet 
            await likeable.save();
            isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;