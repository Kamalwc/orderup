import {Card,  Button, Box, CardContent, CardHeader, CardMedia, Collapse, MenuItem, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


export default function Item(props){
    const {title, items, handleExpandDescription, handleAddItemToCart} = props;



    return (<div>
        <Box style={{backgroundColor: "blue"}}>
            <Typography  textAlign="center" variant='h2'>{title}</Typography>
        </Box>
        <Grid container>
            {
                items.map((item, key ) =>{
                    return(
                    <Grid key={key} item xs={12} md={4} style={{padding: '20px'}}>
                        <Card>
                            <CardHeader
                                title={`${item.name}`}
                                subheader={`Price: $${item.price}`}
                            />
                            <CardMedia
                                image={item.image}
                                component="img"
                                alt={item.name}
                            />
                            <CardContent>
                                <Box>
                                    <Collapse in={item.expanded} timeout="auto" unmountOnExit>
                                        <Typography>{item.description}</Typography>
                                    </Collapse>
                                    
                                        {
                                            item.expanded && <ExpandLessIcon onClick={() => handleExpandDescription(key, title)}/>
                                        }
                                        {
                                            !item.expanded && 
                                            <Box display="flex">
                                                <Typography>description</Typography>
                                                <ExpandMoreIcon onClick={() => handleExpandDescription(key, title)}/>
                                            </Box>
                                        }
                                    <Button variant='contained' fullWidth onClick={() =>handleAddItemToCart(item)}>Cart ME </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                })
            }
        </Grid>
    </div>)
}