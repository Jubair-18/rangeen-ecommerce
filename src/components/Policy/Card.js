import { Paper, Typography } from '@mui/material'
import React from 'react'

const Card = ({ title , paragraph}) => {
  return (
        <Paper sx={{ width:{xs:'70vw', md:'30vw'}, height: '15vh', backgroundColor: 'black',display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems:'center', margin: '1rem'}}>
            <Typography variant="h5" color="white">
                {title}
            </Typography>
            <Typography variant="p" color="white">
                {paragraph}
            </Typography>
        </Paper>
  )
}

export default Card