import { v4 as uuidv4 } from "uuid";
import Image from "../models/images.js"
class SaveImageService{
    async handle(img){
        const image = new Image({
            image: img,
        });
        let imageSaved = await image.save();
        return imageSaved;
    }
}
export {SaveImageService}