import express from 'express';
import {connect} from './config/database.js';
import HashtagRepository from './repository/hashtag-repository.js';
import service from './services/like-service.js'
import ApiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import {UserRepository , TweetRepository } from './repository/index.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));
app.use('/api',ApiRoutes);
app.listen(3000, async() => {
    console.log("server is started");
    await connect();
    console.log("Mongodb connected");
    const userRepo = new UserRepository();
    const Like = new service();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);
    // const user =  await userRepo.create({
    //     email: 'vvishal38@mail.com',
    //     password : '12345678',
    //     name : 'vishal sharma'
    // });
    const user  = await userRepo.getAll();
    console.log(tweets[0].id);
    await Like.toggleLike(tweets[0].id, 'Tweet', user[0].id);


});