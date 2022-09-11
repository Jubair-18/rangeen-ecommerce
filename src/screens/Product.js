import { Box, Button, Grid, Rating, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import CardContainer from '../components/Cards/CardContainer';
import image1 from '../components/images/clothes1.jpg'
import image2 from '../components/images/clothes2.jpg'
import image3 from '../components/images/clothes3.jpg'


import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';

import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Image } from '@mui/icons-material';

const Product = () => {
    const [value, setValue] = useState(3);
    const images = [image1, image2, image3]
    const sizes = ['SMALL', 'MEDIUM','LARGE', 'EXTRALARGGE']
const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Box sx={{ overflow: 'hidden'}}>
        <Navbar />
        <Box sx={{ display: 'flex', flexDirection: {md: 'row',xs: 'column'},justifyContent: 'center', alignItems:'center',marginTop: '1rem', padding: '0 10vw 0 10vw'}}>
            <Box sx={{ display: 'flex', flexDirection: {md: 'column',xs: 'row'},justifyContent: 'center', alignItems:'center',}}>
                {images.map(image =>(
                    <img src={image} className="childImage" />
                ))}
            </Box>
            <Box>
                <img src={image2} className="image"/>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '2rem'}}>
                <Typography variant="h4" color="initial">Maecenas non laoreet</Typography>
                <Box sx={{ display: 'flex'}}>
                <Rating
                    name="simple-controlled"
                    value={value}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                />
                <Typography variant="body2" color="initial" sx={{ marginLeft: '.5rem'}}>reviews (2)</Typography>
                </Box>
                <Typography variant="h6" sx={{ color: 'red'}}>
                    $89.99
                </Typography>
                <Box>
                    <Grid item sx={{ display: 'flex', flexDirection: 'row'}}> 
                        <Typography variant="h6" color="initial">SIZE: </Typography>
                        {sizes.map((size, i) => (
                        <Tooltip title="Add" placement="top-start" sx={{ border: '1px solid black', marginLeft: '.1rem'}}>
                            <Button>{size}</Button>
                        </Tooltip>
                        ))}
                    </Grid>
                </Box>
                <Box>
                    <Typography variant="body2" sx={{ color: '#457b9d'}}> In stock 298 Items </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Button size='small' sx={{ border: '1px solid black',}}>-</Button>
                    <Typography variant="h6" sx={{ border: '1px solid black', padding: '1rem'}}>1</Typography>
                    <Button size='small' sx={{ border: '1px solid black'}}>+</Button>
                    <Button size='large' sx={{ border: '1px solid black', backgroundColor: '#e63946', marginLeft: '1rem', color: 'black'}}>ADD TO CART</Button>
                    <Button size='large' sx={{ border: '1px solid black', backgroundColor: '#e63946', marginLeft: '1rem', color: 'black'}}>BUY NOW</Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '.4rem', borderBottom: '1px solid black'}}> 
                    <Typography variant="body2" color="initial"> <CompareArrowsIcon /> Compare</Typography>
                    <Typography variant="body2" color="initial"> <FavoriteBorderIcon /> Add to Wishlist</Typography>
                    <Typography variant="body2" color="initial"> <FullscreenExitIcon />Size Guide</Typography>
                </Box>
                <Box sx={{ marginTop: '1rem'}}>
                    <Typography variant="body1"><b>SkU</b>: PDOO25</Typography>
                </Box>
                <Box sx={{ display: 'flex',marginTop:'.5rem' }}>
                    <Typography variant="h6" color="initial" sx={{ marginRight: '1rem'}}>Share :</Typography>
                    <FacebookIcon />
                    <TwitterIcon />
                    <PinterestIcon />
                    <TelegramIcon />
                </Box>
            </Box>
        </Box>
            <Box sx={{ padding: '0 10vw 0 10vw'}}>
            <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', marginLeft: '30%' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Tab label="Description" value="1" />
                        <Tab label="Product Details" value="2" />
                        <Tab label="Tab title" value="3" />
                        <Tab label="reviews" value="4" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">{desc}</TabPanel>
                    <TabPanel value="2">Product Details</TabPanel>
                    <TabPanel value="3">Tab title</TabPanel>
                    <TabPanel value="4">reviews</TabPanel>
                </TabContext>
            </Box>
            <Box>
                <CardContainer />
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
  )
}

export default Product