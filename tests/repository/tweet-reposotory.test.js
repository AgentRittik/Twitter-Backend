import TweetRepository from '../../src/repository/tweet-repository.js';
import Tweet from '../../src/models/tweet.js';

jest.mock('../../src/models/tweet.js');


describe('create test for creating tweet' , () => { 
    test('Should create a new tweet and return it', async () => {
        const data = {
            content : 'creating a testing tweet'
        }
        //spy helps you to create the mock of functions of an objects
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(()=>{
            return { ...data, createdAt: '2022-02-12',updateAt: '2022-02-13'};
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
        
         expect(spy).toHaveBeenCalled();//check weather this particular function is called or not
         expect(tweet.createdAt);
    });
    
    test('Should not create a tweet and throws a exception' , async () => {
        const data = {
            content : 'creating a testing tweet'
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(()=>{
            throw new Error('Something Went Wrong');
        });
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data).catch( err => {
                expect(err).toBeInstanceOf(Error);
                expect(err.message).toBe('Something Went Wrong');
            }
        );
        
    });
});

describe('testing the getAll function ', ()=> {
    test('testing the function with offset and limti ', async () =>  {
        const data = {
            content : 'creating a testing tweet'
        }
        //spy helps you to create the mock of functions of an objects
        const tweetsArray = [{ ...data, createdAt: '2022-02-12',updateAt: '2022-02-13'},{ ...data, createdAt: '2022-02-12',updateAt: '2022-02-13'},{ ...data, createdAt: '2022-02-12',updateAt: '2022-02-13'}];
        const findResponse = {tweetsArray};
        findResponse.skip = jest.fn((offset ) => findResponse);
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0,limit));//doubt in this line
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(()=>{
            return findResponse;
        });
        const tweetRepository = new TweetRepository();
        const allTweets = await tweetRepository.getAll(0,2);
        expect(spy).toHaveBeenCalled();
        expect(allTweets).toHaveLength(2);
    })
});
  
// describe('Get all tweet tests', () => {
//     test('testing limit for get all',async () => {
//         const data = {
//             content: 'Testing tweet'
//         }
//         const tweetsArray =  [{...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}, {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}, {...data, createdAt: '2022-02-12', updatedAt: '2022-02-12'}];
//         const findResponse = {tweetsArray};
//         findResponse.skip = jest.fn((offset) => findResponse);
//         findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0, limit));
//         const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
//             return findResponse;
//         });
//         const tweetRepository = new TweetRepository();
//         const tweets = await tweetRepository.getAll(0, 2);
//         expect(spy).toHaveBeenCalled();
//         expect(tweets).toHaveLength(2);
//     })
// })