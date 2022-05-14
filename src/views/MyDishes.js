import { Grid } from '@mui/material'
import React from 'react'
import HomeTitle from '../components/homeTitle'
import Navbar from '../components/Navbar'

function MyDishes() {
  const pages = ['Add dish','Orders Recieved' , 'Orders Processed' , 'Orders Rejected' , 'My Dishes'];
  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages}/>
      <HomeTitle title="My Dishes"/>
      

    </Grid>
  )
}

export default MyDishes