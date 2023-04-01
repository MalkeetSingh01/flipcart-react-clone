import User from "../model/user-schema.js";

export const userSignup=async(req,res)=>{
    try {

        const x=await User.findOne({userName:req.body.userName});
        if(x){
            return res.status(404).json({message:"UserName already exists"})
        }

        const user=req.body;
        const newUser=new User(user);
        await newUser.save();

        res.status(200).json({message:user})
    } catch (error) {
        res.status(450).json({message:error.message})
    }
}