import { Box, Typography } from '@mui/material';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image1 from '../images/clothes1.jpg'
import image2 from '../images/clothes2.jpg'
import image3 from '../images/clothes3.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';
const slideImages = [
  {
    url: image1,
  },
  {
    url: image2,
  },
  {
    url: image3,
  },
];

const Slideshow = () => {
  const matches = useMediaQuery('(min-width:680px)');
  return (
      <Box className="slide-container" sx={{ padding:'0 11vw 0 26vw', marginTop: '1rem', marginLeft:{xs: '-15vw'}}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <Box className="each-slide" key={index}>
              <img src={slideImage.url} style={{ width: '100vw', height: '50vh',}} />
              <Typography variant='h1' sx={{display:{xs: 'none', md: 'flex'},marginTop: '-35vh', marginLeft:"10vw"}}>BUY YOU FAVOURITE</Typography>
            </Box>
          ))} 
        </Slide>
      </Box>
    )
}

export default Slideshow