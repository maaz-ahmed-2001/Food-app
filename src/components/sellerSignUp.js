import {  Grid } from '@mui/material'
import React, { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { FacebookOutlined, Google } from '@mui/icons-material';


export default function SellerSignUp() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState("")
  const [shopName, setShopName] = useState("")
  const [city, setCity] = useState("")



  return (
    <>
      <Grid className='background'>
        <Grid item xs={10} sm={10} md={8} lg={6} >
          <div className="form-container">
            <div className="form">
              <h1 className='title'>Hungry ? Login and Order now</h1>
              <div className='inp-container'>
                <label htmlFor='shop-name'>Full name :</label>
                <br />
                <input type="text" id="shop-name" value={shopName} onChange={(event) => setShopName(event.target.value)} placeholder="Shop name" className="inp" />
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Email Address :</label>
                <br />
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="inp" />
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Password :</label>
                <br />
                <div className="pass-div">
                  <input type={showPass ? "text" : "password"} onPaste={(e) => { e.preventDefault(); return false; }} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="inp pass" />
                  {showPass ? <Visibility className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} /> :
                    <VisibilityOff className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} />
                  }
                </div>
              </div>
              <div className='inp-container'>
                <label htmlFor='email'>Confirm Password :</label>
                <br />
                <div className="pass-div">
                  <input type={showPass ? "text" : "password"} onPaste={(e) => { e.preventDefault(); return false; }} value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} placeholder="Confirm Password" className="inp pass" />
                  {showPass ? <Visibility className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} /> :
                    <VisibilityOff className='eye-btn' sx={{ fontSize: "35px" }} onClick={() => setShowPass(!showPass)} />
                  }
                </div>
              </div>
              
              <div className='inp-container'>
                <label htmlFor='city'>City :</label>
                <br />
                <input type="text" id="city" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" className="inp" />
              </div>
              

              

              <button className="form-btn auth">
                <span>Continue with Google</span>
                <Google sx={{fontSize:"25px"}}/>
              </button>

              <button className="form-btn auth">
                <span>Continue with Facebook </span> 
                <FacebookOutlined sx={{fontSize:"25px"}}/>
              </button>
              <div className='acc-link'>Already have an account? <b>Login</b></div>
              
              {/* <p className="account">Don't have an account ? <Link to="/signup" className="account-link">Create one</Link></p> */}
              <button className="form-btn signup"
                onClick={() => { }}
              >Create account</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

