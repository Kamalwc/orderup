import { AppBar, IconButton} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';


export default function NavBar(props){
    const {navPath, children} = props
    
    return(
        <>
        <AppBar position="static">
            <Toolbar >
                <MenuIcon />

                <Link href={navPath}>
                    <IconButton style={{marginLeft: 'auto', color: "#fff"}}>
                        {children}
                    </IconButton>
                </Link>
                        
            </Toolbar>
        </AppBar>
        </>
    );
}