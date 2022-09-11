import { Box, Paper, Typography, CardActionArea, Rating, Button } from '@mui/material'
import {useState} from 'react'
import LeftRight from '../subComponents/LeftRight'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import image2 from '../images/men.jpg'

export const LastChild = () => {
  return (
    <Box sx={{  backgroundColor: 'white',paddingTop: '1rem', marginTop: '2rem'}}>
        <Box sx={{ width: '100%',display: 'flex',justifyContent:"space-between",padding: '0 10vw 0 10vw',marginTop:'2rem'}}>
            <ProductList />
            <ProductList />
            <ProductList />
        </Box>
        <Box sx={{ marginTop:'2rem'}}>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin:'0 10vw 0 10vw', borderLeft: '1rem solid red'}}>
                <Typography variant="h4" color="initial" sx={{ paddingLeft:'1rem'}}>LATEST NEW</Typography>
                <LeftRight />
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem', padding: '0 10vw 0 10vw'}}>
                <LatestCard />
                <LatestCard />
                <LatestCard />
            </Box>
        </Box>
    </Box>
 
  )
}

export const LatestCard = () => {
    return(
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="240"
                image={image2}
                alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center'}}>
               Cars vivara Justo Ut
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center'}}>
                Cars vivara Justo Ut vivara Justo Ut
                Cars vivara Justo Ut
            </Typography>
            <Typography variant="h5" color="initial" sx={{ textAlign: 'center', color: 'red'}}> Read Me</Typography>
            </CardContent>
      </Card>
    )
}

export const ProductList = () => {
    return(
        <Paper sx={{width: '25vw'}}>
            <Paper sx={{ display: 'flex', justifyContent: 'space-between', }}>
                <Box>
                    <Typography varinat='h1' sx={{padding: '0 2vw 0 2vw'}}>New Arrivals</Typography>
                </Box>
                <Box>
                    <LeftRight />
                </Box>
            </Paper>
            <Paper sx={{ display: 'flex', flexDirection: 'column'}}>
                <ProductListCard />
                <ProductListCard />
                <ProductListCard />
                <ProductListCard />
                <ProductListCard />
            </Paper>
        </Paper>
    )
}

export const ProductListCard = () =>{
    const [value, setValue] = useState(3)
    return(
        <Card>
            <CardActionArea sx={{display: "flex"}}>
                <CardMedia
                    component="img"
                    image={image2}
                    sx={{ width: '5vw', height:'10vh'}}
                >
                </CardMedia>
                <CardContent sx={{ display:'flex', flexDirection:'column'}}>
                    <Typography gutterBottom variant="div" component="div">
                        Nice Quize GRAVIDA
                    </Typography>
                    <Typography gutterBottom variant="div">
                        SHOP
                    </Typography>  
                    <Box>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                    </Box>
                    <Typography variant="div" sx={{ color: 'red'}}>
                        $89.99
                    </Typography>
                    </CardContent>
            </CardActionArea>

        </Card>
    )
}