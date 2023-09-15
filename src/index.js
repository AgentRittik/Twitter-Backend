import express from 'express';
import {connect} from './config/database.js';
import HashtagRepository from './repository/hashtag-repository.js';
import service from './services/tweet-service.js'
const app = express();
app.listen(3000, async() => {
    console.log("server is started");
    await connect();
    console.log("Mongodb connected");
    let ser  = new service();
    await ser.create({content : 'my other #COdE #work or #NOT ?'})
});