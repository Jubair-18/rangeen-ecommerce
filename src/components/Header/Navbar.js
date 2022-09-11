import { Badge, Container, Typography } from '@mui/material'
import { Box, Paper } from '@mui/material'
import React from 'react'
import Search from './Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo from '../images/logo.jpg'
import DropdownNav from './DropdownNav';
const Navbar = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
      <Box sx={{ textAlign: 'center',backgroundColor: 'red', height: '8vh',padding:'3vh',background: 'linear-gradient(to left,#e76f51 , #e63946 ) right',}}>
         <Typography variant='p' sx={{ fontWeight:'20vw', }}>this is the top text for exclusive discouont</Typography>
      </Box>
      <Paper sx={{ display: 'flex', flexDirection: {xs: 'column',md: 'row'}, justifyContent: {xs:'center',md:'space-between'}, alignItems:'center', height: '8vh',padding:'0 10vw 0 10vw'}}>
        <Box>
          <Typography variant="p">mine@gmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', justityContent: 'space-between', alignItems: 'center',marginTop: { xs: '2vh', md: '0vh'}}}>
          <Typography variant="p" sx={{ paddingRight:'2vw'}}>USA</Typography>
          <Typography variant="p" sx={{ paddingRight:'2vw'}}>English</Typography>
          <Typography variant="p" sx={{ paddingRight:'2vw'}}>My Account</Typography>
        </Box>
      </Paper>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", padding: '0 10vw 0 10vw'}}>
        <Box sx={{ display: { xs: 'none', lg: 'flex'}}}>
          <img src={logo} alt="logo" style={{ width: '10vw', height: '15vh',borderRadius: '.5rem', marginTop: '1vh'}}/>
        </Box>
        <Box>
          <Search />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <FavoriteBorderIcon sx={{width: '7vw', height:'7vh'}} />
          <Badge badgeContent={4} color="primary">
            <LocalMallIcon sx={{width: '7vw', height:'7vh'}} />
          </Badge>
        </Box>
      </Box>
      <Box>
        <DropdownNav />
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Navbar