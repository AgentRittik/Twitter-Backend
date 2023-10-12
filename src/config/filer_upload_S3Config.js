import { config } from 'dotenv';
config();
import multer from 'multer';
import multerS3 from 'multer-s3';
import aws  from 'aws-sdk';

// dotenv.config();
// console.log("hello", process.env.BUCKET_NAME);
aws.config.update({
    region : process.env.AWS_REGION,
    secrteAccessKey : process.env.ACCESS_KEY_ID,
    accessKeyId :process.env.SECRET_ACCESS_KEY
    
});

const s3 = new aws.S3();


const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    })
});

export default upload;