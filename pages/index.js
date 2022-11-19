import {Typography, Box } from '@mui/material'
import React, {useState} from 'react'
import Section from '../common/menu/Section';
import Head from 'next/head';
import styles from '../styles/Menu.module.css'
import cloneDeep  from 'lodash/cloneDeep';
// import NavBar from '../common/component/NavBar';

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
            <Head>
                <title>Sis. Dina&apos;s kitchen </title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Playball&display=swap" rel="stylesheet"/>
            </Head>
            {
                loading && <Typography>Loading ....</Typography>
            }

            {
                !loading && 
                <>
                    {/* TODO uncomment when implementing cart feature */}
                    {/* <NavBar navPath={"/checkout"}>
                        <Badge color="error" badgeContent={cart.length > 0 ? cart.length : null}>
                                <ShoppingCartCheckoutIcon/>  
                        </Badge>
                    </NavBar> */}
                    
                    <div style={{margin: '0% 10%'}}> 
                    <Box sx={{ display: 'flex', justifyContent:'center' }}>
                         <Typography className={styles.menuHeader} variant='h1'>Sis. Dina&apos;s Kitchen</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center' }}>
                         <Typography className={styles.call} variant='h6'>Call: ( 973 ) 123 - 4567</Typography>
                    </Box>
                        <Section
                            title="Weekly Special"
                            items={items.weekly}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        /> 
                        <Section
                            title="Latin"
                            items={items.latin}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        />
                        <Section
                            title="Vegan"
                            items={items.vegan}
                            handleExpandDescription={handleExpandDescription}
                            handleAddItemToCart={handleAddItemToCart}
                        />
                        <Section
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