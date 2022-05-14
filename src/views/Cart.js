import { Grid } from '@mui/material'
import React from 'react'
import HomeTitle from '../components/homeTitle'
import Navbar from '../components/Navbar'

function Cart() {
  const pages = ['Foods','Orders Accepted' , 'Orders Pending' , 'Orders Rejected' , 'Cart'];
  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages}/>
      <HomeTitle title="Cart"/>
      

    </Grid>
  )
}

export default Cart