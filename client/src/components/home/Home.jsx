import Navbar from "./Navbar"
import Banner from "./Banner"
import styled from "@emotion/styled"
import { Box } from "@mui/system"
// import { Fragment } from "react"

const Conatiner=styled(Box)`
padding:10px 6px;
background:#f2f2f2;
border-top:1.2px solid #c9c9c9;
`

export default function Home(){
    return(
        <>
        <Navbar/>
        <Conatiner>
        <Banner/>
        </Conatiner>
        </>
    )
}