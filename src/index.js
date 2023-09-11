const express = require('express');
const connect = require('./config/database');
const Tweet = require('./models/tweet');
const Comment = require('./models/comment')
const app = express();
const TweetRepository = require('./repository/tweet-repository')
app.listen(3000, async() => {
    console.log("server is started");
    await connect();
    console.log("Mongodb connected");
    // const tweet = await Tweet.create({
    //     content: 'Third Tweet',
    //     // userEmail:'First@gmail.com',
    // });  
    // const tweets = await Tweet.find({userEmail: 'First@gmail.com'});
    // const tweet = await Tweet.findById('64f9c6b86f50e0bacbac2c31');
    // tweet.userEmail = "a@b.com";
    // tweet.save();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.update('64f9c6b86f50e0bacbac2c31',
    //     {content:'my tweet is working 1'})
    // const tweet = await tweetRepo.create({content:'tweet with commmwnt schema'});
    // const comment  = await Comment.create({content:'my comment'});
    // tweet.comments.push(comment);
    // console.log(tweet);
    // tweet.comments.push({content: 'first content here'});
    // await tweet.save();
    // console.log(tweet);
    // const tweet = await tweetRepo.getAll(0,4);
    // console.log(tweet[0].contentWithEmail);
    const tweet  = await tweetRepo.create({content: 'with Hooks'});
    console.log(tweet);
});