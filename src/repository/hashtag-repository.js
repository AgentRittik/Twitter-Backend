import Hashtag from '../models/hashtags.js'

class HashtagRepository {
    async create(data){
        try{
            const response = await Hashtag.create(data);
            return response;
        }
        catch(error){
            console.log(error);
        }
    }

    async bulkCreate(data){
        try{
            const tags = await Hashtag.insertMany(data);
            return tags;
        }
        catch(error){
            console.log(error);
        }
    }
    async get(id){
        try{
            const response = await Hashtag.findById(id);
            return response;
        }
        catch(error){
            console.log(error);
        }
    }
    async destroy(id){
        try{
            const response = await Hashtag.findByIdAndRemove(id);
            return response;
        }
        catch(error){
            console.log(error);
        }
    }

    async findByName(titleList){
        try{
            const tags = await Hashtag.find({
                title : titleList
            })//.select('title -_id');//select only return a particular field or -_id will not return id
            return tags;
        }
        catch(error){
            console.log(error);
        }
    }
}
export default HashtagRepository;