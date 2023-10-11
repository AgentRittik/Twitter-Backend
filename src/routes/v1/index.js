import express from 'express'
import {createTweet , getTweet} from '../../controllers/tweet-controller.js';
import {createComment} from '../../controllers/comment-controller.js';
import { signUp , login } from '../../controllers/user-controller.js';
import { authenticate } from '../../middleware/authenticate.js';

const router = express.Router();

router.post('/tweets' ,authenticate, createTweet);
router.get('/tweets/:id',getTweet);
router.post('/comment',authenticate , createComment);
router.post('/signup',signUp);

router.post('/login', login);


export default router;