import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { purchaseSoda, fetchSodaData, postSodaStock } from '../../../redux/sodaOperations/sodaSlice';

import { saveAs } from 'file-saver';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

//given an object convert to JSON
function fileDownLoad (soda, purchaseQty) {
  let purchase = {
    name: soda.name,
    price: soda.price,
    desc: soda.desc,
    qty: purchaseQty
  }
  let sodaJSON = new Blob(
    [JSON.stringify(purchase, null,4)],
    {
      type: "application/json"
    }
  )
  saveAs(sodaJSON, "soda.json")
}

export default function ControlPanel() {
  const dispatch = useDispatch()
  const sodaData = useSelector(state => state.sodaState.sodas)
  

  //move this up a component
  //create another one that will update after a successful purchase
  //call 2 thunk, updateSodaStock and then fetchSodaData

  const [open, setOpen] = React.useState(false);
  const [succesfulPurchase, setSuccessfulPurcahse] = React.useState(false);
  const [sodas, setSoda] = React.useState(sodaData);  
  const [selectedSoda, setSelectedSoda] = React.useState();//cola is the default
  const [qty, setQty] = React.useState(0);//soda quantity
  
  useEffect(() => {
    dispatch(fetchSodaData())
    setSoda(sodaData)
    setSelectedSoda(sodaData[0])
  }, [open])

  //keeps track of soda selected
  const handleSodaInput = (event) => {
    let sodaId = event.target.value
    console.log(sodaId)

    setSelectedSoda(sodas.find(soda => sodaId = soda._id));
    console.log(selectedSoda)
  };

function purchase(soda, sodaQty){
  //qty check
  console.log('purchase attempt')
  console.log(soda)
  if(sodaQty > soda.quantity){
    alert(`Only ${soda.quantity} ${soda.name} available`);
  }else{
    // fileDownLoad(soda, sodaQty);
    //update soda Quantity
    let newQTY = soda.quantity - sodaQty;
    let purchasedAmount = parseInt(sodaQty)
    
    let payload = {id: soda._id, purchaseAmount: purchasedAmount, remainingStock: newQTY}
    dispatch(postSodaStock(payload))
    setSuccessfulPurcahse(true);
  }
}
  //opens control panel
  const handleClickOpen = () => {
    setOpen(true);
  };

  //closes control panel
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setQty(0);
    }
  };

  return (
    <div className='controlPanel'>
      <Button onClick={handleClickOpen}>Control Panel</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Soda Selection</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                native
                onChange={(event) => {
                  let sodaId = event.target.value
                  setSelectedSoda(sodas.find(soda => sodaId === soda._id));                  
                }}
              >
                {/* {sodas.map} */}
                {sodas.map(soda => (
                  <option key={soda._id} value={soda._id}>{soda.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="outlined-basic" label="Qty" variant="outlined" value={qty} onChange={(event)=>setQty(event.target.value)}/>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() =>{
            handleClose();
            purchase(selectedSoda,qty);
          }}>
            Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

