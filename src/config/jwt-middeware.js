import JWT from 'passport-jwt';
import User from '../models/user.js';
const JwtStrategy = JWT.Strategy;
const Extractjwt = JWT.ExtractJwt;

const opts = {
    jwtFromRequest : Extractjwt.fromAuthHeaderAsBearerToken(), //this will extracting the toke as a bearertoken
    secretOrKey : 'twitter_secret'
}

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts,async(jwt_payload ,done) =>{
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null,false);
        }
        else{
            done(null,user);
        }
    }))
}