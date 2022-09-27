import { Button, Hidden, Typography, Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const matches = useMediaQuery('(min-width:600px)');

  const landscapeSrc = "https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/landscape.jpg?alt=media&token=2eda5697-a633-4dd5-9fde-18a39da5d8f0",
        portraitSrc = "https://firebasestorage.googleapis.com/v0/b/order-up-7e776.appspot.com/o/eiliv-aceron-mAQZ3X_8_l0-unsplash.jpg?alt=media&token=b611b619-5f09-4e46-ba07-9c1cd650e09e" 



  return (
    <div className={styles.container}>

     <Typography className={styles.companyName} variant="h1">The best company name</Typography>

     <Box className={styles.boxContainer}>
      <Typography styles={{color: "#fff"}} variant="h2">The best slogan to attract customers </Typography>

      <Typography styles={{color: "#fff"}} variant="h3">The best paragraph that will make customers spend money if they see it</Typography>
      
      <Button fullWidth variant="contained" className={styles.textContainer} href={"/menu"}>Click me!!</Button>
     </Box>

      
      {
        matches &&
        <Image 
      src={landscapeSrc}       
       alt="Landscape" 
        objectFit="cover"
        layout="fill"
        tyles={{height: '100%'}}
      />
      }
        
    {
      !matches &&
      <Image 
        src={portraitSrc}
                alt="portait" 
                objectFit="cover"
                layout="fill"
              />
    }      
      
    </div>
  )
}
