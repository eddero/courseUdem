const { S3 } = require("aws-sdk")
const {S3Client, PutObjectCommand} = require("@aws-sdk/client-s3")
const uuid = require("uuid").v4
const multerS3 = require('multer-s3');
const multer = require('multer');

const s3 = new S3Client({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})
const s3Uploadv2 = async (files) => {
    const s3 = new S3()

    const params = files.map(file => {
        return {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${uuid()}-${file.originalname}`,
            Body: file.buffer
        }
    })

    return await Promise.all(params.map(param => s3.upload(param).promise()))
}

const s3Uploadv3 = async (file) => {
    const s3Client = new S3Client()

    const param = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/${uuid()}-${file.originalname}`,
            Body: file.buffer,
            Metadata: {
                "InstructorId": "20",
                "Content-Type": "video/mp4"
            }
        }

    return await s3Client.send(new PutObjectCommand(param))

}


// get object
const s3Getv3 = async (videoKey) => {

    console.log({key: videoKey})
    const s3 = new S3()
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: videoKey,
    };

    await s3.headObject(params, (err, data) => {
        if (err) console.log(err, err.stack)
        else console.log("Data of the instructor is: ", data.Metadata["instructorid"])
    })

    return s3.getSignedUrl("getObject", params);

}

const fileFilterVideo = (req, file, cb) => {
    if (file.mimetype.split("/")[0] === "video") {
        cb(null, true)
    } else {
        cb(new Error("file is not of the correct type"), false)
    }
}



const videoUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            cb(null, `video/${Date.now().toString()}-${file.originalname}`);
        }
    }),

})

const thumbnailUpload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            cb(null, `thumbnail/${Date.now().toString()}-${file.originalname}`);
        }
    })
});



const Upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        key: function (req, file, cb) {
            if (file.mimetype === 'video/mp4') {
                cb(null, `video/${Date.now().toString()}-${file.originalname}`);
            } else if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                cb(null, `thumbnail/${Date.now().toString()}-${file.originalname}`);
            } else {
                cb(null, `others/${Date.now().toString()}-${file.originalname}`);
            }
        }
    })
});




module.exports = {s3Getv3, s3Uploadv2, s3Uploadv3, videoUpload, thumbnailUpload, Upload}