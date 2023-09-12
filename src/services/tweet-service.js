
const { TweetRepository } = require('../repository/index')


class TweetService{
    constructor(){
        this.tweetRepository = new TweetRepository();
    }

    async create(data){
        const content = data.content;
        const tags  = content.match(/#[a-zA-Z0-9]+/g);// this regx extracts hashtags
        tags = tags.map((tag)=> tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
    }
}

module.exports = TweetService;

/*
 this is my #first . I am really #excited
*/