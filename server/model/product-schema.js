import mongoose from "mongoose";
mongoose.set('strictQuery', true);

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique:true,
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    // quantity:Number,
    quantity:{
        type: Number,
        required: true,
    },
    description:String,
    discout:String,
    tagline:String
})

const Product= mongoose.model("product",productSchema);

export default Product;