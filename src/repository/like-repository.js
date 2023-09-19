import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }

    async findByUserAndLikable(data){
        try{
            const response = await Like.findOne(data);
            console.log(response);
            return response;
        }
        catch(error){
            throw error;
        }
    }
}

export default LikeRepository;