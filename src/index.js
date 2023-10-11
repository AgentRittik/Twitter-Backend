import express from 'express';
import {connect} from './config/database.js';
import ApiRoutes from './routes/index.js';
import bodyParser from 'body-parser';
import passport from 'passport';
import { passportAuth } from './config/jwt-middeware.js';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended :true}));

app.use (passport.initialize());
passportAuth(passport);

app.use('/api',ApiRoutes);
app.listen(3000, async() => {
    console.log("server is started");
    await connect();
    console.log("Mongodb connected");


});