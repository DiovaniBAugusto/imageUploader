import { Router } from "express";
import { GetImageController } from "../controllers/GetImageController.js";
import { SaveImageController } from "../controllers/SaveImageController.js"
const imageRouter = Router();

imageRouter.get("/image/:id", new GetImageController().handle);
imageRouter.post("/image",new SaveImageController().handle);

export	{imageRouter};

