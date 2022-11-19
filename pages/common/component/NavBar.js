import { AppBar, IconButton, Typography, Button, Badge } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
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