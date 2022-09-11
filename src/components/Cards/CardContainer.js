import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import MainCard from './MainCard'
import LeftRight from '../subComponents/LeftRight'
const CardContainer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding:'0 10vw 0 10vw',marginTop: '3rem'}}>
        <Paper sx={{ display: 'flex', justifyContent: 'space-between', borderLeft: '.5rem solid red'}}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: 'auto'}}}>Fashions</Typography>
            </Box>
            <Box sx={{ display:{xs: 'none', md:'flex'}, justifyContent: 'center', alignItems: 'center',}}>
              <Typography variant="h5" sx={{  marginRight: '5vw' }}>Womens</Typography>
              <Typography variant="h5" sx={{  marginRight: '5vw' }}>Mens</Typography>
              <Typography variant="h5" sx={{  marginRight: '5vw' }}>Kids</Typography>
            </Box>
            <LeftRight />
        </Paper>
        <Paper sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, marginTop: "1rem", padding: '1rem'}}>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </Paper>
    </Box>
  )
}

export default CardContainer