import React from 'react'
import Navbar from '../components/Header/Navbar'
import { Box } from '@mui/material'
import Policy from '../components/Policy/Policy'
import Slideshow from '../components/Header/Slider'
import CardContainer from '../components/Cards/CardContainer'
import LadiesCard from '../components/Advertise/LadiesCard'
import MensCard from '../components/Advertise/MensCard'
import {LastChild} from '../components/Advertise/LastChlid'
import Footer from  '../components/Footer/Footer'
const Home = () => {
  return (
    <Box sx={{ backgroundColor: '#dad7cd', overflow: {xs: 'hidden', md: 'none'}}}>
        <Navbar />
        <Slideshow />
        <Policy />
        <CardContainer />
        <LadiesCard />
        <CardContainer />
        <MensCard />
        <CardContainer />
        <LastChild />
        <Footer />
    </Box>
  )
}

export default Home