import { Grid, TextField, Typography,Paper, SvgIcon, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NavBar from '../common/component/NavBar';
import emptycart from '../../public/emptycart.svg'
import { SignalCellularNullOutlined } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

export default function Checkout({handRemoveItemFromCart, cart}){
    //https://www.emailjs.com/docs/examples/reactjs/
    //https://dashboard.emailjs.com/admin

    const [form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        note: ''
    })

    const handleFormChange = (e) =>{
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSendEmail = () =>{
        emailjs.sendForm('service_uqm8ojt', 'template_zjxum5l', form.current, 'qO3SWbUivUFFtUHoB')
      .then((result) => {
            //set success  state/ page here
          console.log(result.text);
      }, (error) => {
        //error snackbar
          console.log(error);
      });
    }


    return(
        <div>

            <NavBar navPath={"/menu"}>
                 <MenuBookIcon/>  
            </NavBar>

            {
                // todo fix ....
                // cart.length === 0 &&
                // <SvgIcon component={emptycart}/>

            }

            {
                
                // cart.length > 0 &&
                <Grid container style={{paddingLeft: '10%',paddingRight: '10%'}}>
                    {/* Checkout Form  */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ p: 3 }}>
                            
                            <TextField  
                                label='first name' 
                                style={{width: '50%'}}
                                name="firstName"
                                onChange={(e) => handleFormChange(e)}
                                value={form.firstName}
                                required
                                sx={{ p: 1 }}
                            />
                            <TextField 
                                required
                                label='last name' 
                                style={{width: '50%'}}
                                name="lastName"
                                onChange={(e) => handleFormChange(e)}
                                value={form.lastName}
                                sx={{ p: 1 }}
                             />
                            <TextField  
                                label='email'
                                style={{width: '100%'}}
                                required
                                name="email"
                                onChange={(e) => handleFormChange(e)}
                                value={form.email}
                                sx={{ p: 1 }}
                             />
                            <TextField 
                                label='phone number' 
                                style={{width: '100%'}}
                                required
                                name="phoneNumber"
                                onChange={(e) => handleFormChange(e)}
                                value={form.phoneNumber}
                                sx={{ p: 1 }}
                            /> 
                            <TextField 
                                label='note' 
                                style={{width: '100%'}} 
                                name="note"
                                onChange={(e) => handleFormChange(e)}
                                value={form.note}
                                sx={{ p: 1 }}
                                multiline
                            />
                        </Box>
                    </Grid>
                    {/* CHeckout items */}
                    <Grid item xs={12} md={6}>
                        {/* todo make this section scroll without the form */}
                        {
                            // cart.map(item =>{
                            [1,2].map(item =>{   
                                return(
                                    <Paper sx={{ p: 3 , m: 3}}>
                                        <Typography>"{item.name}"</Typography>
                                        <Typography>"{item.price}"</Typography>
                                        <Typography>quantity</Typography>
                                    </Paper>
                                )
                            })
                        }
                        <Button variant={'contained'} onClick={handleSendEmail}>Send order</Button>
                    </Grid>
                </Grid>

            }
        </div>
    )
}