import UserService from "../services/user-service.js";
const userService = new UserService();
export const signUp= async(req,res)=>{
    try{
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name : req.body.name
        });
        return res.status(201).json({
            sucess: true,
            message:'Sucessfully created a new user',
            data : response,
            err: {}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}

export const login = async(req,res) => {
    try{
        const token  = await userService.signin(req.body);
        return res.status(401).json({
            message: 'sucessfully logged in',
            success : true,
            data : token,
            err : {}
        })
    }
    catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            sucess: false,
            err: error
        });
    }
}