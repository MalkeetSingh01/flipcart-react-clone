
import { InputBase ,styled,Box} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";


const SearchBox=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:15px;
margin-top:-4px;
color:#3f3f3f;
display:flex
`
const InputBox=styled(InputBase)`
padding-left:20px;
padding-top:4px;
width:93%;
color:#3f3f3f;
font-size:unset;
`

const SearchWrapper=styled(Box)`
color:blue;
padding:5px;
display:flex;
font-size:20px

`
const IconSc=styled(SearchIcon)`
`
// class  extends Component {cc shortcut fr cklass components
//     state = {  } 
//     render() { 
//         return ();
//     }
// }
 
// export default ;
export default function Search(){
    return(
        <SearchBox>
        <InputBox
        placeholder="Search for Products,brands and more" className="src-plc" style={{color:"#323232"}}>
        </InputBox>
        <SearchWrapper>
            <IconSc/>
        </SearchWrapper>
        </SearchBox>
    )
}