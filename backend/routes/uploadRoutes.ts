import { Router } from "express";
import { requiredAuth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { aiOnModel, aiTransform, uploadMultiple, uploadSingle } from "../controllers/uploadController.js";

const uploadRouter=Router()

uploadRouter.post("/single",requiredAuth,upload.single("image"),uploadSingle)
uploadRouter.post("/multiple",requiredAuth,upload.array("images",5),uploadMultiple)
uploadRouter.post("/ai-transform",requiredAuth,aiTransform)
uploadRouter.post("/ai-on-model",requiredAuth,aiOnModel)


export default uploadRouter


