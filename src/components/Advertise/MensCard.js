import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import women from '../images/women.jpg'
import men from '../images/men.jpg'
const LadiesCard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, justifyContent: 'center', AlignItems: 'center', padding: '0 10vw 0 10vw', height: '30vh',marginTop: '3rem'}}>
        <Box sx={{ backgroundImage: `url(${women})`, display: 'flex',flexDirection: {xs:'column',md:'row'}, justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h4" sx={{fontSize: {xs: '1rem'}}}>MODERN ACCENTS FOR HIM</Typography>
            <Typography variant="h6">SHOP WOMENS ACCESSORIES</Typography>
        </Box>
        <Box sx={{ backgroundImage: `url(${men})`, display: 'flex',flexDirection: {xs:'column',md:'row'}, justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h4" sx={{fontSize: {xs: '1rem'}}}>MODERN ACCENTS FOR HER</Typography>
            <Typography variant="h6"> SHOP MENS ACCESSORIES</Typography>
        </Box>
    </Box>
  )
}

export default LadiesCard