import {Typography, Box } from '@mui/material'
import React, {useState} from 'react'
import Section from '../common/menu/Section';
import Head from 'next/head';
import styles from '../styles/Menu.module.css'
import cloneDeep  from 'lodash/cloneDeep';
import localFont from '@next/font/local'
const myFont = localFont({ src: '../styles/googlefonts/playball-v16-latin-regular.woff2' })

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
        <div className={styles.background}>
            <Head>
                <title>Sis. Dina&apos;s kitchen </title>
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
                         <Typography style={{color: '#000', textAlign:"center"}} className={myFont.className} variant='h1'>Sis. Dina&apos;s Kitchen</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center' }}>
                         <Typography className={styles.call} variant='h6'>Call Today... ( 973 ) 123 - 4567</Typography>
                    </Box>
                    <div className={styles.page}>
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
                       
                    </div>
                </>
            }
           
        </div>
    )
}  




const fakeItems =  [
    {
        group: 'weekly',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: 'AJCBPPABLAHSJ',
        expanded: false
    },
    {
        group: 'weekly',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'weekly',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'latin',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'sandwhiches',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'vegan',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    },
    {
        group: 'vegan',
        name: 'Item Name Here',
        image: 'https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/burgers.jpg?alt=media&token=f4989728-593b-4508-802c-d1b962bd5eb9',
        price: 9,
        description: 'This delicious menu item description  will make you want to buy it',
        itemId: '',
        expanded: false
    }
]