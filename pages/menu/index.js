import { AppBar, IconButton, Typography, Button, Badge } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Item from './Item';
import Link from 'next/link';

import cloneDeep  from 'lodash/cloneDeep';

export default function Menu({handleAddItemToCart, cart}){

    const [items, setItems] = useState({
        weekly: fakeItems.filter(x => x.group === 'weekly'),
        latin: fakeItems.filter(x => x.group === 'latin'),
        sandWhiches: fakeItems.filter(x => x.group === 'sandwhiches'),
        vegan: fakeItems.filter(x => x.group === 'vegan')
    })

    const [loading, setLoading] = useState(false)

    const handleExpandDescription = (i,group) =>{
        const copyItems = cloneDeep(items);
        const copyObj = cloneDeep(items[group][i])
        copyObj.expanded = !copyObj.expanded
        const copyArr = cloneDeep(items[group])
        copyArr.splice(i, 1, copyObj)

        copyItems[group] = copyArr
        
        setItems(copyItems)
    }

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

                        <Link href={"/checkout"}>
                            <IconButton style={{marginLeft: 'auto', color: "#fff"}}>
                                <Badge color="error" badgeContent={cart.length > 0 ? cart.length : null}>
                                    <ShoppingCartCheckoutIcon/>  
                                </Badge>
                            </IconButton>
                        </Link>
                        
                        </Toolbar>
                    </AppBar>
                    <div style={{margin: '0% 10%'}}> 
                        <Item
                            title="Weekly Special"
                            items={items.weekly}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        /> 
                        <Item
                            title="Latin"
                            items={items.latin}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        />
                        <Item
                            title="Vegan"
                            items={items.vegan}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        />
                        <Item
                            title="Sandwhiches"
                            items={items.sandWhiches}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
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
        itemId: 'AJCBPPABLAHSJ',
        expanded: false
    },
    {
        group: 'weekly',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'weekly',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'vegan',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    },
    {
        group: 'vegan',
        name: 'hot dog',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 0.30,
        description: 'lorem ipsem lorem ipsum',
        itemId: '',
        expanded: false
    }
]