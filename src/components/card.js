import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import biryani from "../assets/images/biryani.jpg"
import {AddShoppingCart , AttachMoney} from "@mui/icons-material"

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardMedia
        component="img"
        height="200"
        image={biryani}
        alt="biryani"
      />
      <CardContent className="card-body">
        <Typography gutterBottom variant="h5" component="div" >
          {props.dish}
        </Typography>
        <h3>{props.shop}</h3>
        <h4><AttachMoney/> Rs. {props.price}</h4>
        <h4>Delivery type: {props.deliveryType}</h4>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <Button size="small" className='form-btn' style={{padding:"8px 12px",marginBottom:"10px"}}>Add to cart <AddShoppingCart style={{marginLeft:"10px"}} /></Button>
      </CardActions>
    </Card>
  );
}
