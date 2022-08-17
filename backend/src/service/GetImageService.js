import Image from "../models/images.js"

class GetImageService{
    async handle(id){
        const img = await Image.findOne({_id: id}).exec();
        return img;
    }
}

export {GetImageService}