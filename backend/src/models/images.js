import mongoose from "mongoose"
const {Schema} = mongoose;

const imageSchema = new Schema({
    image:{
        type: String,
        trim: false,
        required:true
    }
})

export default mongoose.model("Image", imageSchema);