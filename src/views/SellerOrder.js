import { Grid } from '@mui/material'
import React from 'react'
import HomeTitle from '../components/homeTitle'
import Navbar from '../components/Navbar'
import SellerOrderTable from '../components/sellerOrderTable';

function SellerOrder() {
    const pages = ['Add dish', 'My Orders', 'My Dishes'];
    return (
        <Grid container className='user-homepage-container'>
            <Navbar pages={pages} />
            <HomeTitle title="My Orders" />
            <SellerOrderTable />


        </Grid>
    )
}

export default SellerOrder