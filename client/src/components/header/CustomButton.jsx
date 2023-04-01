import { Button, Typography ,Box } from "@mui/material";
import  {Air, ShoppingCart}  from "@mui/icons-material";
import styled from "@emotion/styled";
import LoginBox from "../login/LoginBox";
import { useState } from "react";


const Wrapper=styled(Box)`
display:flex;
margin: 0 3% auto;
font-weight:600;
color:#fff;

& >button,&>p{
margin-right:40px;
font-size:15px;
}
`
const Item=styled(Box)`
display:flex;
font-weight:600;
padding-top:13px;
font-weight:600;`

const LoginButton=styled(Button)`
color:#2874f0;
background-color:white;
text-transform:none;
padding:5px 40px;
border-radius:1px;
box-shadow:none;
font-weight:600;
height:30px;
margin:10px auto`


export default function CustomButton(){

    const [open,setOpen]=useState(false);

    const openLoginBox=()=>{
        setOpen(true);
    }
    return(
        <Wrapper>
           <LoginButton variant="contained" onClick={()=>openLoginBox()}>Login</LoginButton> 
           <Typography style={{marginTop:14,fontWeight:600,width:135}}>Become a Seller</Typography>
           <Typography style={{marginTop:14,fontWeight:600}}>More</Typography>

           <Item>
            <ShoppingCart/>
            <Typography style={{fontWeight:600}}>Cart</Typography>
           </Item>
           <LoginBox open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}