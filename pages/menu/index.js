import { AppBar, IconButton, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Item from './Item';
import cloneDeep  from 'lodash/cloneDeep';

export default function Menu(){

    const [items, setItems] = useState({
        weekly: fakeItems.filter(x => x.group === 'weekly'),
        latin: fakeItems.filter(x => x.group === 'latin'),
        sandWhiches: fakeItems.filter(x => x.group === 'sandWhiches'),
        vegan: fakeItems.filter(x => x.group === 'vegan')
    })

    const [loading, setLoading] = useState(false)



    const handleExpandDescription = (i,group) =>{
        const copyItems = cloneDeep(items)
        const copyObj = cloneDeep(items[group][i])
        copyObj.expanded = !copyObj.expanded
        const copyArr = cloneDeep(items[group])
        copyArr.splice(i,1,copyObj)

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

                        <IconButton href={"/checkout"} style={{marginLeft: 'auto', color: "#fff"}}>
                            <ShoppingCartCheckoutIcon
                                
                            />
                        </IconButton>
                        
                        </Toolbar>
                    </AppBar>
                    <div style={{margin: '0% 10%'}}> 
                        <Item
                            title="weekly"
                            items={items.weekly}
                            handleExpandDescription={handleExpandDescription}
                        /> 
                        <Item
                            title="latin"
                            items={items.latin}
                            handleExpandDescription={handleExpandDescription}
                        />
                        <Item
                            title="vegan"
                            items={items.vegan}
                            handleExpandDescription={handleExpandDescription}
                        />
                        <Item
                            title="sandwhiches"
                            items={items.sandWhiches}
                            handleExpandDescription={handleExpandDescription}
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