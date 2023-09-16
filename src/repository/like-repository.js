import Like from '../models/like';
import CrudRepository from './crud-repository';

class LikeRepository extends CrudRepository{
    coonstructor(){
        super(Like);
    }
}

export default LikeRepository;