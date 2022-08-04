import { cyan } from '@mui/material/colors';
import { Box } from '@mui/system';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const blueclore = cyan[900];

export default function Footer(){
    return (
        <Box sx={{backgroundColor:blueclore,py:2}}>
            <footer>
                <div style={{color:'#fff',textAlign:'center'}}>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <ShoppingBagIcon/>
                        <h3 style={{marginLeft:'5px'}}> Bitwise React fake store</h3>
                    </div>
                    <div style={{fontSize:'16px'}}>Created by <a style={{color:'#fff'}} href="https://github.com/rajregmi98" target="_blank" rel="noopener noreferrer">Raj Regmi</a></div>
                </div>
            </footer>
        </Box>
    );
}
