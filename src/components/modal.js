import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Modal(props) {
    const [open, setOpen] = React.useState(false);
    const [dishName, setDishName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [deliveryCharges, setDeliveryCharges] = React.useState("");
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const saveDish = () => {
        setOpen(false);
    };
    const deleteDish = () => {
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
                fullScreen={fullScreen}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {props.purpose}
                </BootstrapDialogTitle>
                {props.purpose === "Edit" ? (
                    <>
                        <DialogContent dividers sx={{ display: "grid", placeItems: "center" }} >
                            <Box>
                                <TextField id="standard-basic" label="Dish Name" variant="standard" onChange={(e) => setDishName(e.target.value)} sx={{ width: { xs: "90vw", sm: "60vw", md: "40vw" } }} />
                                <br />
                                <TextField id="standard-basic" label="Price (Rs.)" variant="standard" onChange={(e) => setPrice(e.target.value)} sx={{ mt: "20px", width: { xs: "90vw", sm: "60vw", md: "40vw" } }} />
                                <br />
                                <TextField id="standard-basic" label="Delivery Charges (Rs.)" variant="standard" onChange={(e) => setDeliveryCharges(e.target.value)} sx={{ mt: "20px", mb: "20px", width: { xs: "90vw", sm: "60vw", md: "40vw" } }} />
                            </Box>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: "center" }}>
                            <Button className="form-btn" autoFocus onClick={saveDish} sx={{ m: "10px 0" }}>
                                Save changes
                            </Button>

                        </DialogActions>
                    </>) : (
                    <>
                        <DialogContent dividers sx={{ display: "grid", placeItems: "center" }} >
                            <Box sx={{ fontSize: "14px", fontWeight: "400", p: { xs: "0", sm: "0", md: "20px" } }}>
                                Are you sure you want to remove this item from your inventory ?
                            </Box>
                        </DialogContent>
                        <DialogActions sx={{ justifyContent: "center" }}>
                            <Button className="form-btn" autoFocus onClick={deleteDish} sx={{ m: "10px 0" }}>
                                Delete
                            </Button>
                        </DialogActions>
                    </>
                )}
            </BootstrapDialog>
        </div>
    );
}
