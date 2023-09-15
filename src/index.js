const express = require('express');
const connect = require('./config/database');
const HashtagRepository = require('./repository/hashtag-repository');
const app = express();
const TweetService = require('./services/tweet-service');
app.listen(3000, async() => {
    console.log("server is started");
    await connect();
    console.log("Mongodb connected");
    let repo = new TweetService();
    // const response = await repo.findByName(['Excited', 'Trend']);
    // console.log(response);
    const response = await repo.create({content:'my #working twiteer'});
    console.log(response);
});