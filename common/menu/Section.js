import {Card, Box,Grid, Typography } from '@mui/material'
import React from 'react'
import styles from '../../styles/Menu.module.css'


export default function Section(props){
    const {title, items, handleExpandDescription, handleAddItemToCart} = props;



    return (<div style={{margin: '15px'}}>
        <Box className={styles.sectionHeaderdiv}>
            <Typography  className={styles.sectionHeader} textAlign="center" variant='h2'>{title}</Typography>
        </Box>
        <Grid container>
            {
                items.map((item, key ) =>{
                    return(
                    <Grid key={key} item xs={12} md={4} style={{padding: '20px'}}>
                        <Card className={styles.card} elevation={5}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <Typography  className={styles.itemName} >{item.name}</Typography>
                                <Typography  className={styles.itemName} >${`${item.price}`}</Typography>
                            </Box>
                            <Box style={{padding: '15px'}}>
                                <Typography  className={styles.itemDescription} textAlign="center" variant='body1'>
                                    {item.description}
                                </Typography>
                            </Box>
                            {/* TODO uncomment when implementing cart feature */}
                            {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant='contained'  onClick={() =>handleAddItemToCart(item)}>Cart ME </Button>
                            </Box> */}
                        </Card>
                    </Grid>
                    )
                })
            }
        </Grid>
    </div>)
}