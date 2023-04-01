import {AppBar,Toolbar,styled,Typography,Link,Box} from '@mui/material';

import Search from './Search';
import CustomButton from './CustomButton';

const StyleHearer=styled(AppBar)`
background:#2874f0;
box-shadow:none`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

export default function Header(){
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyleHearer>
            <Toolbar style={{minHeight:54}}>
            <Component>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>

                <Search/>
                <CustomButton/>
            </Toolbar>
        </StyleHearer>
    );
};