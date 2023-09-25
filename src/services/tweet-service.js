
import { TweetRepository, HashtagRepository} from '../repository/index.js'


class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        let tags  = content.match(/#[a-zA-Z0-9]+/g);// this regx extracts hashtags
        tags = tags.map((tag)=> tag.substring(1).toLowerCase());
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        //input[excited, Coding , js , carrer] -> output [{title: excited} , {title:carrer}]
        let titleOfPresentTags = alreadyPresentTags.map((tag)=>tag.title); // converting the array of objects int array of present tags
        //filtering the array which are not present in already present tags array
        let newTags = tags.filter(value => !titleOfPresentTags.includes(value));
        //curently the new tags are in form of arry but for bulk create we need to pass array of objects
        //[{title :'coding', tweets[]}]

        newTags = newTags.map(tag=> {
            return {title :tag , tweets:[tweet.id]}
        });
       await this.hashtagRepository.bulkCreate(newTags);
       alreadyPresentTags.forEach((tag) =>{
        tag.tweets.push(tweet.id);
        tag.save();
       })
       return tweet;

    }
    
    async get(tweetId){
        try{
            const tweet = await this.tweetRepository.getWithComments(tweetId);
            return tweet;
        }
        catch(error){
            throw error;
        }
    }
}

export default TweetService;

/*
 this is my #first . I am really #excited
*/