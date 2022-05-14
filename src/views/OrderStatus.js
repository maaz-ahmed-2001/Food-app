import { Grid } from '@mui/material'
import React from 'react'
import CustomerOrdersTable from '../components/customerOrdersTable';
import HomeTitle from '../components/homeTitle'
import Navbar from '../components/Navbar'

function OrderStatus() {
  const pages = ['Add dish','My Orders','My Dishes'];
  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages}/>
      <HomeTitle title="My Orders"/>
      <CustomerOrdersTable/>

    </Grid>
  )
}

export default OrderStatus