import Tweet from '../models/tweet.js'
import CrudRepository from './crud-repository.js';
class TweetRepository extends CrudRepository{

    constructor(){
        super(Tweet);
    }
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
            const tweet = await Tweet.findById(id).populate({path :'likes'});//because we are populating the array thats why path
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }

    async getWithComments(id){
        try{
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean(); //WE HAVE TO USE path here because we don't have direct association we pass comment as an array but if we pass the object then we just write ('comments')
            // we used lean here because mongo doesn't return palin js object , it returns mongo document , so to  convert it it JS OBJECT we have use Lean()
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }
    
    // async update(tweetId , data){
    //     try{
    //         const tweet = await Tweet.findByIdAndUpdate(tweetId , data, {new:true}); // we have to pass the new:true otherwise it will return thee previous data after an update
    //         return tweet;

    //     }
    //     catch(error){
    //         console.log(error);
    //     }
    // }
    async destroy(id){
        try{
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        }
        catch(error){
            console.log(error);
        }
    }
    async getAll(offset,limit){
        try{
            const response = await Tweet.find().skip(offset).limit(limit);
            return response;
        }
        catch(error){

        }
    }
}
export default TweetRepository;