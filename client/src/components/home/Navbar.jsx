import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { navData } from "../../constants/data";

const Cmp=styled(Box)`
display:flex;
margin:65px 135px 10px 135px;
justify-content:space-between;
text-align:center;
// margin-bottom:10px
// border-bottom:1px solid grey`

const Text=styled(Typography)`
font-sixe:13px;
font-weight:600;
font-family:inherit`

export default function Navbar(){
    const data=navData.map(data=>(
            <Box>
                <img src={data.url} alt="NavImage" style={{width:62}}></img>
                <Text>{data.text}</Text>
            </Box>
    ))
    return(
        
        <Cmp>
            {data}
        </Cmp>
    )
}