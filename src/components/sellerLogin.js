import {Grid } from '@mui/material'
import React from 'react'
import LoginForm from './loginForm';


export default function SellerLogin() {
  const props = {
    title:"Ready to cook? Login then.",
    link:"sellerSignup",
    landing:"seller",
    role:"seller"
  }



  return (
    <>
      <Grid className='background bg-chef'>
        <Grid item xs={10} sm={10} md={8} lg={6} >
          <LoginForm {...props}/>
        </Grid>
      </Grid>
    </>
  )
}

