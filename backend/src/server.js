import app from './app.js'
import 'dotenv/config'

const port = process.env.PORT ?? 8080;
app.listen(port, ()=>{
    console.log(`server running in ${port}`);
})