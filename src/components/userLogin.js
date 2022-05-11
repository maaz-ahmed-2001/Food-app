import {Grid } from '@mui/material'
import React from 'react'
import LoginForm from './loginForm'


export default function UserLogin() {
  const props = {
    title:"Hungry? Login and order now.",
    link:"customerSignup",
    landing:"user"
  }

  return (
    <>
      <Grid className='background bg-customer'>
      
        <Grid item xs={10} sm={10} md={8} lg={6} >
          <LoginForm {...props}/>
        </Grid>
      </Grid>
    </>
  )
}

