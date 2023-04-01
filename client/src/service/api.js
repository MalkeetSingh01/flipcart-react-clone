import axios from 'axios';
const URL="http://localhost:8000";
export const authenticateSignup=async(data)=>{
    try {
       return await axios.post(`${URL}/signup`,data);
        console.log("sign up data successfullly sent")
    } catch (error) {
        console.log("Error while signup Api",error.message)
    }
}