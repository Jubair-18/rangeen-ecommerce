import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Rating } from '@mui/material';
import { useState } from 'react';
import image1 from '../images/clothes1.jpg'
export default function MainCard() {
    const [value, setValue] = useState(3)
  return (
    <Card sx={{ maxWidth: 345, marginRight: '1rem'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image1}
          alt="green iguana"
          sx={{ height:"40vh", width: {xs:'100vw',md:'20vw'}}}
        />
        <CardContent>
         <Typography gutterBottom variant="h6" component="div" sx={{ textAlign: 'center'}}>
            Nice Quize GRAVIDA
          </Typography>
          <Typography gutterBottom variant="h6" sx={{ textAlign: 'center'}}>
            SHOP
          </Typography>  
          <Box>
          <Rating
            name="simple-controlled"
            value={value}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
        />
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center', color: 'red'}}>
            $89.99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
