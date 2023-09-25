import CommentService from "../services/comment-service.js";

const commentService = new CommentService();


export const createComment = async(req ,res) => {
    try{
        console.log(req.query.modelId ,req.query.modelType ,  req.body.userId , req.body.content);
        const response = await commentService.createComment(req.query.modelId , req.query.modelType ,req.body.userId , req.body.content);
        return res.status(201).json({
            data : response,
            message :'Succcessfully created new Comment',
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