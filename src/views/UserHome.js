import { Grid } from '@mui/material'
import React from 'react'
import MediaCard from '../components/card'
import CustomerNavbar from '../components/customerNavbar'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


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

            <Grid maxWidth={"95vw"} className='home-title-container'>

                <span className='title'>Order food</span>

                <span>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size={"small"} className="filter-select">
                        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={category}
                            label="category"
                            onChange={handleCategory}

                        >
                            <MenuItem value={"all"}>All</MenuItem>
                            <MenuItem value={"desi"}>Desi</MenuItem>
                            <MenuItem value={"bbq"}>BBQ</MenuItem>
                            <MenuItem value={"chinese"}>Chinese</MenuItem>
                            <MenuItem value={"fast food"}>Fast Food</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard" size={"small"} className="filter-select">
                        <InputLabel id="demo-simple-select-helper-label">Price</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={price}
                            label="Price"
                            onChange={handlePrice}

                        >
                            <MenuItem value={"low"}>Low to High</MenuItem>
                            <MenuItem value={"high"}>High to Low</MenuItem>

                        </Select>
                    </FormControl>

                </span>

            </Grid>


            <Grid container className='cards-holder' maxWidth={"95vw"}>
                {
                    props.map((data) => (
                        <MediaCard key={data.shop} {...data} />
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default UserHome