import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import biryani from "../assets/images/biryani.jpg"
import { AddShoppingCart, DeleteOutlined, Edit } from "@mui/icons-material"
import { Tooltip } from '@mui/material';
import Modal from './modal';


export default function MediaCard(props) {
  const [modalStatus,setModalStatus] = React.useState(false)
  const [purpose,setPurpose] = React.useState("")

  return (

    <Card sx={{}} elevation={10} >
      <CardMedia
        component="img"
        height="200"
        image={biryani}
        alt="biryani"
      />
      <CardContent className="card-body" sx={{ p: "12px !important" }} >
        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#222", fontWeight: "400" }} >
          {props.dish}
        </Typography>
        {
          localStorage.getItem("Role") === "customer" ?
            (<Typography sx={{ fontSize: "20px", fontWeight: "600" }} varinat="h5" component="div">{props.shop}</Typography>) : null
        }
        <Typography sx={{ color: "red", fontSize: "18px" }} varinat="p" component="div">Rs. {props.price}</Typography>
        <Typography sx={{ color: "#5e5e5e", fontSize: "16px" }} varinat="p" component="div">Delivery Charges : {props.deliveryType}</Typography>
      </CardContent>
      {localStorage.getItem("Role") === "customer" ?
        (
          <CardActions style={{ justifyContent: "center", alignItems: "center" }}>
            <Button size="small" className='form-btn' style={{ padding: "8px 12px 6px 12px", marginBottom: "10px" }}>Add to cart <AddShoppingCart style={{ marginLeft: "10px" }} /></Button>
          </CardActions>
        ) : (<CardActions style={{ justifyContent: "center", alignItems: "center" }}>
          <Tooltip title="Edit">
            <Button
              size="small"
              className='form-btn'
              style={{ padding: "8px 12px 6px 12px", marginBottom: "10px", display: "flex", alignItems: "center" }}
              onClick={() => {setModalStatus(true);setPurpose("Edit")}}
            >
              <Edit />
            </Button>
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              size="small"
              className='form-btn'
              style={{ padding: "8px 12px 6px 12px", marginBottom: "10px", display: "flex", alignItems: "center" }}
              onClick={() =>{ setModalStatus(true);setPurpose("Delete")}}

            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
          <Modal open={modalStatus} purpose={purpose}/>

        </CardActions>)

      }
    </Card>

  );
}
