import multer from 'multer';
import multerS3 from 'multerS3';
import aws  from ' aws-sdk';
import dotenv from 'dotenv';
dotenv.config();

aws.config.update({
    region : process.env.AWS_REGION,
    secrteAccessKey : process.env.SECRET_ACCESS_KEY,
    accessKeyId : process.env.ACCESS_KEY_ID
});

const s3 = new aws.S3();


const upload = multer({
    store : multerS3({
        s3 : s3,
        bucket : process.env.BUCKET_NAME,
        acl : 'public-read',
        metadata : function(req,file,cb){
            cb(null , {fieldName : file.fieldname});
        },
        key: function(req,res,cb){
            cb(null, Date.now().toString)
        }
    })
});

export default upload;