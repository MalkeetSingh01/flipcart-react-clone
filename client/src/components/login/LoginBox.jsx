import styled from "@emotion/styled";
import { Api } from "@mui/icons-material";
import { Button, Dialog, TextField, Typography} from "@mui/material";
import { Box, typography } from "@mui/system";
import { useState } from "react";
import { authenticateSignup } from "../../service/api";

const Div=styled(Box)`
height:70vh;
width:90vh`

const Image=styled(Box)`
background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width: 31%;
height: 82%;
padding:45px 35px;
&>p,&>h5{
    color:white;
}
`

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
flex:1;
padding:25px 35px;

&>p ,&>div,&>button{
    margin-top:18px;
}`

const LoginButton=styled(Button)`
text-transform:none;
color:#fff;
background:#fb681b;
border-radius:2px
height:48px;
// box-shadow:0px 3px 4px 0px rgb(0 0 0/30%)
`

const OtpButton=styled(Button)`
text-transform:none;
color:#2874f0;
background:%fff;
border-radius:2px
height:48px;
box-shadow:0px 3px 4px 0px rgb(0 0 0/30%)`

const Text=styled(Typography)`
font-size:12px;
`

const CreateAcc=styled(Typography)`
margin: auto 0 5px 0;
text-align: center;
color: #2874f0;
font-weight: 600;
font-size: 14px;
cursor: pointer`

const Or=styled(Typography)`
text-align:center;
font-size:18px;
color:grey`

const accountInitial={
    login:{
        value:true,
        heading:"Login",
        subHead:"Get access to your Orders, Wishlist and Recommendations",
    },
    signup:{
        value:false,
        heading:"Looks like you're new here!",
        subHead:"Sign up with your mobile number to get started",
    }
}
const signupInitial={
    firstName:"",
    lastName:"",
    userName:'',
    email:" ",
    phone:"",
    password:"",
}
export default function LoginBox({open,setOpen}){
    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitial.login)
    }

    const[account,toggleAccount]=useState(accountInitial.login)

    const[signup,setSignup]=useState(signupInitial);

    const toggleState=()=>{
        toggleAccount(accountInitial.signup)
    }

    const onInputChange=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
        // console.log(signup)
    }
    const signupUser=async()=>{
        let response=await authenticateSignup(signup);
        if(!response)return;
        handleClose();
        
    }

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:'unset'}}} style={{borderRadius:10}}>
            <Div>
                <Box style={{display:"flex",height:"100%"}}>
                    <Image>
                        <Typography variant="h5" style={{fontWeight:600,fontSize:28}}>{account.heading}</Typography>
                        <Typography style={{fontSize:17.9,lineHeight:"28px",marginTop:27}}>{account.subHead}</Typography>
                    </Image>
                    {account.value?
                    <Wrapper>
                    <TextField variant="standard" label="Enter Email/Phone Number"></TextField>
                    <TextField variant="standard" label="Enter Password"></TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton>Login</LoginButton>
                    <Or>OR</Or>
                    <OtpButton>Request OTP</OtpButton>
                    <CreateAcc onClick={()=>{toggleState()}}>New to Flipcart? Create New Account</CreateAcc>
                </Wrapper>
                :
                <Wrapper>
                        <TextField variant="standard" label="Enter FirstName" onChange={(e)=>{onInputChange(e)}}name="firstName"></TextField>
                        <TextField variant="standard" label="Enter LastName" onChange={(e)=>{onInputChange(e)}} name="lastName"></TextField>
                        <TextField variant="standard" label="Enter userName" onChange={(e)=>{onInputChange(e)}} name="userName"></TextField>
                        <TextField variant="standard" label="Enter Email"  onChange={(e)=>{onInputChange(e)}}
                        name="email"></TextField>
                        <TextField variant="standard" label="Enter Phone"  onChange={(e)=>{onInputChange(e)}} name="phone"></TextField>
                        <TextField variant="standard" label="Enter Password"  onChange={(e)=>{onInputChange(e)}}name="password"></TextField>
                        <LoginButton onClick={()=>{signupUser()}} >Continue</LoginButton>
                    </Wrapper>}
            </Box>
            </Div>
        </Dialog>
    )
}