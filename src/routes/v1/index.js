import express from 'express'
import {createTweet , getTweet} from '../../controllers/tweet-controller.js';
import {createComment} from '../../controllers/comment-controller.js';
import { signUp , login } from '../../controllers/user-controller.js';
import { authenticate } from '../../middleware/authenticate.js';

const router = express.Router();

router.post('/tweets' ,createTweet);
router.get('/tweets/:id',getTweet);
router.post('/comment',authenticate , createComment);
router.post('/signup',signUp);

router.post('/login', login);


export default router;

// setting up email authentication using sendingv a link 
// user send request -> create a unique_id;
// create the link and send to the email : -> https://mywebsite.com/verifyemail/sdfsjkh3kj4h2
// exposse a /verifyEmail/:unique_id  route
// extract this unique id and check inside your database userID -> uniqueId mapping 
//check the created at and current time within in 30 min then verified otherwise not verified 