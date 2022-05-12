import { Grid } from '@mui/material'
import React from 'react'
import MediaCard from '../components/card'
import CustomerNavbar from '../components/customerNavbar'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';


function UserHome() {

    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);

    };
    const handlePrice = (event) => {
        setPrice(event.target.value);

    };


    const props = [
        {
            dish: "Biryani",
            price: "300",
            deliveryType: "Paid",
            shop: "AA Foods"
        },
        {
            dish: "Daal Chawal",
            price: "100",
            deliveryType: "Paid",
            shop: "Haider Foods"
        },
        {
            dish: "Broast",
            price: "250",
            deliveryType: "Free",
            shop: "Karachi Broast"
        },
        {
            dish: "Zinger",
            price: "350",
            deliveryType: "Paid",
            shop: "Burger Spot"
        }
    ]

    return (
        <Grid container className='user-homepage-container'>

            <CustomerNavbar />

            <Grid className='home-title-container' sx={{ marginBottom: { xs: "0" }, flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" } }}>

                <Box className='title' sx={{ textAlign: { xs: "center", sm: "left" }, m: 0 }}>Order food</Box>

                <Box sx={{ width: { xs: "100%", sm: "fit-content" }, display: { xs: "flex" }, justifyContent: { xs: "flex-end" } }}>
                    <Box >
                        <FormControl variant="standard" sx={{ m: 1, minWidth: { xs: 70, sm: 100 }, }} size={"small"} className="filter-select">
                            <InputLabel
                                id="demo-simple-select-helper-label"
                                sx={{ fontSize: { xs: 10, sm: 14 } }}
                            >Category</InputLabel>
                            <Select
                                autoWidth={true}
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={category}
                                label="category"
                                onChange={handleCategory}
                                sx={{ borderColor: "rgb(230, 160, 70)", fontSize: { xs: 10, sm: 14 } }}

                            >
                                <MenuItem value={"all"}>All</MenuItem>
                                <MenuItem value={"desi"}>Desi</MenuItem>
                                <MenuItem value={"bbq"}>BBQ</MenuItem>
                                <MenuItem value={"chinese"}>Chinese</MenuItem>
                                <MenuItem value={"fast food"}>Fast Food</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl sx={{ m: 1, minWidth: { xs: 70, sm: 100 }, }} variant="standard" size={"small"} className="filter-select">
                            <InputLabel
                                id="demo-simple-select-helper-label"
                                sx={{ borderColor: "rgb(230, 160, 70)", fontSize: { xs: 10, sm: 14 } }}
                            >Price</InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={price}
                                label="Price"
                                onChange={handlePrice}
                                sx={{ borderColor: "rgb(230, 160, 70)", fontSize: { xs: 10, sm: 14 } }}

                            >
                                <MenuItem value={"low"}>Low to High</MenuItem>
                                <MenuItem value={"high"}>High to Low</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </Box>

            </Grid>

            <Box sx={{ p: { xs: "0", sm: "0px 8px", md: "0 8px", lg: "0 16px" , xl:"0 32px" } }}>
                <Grid container className='cards-holder' columns={12} columnSpacing={{ xs: 0, sm: 4, md: 4, lg: 4 }} rowSpacing={4} sx={{ width: "90vw", mt:0 }}>

                    {
                        props.map((data) => (
                            <Grid item xs={10} sm={6} md={4} lg={3} key={data.shop}>
                                <MediaCard  {...data} />
                            </Grid>
                        ))
                    }

                </Grid>
            </Box>
        </Grid>
    )
}

export default UserHome