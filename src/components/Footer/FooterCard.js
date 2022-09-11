import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material'
import React from 'react'

const FooterCard = () => {
  return (
    <Paper sx={{ backgroundColor:'#343a40', color: 'white', width: '25vw',height: '30vh', marginLeft: '2vw' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    Word of the Day
                </Typography>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    Word of the Day
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Word of the Day
                </Typography>
                <Typography sx={{ fontSize: 14 }}  gutterBottom>
                    Word of the Day
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" sx={{ textAlign: 'center'}}>Learn More</Button>
            </CardActions>
    </Paper>

  )
}

export default FooterCard