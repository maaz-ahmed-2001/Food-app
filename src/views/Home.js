import { Grid } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <Grid container className='home-background'>
      <div className='home-title'>
        <h1 >Food Freaks</h1>
        <h3 >Where food does the talking</h3>
      </div>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='home-background-img-person' >
        <h2 className='img-title'>Are you hungry ?</h2>
        <button className='form-btn home-btn' onClick={()=>navigate("/customerLogin")}>Continue as Customer</button>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className='home-background-img-chef' >
        <h2 className='img-title'>Are you a chef ?</h2>
        <button className='form-btn home-btn' onClick={()=>navigate("/chefLogin")}>Continue as Chef</button>
      </Grid>
    </Grid>
  )
}

export default Home