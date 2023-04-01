import mongoose from "mongoose"

const Connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.3bjm0hh.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
        console.log("db sussefullly connected")
    } catch (error) {
        console.log("error while db connection ",error.message)
    }
}
export default Connection;