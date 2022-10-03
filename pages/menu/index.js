import { AppBar, IconButton, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Item from './Item';

export default function Menu(){

    // const [items, setItems] = useState({
    //     weekly: [],
    //     latin: [],
    //     sandWhiches: [],
    //     vegan: []
    // })

    const [loading, setLoading] = useState(false)



    return(
        <div>
            {
                loading && <Typography>Loading ....</Typography>
            }

            {
                !loading && 
                <>
                    <AppBar position="static">
                        <Toolbar >
                        <MenuIcon /> {/*  // logo here */}

                        <IconButton href={"/checkout"} style={{marginLeft: 'auto', color: "#fff"}}>
                            <ShoppingCartCheckoutIcon
                                
                            />
                        </IconButton>
                        
                        </Toolbar>
                    </AppBar>
                    <div> 
                        <Item
                            title="weekly"
                            items={fakeItems.filter(x => x.group === 'weekly')}
                        /> 
                        <Item
                            title="latin"
                            items={fakeItems.filter(x => x.group === 'weekly')}
                        />
                        <Item
                            title="vegan"
                            items={fakeItems.filter(x => x.group === 'weekly')}
                        />
                        <Item
                            title="sandwhiches"
                            items={fakeItems.filter(x => x.group === 'weekly')}
                        /> 
                    </div>
                </>
            }
           
        </div>
    )
}  




const fakeItems =  [
    {
        group: 'weekly',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 4.30,
        description: 'This delicious hot dog will make you want to buy more and more.',
        itemId: 'AJCBPPABLAHSJ'
    },
    {
        group: 'weekly',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'weekly',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'latin',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'latin',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'latin',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'sandwhiches',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'sandwhiches',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'sandwhiches',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'vegan',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    },
    {
        group: 'vegan',
        name: 'description',
        image: '',
        price: 0.30,
        description: '',
        itemId: ''
    }
]