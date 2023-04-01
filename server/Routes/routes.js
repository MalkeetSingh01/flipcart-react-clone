import express from "express";
import { userSignup } from "../Controller/user-controller.js";
const router=express.Router();

router.post('/signup',userSignup);

export default router;