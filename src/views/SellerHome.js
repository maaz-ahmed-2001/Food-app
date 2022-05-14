import { Grid } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import HomeTitle from '../components/homeTitle'

function SellerHome() {
  const pages = ['Add dish','Orders Recieved' , 'Orders Processed' , 'Orders Rejected' , 'My Dishes'];

  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages}/>
      <HomeTitle title="Add Dish"/>
      

    </Grid>
  )
}

export default SellerHome