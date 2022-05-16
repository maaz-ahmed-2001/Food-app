import { Button, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HomeTitle from '../components/homeTitle'
import { Box } from '@mui/system';
import { ImageOutlined } from '@mui/icons-material'

function SellerHome() {
  const pages = ['Add dish', 'Orders Recieved', 'Orders Processed', 'Orders Rejected', 'My Dishes'];
  const [category, setCategory] = useState("")
  const [dishName, setDishName] = useState("")
  const [price, setPrice] = useState("")
  const [deliveryCharges, setDeliveryCharges] = useState("")
  const [checked, setChecked] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [dishPic, setDishPic] = React.useState("");
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setDisable(!disable)
    if (checked) setDeliveryCharges("Free")
  };
  const setDish = () => {
    if (dishName, price, category, deliveryCharges, dishPic !== "") {
      console.log(category, dishName, price, deliveryCharges, dishPic)
    }
    else {
      alert("Fill every field")
    }
  }

  return (
    <Grid container className='user-homepage-container'>
      <Navbar pages={pages} />
      <HomeTitle title="Add Dish" />
      <Grid container sx={{ display: "grid", placeItems: "center !important" }}>
        <Grid item xs={11} sm={11} md={9} lg={7} sx={{ textAlign: "center" }} >
          <TextField id="standard-basic" sx={{ mt: "20px", minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Dish Name*" variant="standard" onChange={(e) => { setDishName(e.target.value) }} />
          <br />
          <TextField id="standard-basic" type="number" sx={{ mt: "20px", minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Amount (Rs.)*" variant="standard" onChange={(e) => { setPrice(e.target.value) }} />
          <br />
          <FormControl variant='standard' sx={{ mt: "20px", minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }}>
            <InputLabel
              id="category-select-label"
            // sx={{ fontSize: { xs: 10, sm: 14 } }}
            >Category*</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Category"
              onChange={handleCategory}
              sx={{ borderColor: "rgb(230, 160, 70)",textAlign:"left" }}
            >
              <MenuItem value={"desi"}>Desi</MenuItem>
              <MenuItem value={"bbq"}>BBQ</MenuItem>
              <MenuItem value={"chinese"}>Chinese</MenuItem>
              <MenuItem value={"fast food"}>Fast Food</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField disabled={disable} type="number"  id="standard-basic" sx={{ mt: "20px", minWidth: { xs: "90vw", sm: "50vw", md: "40vw", lg: "30vw" } }} label="Deliver Charges (Rs.)*" variant="standard" onChange={(e) => { setDeliveryCharges(e.target.value) }} />
          <br />
          <Box sx={{ textAlign: "left" }}>
            <FormControlLabel control={
              <Checkbox
                sx={{ color: "rgb(230, 160, 70)" }}
                value="Free"
                color="default"
                checked={checked}
                onChange={handleChange}
              />} label="Free Delivery" />
          </Box>
          <br />

          <Box className="dish-img-section" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <label htmlFor='upload-image'>
              Upload dish image*
              <br />
              <span id="img-upload" className='form-btn upload-img'><ImageOutlined /></span>
            </label>
            <Box sx={{ display: "none" }}>
              <input accept='image/*' type="file" placeholder="Upload Image" onChange={(e) => { setDishPic(e.target.files[0]) }} name="upload-image" required id="upload-image" />
            </Box>
          </Box>
          <Button className="form-btn" sx={{ m: "20px auto !important" }} onClick={setDish}>Set Dish</Button>
        </Grid>
      </Grid>

    </Grid>
  )
}

export default SellerHome