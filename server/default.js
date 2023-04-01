import { products } from "./constants/product.js";
import Product from "./model/product-schema.js";


const DefaultData=async()=>{
try {
    // const input=productsfilter(data=>{
    //     return(data==new Product(data))
    // })
    // await Product.insertMany(input);
    // await Product.deleteMany({});
    await  Product.insertMany(products);
    
    console.log("Product saved successuly")
} catch (error) {
    console.log("error while default.js",error.message)
}
}
export default DefaultData;