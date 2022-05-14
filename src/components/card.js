import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import biryani from "../assets/images/biryani.jpg"
import { AddShoppingCart } from "@mui/icons-material"


export default function MediaCard(props) {
  return (
    
      <Card sx={{}} elevation={10} >
        <CardMedia
          component="img"
          height="200"
          image={biryani}
          alt="biryani"
        />
        <CardContent className="card-body">
          <Typography gutterBottom variant="h5" component="div" sx={{color:"rgb(145, 71, 3)",fontWeight:"400"}} >
            {props.dish}
          </Typography>
          <Typography sx={{fontSize:"20px",fontWeight:"600"}} varinat="h5" component="div">{props.shop}</Typography>
          <Typography sx={{color:"red",fontSize:"18px"}} varinat="p" component="div">Rs. {props.price}</Typography>
          <Typography sx={{color:"grey",fontSize:"16px"}} varinat="p" component="div">Delivery Charges : {props.deliveryType}</Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button size="small" className='form-btn' style={{ padding: "8px 12px", marginBottom: "10px" }}>Add to cart <AddShoppingCart style={{ marginLeft: "10px" }} /></Button>
        </CardActions>
      </Card>
    
  );
}
