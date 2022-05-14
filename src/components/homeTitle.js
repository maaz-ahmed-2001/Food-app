import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function HomeTitle(props) {
    const [category, setCategory] = React.useState('');
    const [price, setPrice] = React.useState('');

    const handleCategory = (event) => {
        setCategory(event.target.value);

    };
    const handlePrice = (event) => {
        setPrice(event.target.value);

    };
    return (
        <Grid className='home-title-container' sx={{ marginBottom: { xs: "0" }, flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" } }}>

            <Box className='title' sx={{ textAlign: { xs: "center", sm: "left" }, m: 0 }}>{props.title}</Box>

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
    )
}

export default HomeTitle