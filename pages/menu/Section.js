import {Card,  Button, Box, CardContent, CardHeader, CardMedia, Collapse, MenuItem, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import styles from '../../styles/Menu.module.css'


export default function Section(props){
    const {title, items, handleExpandDescription, handleAddItemToCart} = props;



    return (<div style={{border: '5px solid #000', margin: '15px'}}>
        <Box >
            <Typography  className={styles.sectionHeader} textAlign="center" variant='h2'>{title}</Typography>
        </Box>
        <Grid container>
            {
                items.map((item, key ) =>{
                    return(
                    <Grid key={key} item xs={12} md={4} style={{padding: '20px'}}>
                        <Card>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                                <Typography  className={styles.itemName} variant='h6'>{item.name}</Typography>
                                <Typography  style={{color: '#000'}} textAlign="center" variant='h6'>{item.price}</Typography>
                            </Box>
                            <Box style={{padding: '15px'}}>
                                <Typography  className={styles.itemDescription} textAlign="center" variant='body1'>
                                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum
                                </Typography>
                            </Box>
                            {/* TODO uncomment when cart feature enabled */}
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