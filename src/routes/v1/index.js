import express from 'express'
import {createTweet , getTweet} from '../../controllers/tweet-controller.js';
import {createComment} from '../../controllers/comment-controller.js';
const router = express.Router();

router.post('/tweets' ,createTweet);
router.get('/tweets/:id',getTweet);
router.post('/comment',createComment);


export default router;