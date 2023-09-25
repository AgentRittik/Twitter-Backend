import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();


export const createTweet = async(req ,res) => {
    try{
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            data : response,
            message :'Succcessfully created new tweet',
            sucess : true,
            err : {}
        });
    }
    catch(error){
        res.status(500).json({
            sucess : false,
            message : 'something went wrong',
            data : {},
            err : error
        })
    }
}

export const getTweet = async(req ,res) => {
    try{
        const response = await tweetService.get(req.params.id);
        return res.status(201).json({
            data : response,
            message :'Succcessfully fetched the tweet',
            sucess : true,
            err : {}
        });
    }
    catch(error){
        res.status(500).json({
            sucess : false,
            message : 'something went wrong',
            data : {},
            err : error
        })
    }
}