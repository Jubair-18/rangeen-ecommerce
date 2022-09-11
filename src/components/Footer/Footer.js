import { Box } from '@mui/system'
import React from 'react'
import Logo from '../images/logo.jpg'
import FooterCard from './FooterCard'
const Footer = () => {
  return (
    <Box sx={{height: '70vh', width: '100vw',display:'flex', flexDirection: 'column', textAlign: 'center', backgroundColor: '#212529'}}>
        <Box>
            <img 
                src={Logo} 
                style={{ height: '25vh', width: '15vw', marginTop: '2rem', borderRadius: '2rem'}}
            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '0 10vw 0 7vw'}}>
            <FooterCard  />
            <FooterCard sx={{ backgroundColor: '#212529'}}/>
            <FooterCard sx={{ backgroundColor: '#212529'}}/>
            <FooterCard />
        </Box>
    </Box>
  )
}

export default Footer