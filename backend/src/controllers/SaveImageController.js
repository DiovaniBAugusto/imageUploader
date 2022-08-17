import {SaveImageService} from "../service/SaveImageService.js"

class SaveImageController{
    async handle(req,res){
        const {image} = req.body;
        const resp = await new SaveImageService().handle(image);
        res.send(resp);
    }
}

export {SaveImageController}