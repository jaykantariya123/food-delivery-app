import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";
import { S3Client } from "@aws-sdk/client-s3";
import multerS3 from "multer-s3";

const foodRouter = express.Router();

//Image  Storage Engine
// const uploadDir = "/tmp/uploads";

// const storage=multer.diskStorage({
//     destination:uploadDir,
//     filename:(req,file,cb)=>{
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })

// const upload= multer({storage:storage})
//aws config
const s3 = new S3Client({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "jaykantariya",
    key: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
    contentType: multerS3.AUTO_CONTENT_TYPE,
  }),
});

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export  {foodRouter,s3};
