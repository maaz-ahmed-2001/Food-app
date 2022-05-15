import { Box, Grid } from '@mui/material'
import React from 'react'
import MediaCard from '../components/card';
import HomeTitle from '../components/homeTitle'
import Navbar from '../components/Navbar'

function MyDishes() {
  const props = [
    {
        dish: "Biryani",
        price: "300",
        deliveryType: "Paid",
        shop: "AA Foods"
    },
    {
        dish: "Daal Chawal",
        price: "100",
        deliveryType: "Paid",
        shop: "Haider Foods"
    },
    {
        dish: "Broast",
        price: "250",
        deliveryType: "Free",
        shop: "Karachi Broast"
    },
    {
        dish: "Zinger",
        price: "350",
        deliveryType: "Paid",
        shop: "Burger Spot"
    }
]
  const pages = ['Add dish','Orders Recieved' , 'Orders Processed' , 'Orders Rejected' , 'My Dishes'];
  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages}/>
      <HomeTitle title="My Dishes"/>
      <Box sx={{ pr: { xs: "0", sm: "32px", md: "32px", lg: "32px" , xl:"32px" } , justifyContent:"center", m:"0 auto"}}>
                <Grid container className='cards-holder' columns={12} columnSpacing={{ xs: 0, sm: 4, md: 4, lg: 4}} rowSpacing={4} sx={{ width: "90vw", mt:0 , justifyContent:{xs:"center",sm:"start"} }}>
                    {
                        props.map((data) => (
                            <Grid item xs={10} sm={6} md={4} lg={3} xl={3} key={data.shop}>
                                <MediaCard  {...data} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>

    </Grid>
  )
}

export default MyDishes