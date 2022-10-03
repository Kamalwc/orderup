import {Card,  Box, CardContent, CardHeader, CardMedia, Collapse, MenuItem, Grid, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function Item(props){
    const {title, items} = props;

    return (<div>
        <Box style={{backgroundColor: "#7d562d"}}>
            <Typography  textAlign="center" variant='h2'>{title}</Typography>
        </Box>
        <Grid container>
            {
                items.map(item =>{
                    return(
                        <Box style={{margin: '0% 10%'}}>
                             <Grid xs={12} md={4}>
                        <Card>
                            <CardHeader
                                title={item.name}
                            />
                            <CardMedia
                                image={item.image}
                                component="img"
                                alt={item.name}
                            />
                            <CardContent>
                                <Box>
                                    <Collapse in={true} timeout="auto" unmountOnExit>
                                        <Typography>{item.description}</Typography>
                                    </Collapse>
                                    <ExpandMoreIcon onClick={()=>{}}/>
                                </Box>
                            
                            </CardContent>
                        </Card>
                    </Grid>
                        </Box>
                   
                    )
                })
            }
        </Grid>
    </div>)
}