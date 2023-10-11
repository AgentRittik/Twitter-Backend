import passport from 'passport';


export const authenticate = (req, res ,next) => {
    passport.authenticate('jwt' , (err,user,data) => {
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message : 'Unauthorized access'
            })
        }
        req.user = user; // once the req has authenticated whenevr the authenticated api wants to get the data about the user it will get it form the req object 
        //understanding the use case - > the front-end is already sending us the jwt tooken and we don't want to user id to expose to with jwt token while authentication we setup the user id from database to req object
        next();
    })(req,res,next);
}