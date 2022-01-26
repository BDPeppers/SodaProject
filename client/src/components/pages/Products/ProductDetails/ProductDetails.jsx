import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { updateSodaPrice, restockSoda } from '../../../../redux/sodaOperations/sodaSlice';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { display } from '@mui/system';

export default function ProductDetails(props) {

const dispatch = useDispatch()

const [open, setOpen] = React.useState(false);
const [editPriceDisplay, setPriceDisplay] = React.useState('none')
const [editRestockDisplay, setRestockDisplay] = React.useState('none')
  

//update soda price
const handleQtyInput = (event) => {
  let newPrice = event.taget.value;
  if(newPrice === ''){
    console.log('invalid input')
  }else{
    dispatch(updateSodaPrice(props.sodaId, newPrice))
  }
}

const handleRestock = () => {
    //restock api
    dispatch(restockSoda(props.sodaId, props.sodaMaxQty))
}

//show/hide edit price box
const priceDisplay = (style) => {
   (style == 'none') ? setPriceDisplay('flex') :  setPriceDisplay('none')    
}

//show/hide restock success
const restockDisplay = (style) => {
    (style == 'none') ? setRestockDisplay('flex') :  setRestockDisplay('none')    
}

//opens control panel
const handleClickOpen = () => {
  setOpen(true);
};

//closes control panel
const handleClose = (event, reason) => {
  if (reason !== 'backdropClick') {
    setOpen(false);
    setPriceDisplay('none')
    setRestockDisplay('none') 
  }
};


  return (
    <div >
      <Button className='product-details' variant="outlined" onClick={handleClickOpen}>Details</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{props.sodaName}</DialogTitle>
        <DialogContent>
            <div className="restock-box">
            <Button onClick={() => restockDisplay(editRestockDisplay)}>Restock</Button>
            <div class="checkmark-wrapper" style={{ display: editRestockDisplay }}>
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            </div>
            
            <div className="price-box">
                <Button onClick={() => priceDisplay (editPriceDisplay)}>Edit Price</Button> 
                <Box component="form" sx={{ display: editPriceDisplay, flexWrap: 'wrap' }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="outlined-basic" label="New Price" variant="outlined" onChange={(event)=>handleQtyInput(event)}/>
                    </FormControl>
                </Box>
            </div>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() =>{
            handleClose();
          }}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

