import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HomeTitle from '../components/homeTitle'
import { UploadFile } from '@mui/icons-material';
import { Box } from '@mui/system';

function SellerHome() {
  const pages = ['Add dish', 'Orders Recieved', 'Orders Processed', 'Orders Rejected', 'My Dishes'];
  const [category, setCategory] = useState("")
  const [dishName, setDishName] = useState("")
  const [price, setPrice] = useState("")
  const [deliveryCharges, setDeliveryCharges] = useState("")
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages} />
      <HomeTitle title="Add Dish" />
      <Grid container>
        <Grid item xs={11} sm={11} md={9} lg={7}>
          <TextField id="standard-basic" sx={{ minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Dish Name" variant="standard" onChange={(e) => { }} />
          <br />
          <TextField id="standard-basic" sx={{ minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Amount (Rs.)" variant="standard" onChange={(e) => { }} />
          <br />
          <TextField id="standard-basic" sx={{ minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Deliver Charges (Rs.)" variant="standard" onChange={(e) => { }} />
          <br />
          <FormControl variant='standard' sx={{ minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }}>
            <InputLabel
              id="category-select-label"
              sx={{ fontSize: { xs: 10, sm: 14 } }}
            >Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Category"
              onChange={handleCategory}
              sx={{ borderColor: "rgb(230, 160, 70)", fontSize: { xs: 10, sm: 14 } }}
            >
              <MenuItem value={"desi"}>Desi</MenuItem>
              <MenuItem value={"bbq"}>BBQ</MenuItem>
              <MenuItem value={"chinese"}>Chinese</MenuItem>
              <MenuItem value={"fast food"}>Fast Food</MenuItem>
            </Select>
          </FormControl>
          <Box className="img-container">
            <label htmlFor="upload-image">
              <UploadFile />
            </label>
            <Box sx={{display:"none"}}>
              <input type="file" placeholder="Upload Image" onChange={(e)=>{}} name="upload-image" required id="upload-image" />
            </Box>
          </Box>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default SellerHome