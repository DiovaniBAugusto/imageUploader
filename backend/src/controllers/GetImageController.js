import { GetImageService } from "../service/GetImageService.js";

class GetImageController{
    async handle(req, res){
        const {id} = req.params;
        const imageFile = await new GetImageService().handle(id);
        res.send(imageFile);
    }
}

export {GetImageController};