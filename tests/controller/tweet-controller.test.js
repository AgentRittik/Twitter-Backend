import { mockRequest , mockResponse } from "../mocker";
import { getTweet } from '../../src/controllers/tweet-controller.js';
import TweetService from '../../src/services/tweet-service.js';

jest.mock('../../src/services/tweet-service.js');

test('should return all the tweets', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [
        {
            content: 'Tweet 1'
        }, 
        {
            content: 'Tweet 2'
        }
    ];
    (TweetService.prototype.get).mockReturnValue(response);

    await getTweet(req,res);
    expect(res.json).toHaveBeenCalledWith({   // this is used weather res.json function is called with the value or object that we have passed in the toHaveBeenCalledWith()  function
        data : response,
        message :'Succcessfully fetched the tweet',
        sucess : true,
        err : {}
    })
})