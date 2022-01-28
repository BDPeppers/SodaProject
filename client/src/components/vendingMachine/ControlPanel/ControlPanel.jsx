import React, { useEffect } from 'react';

import {useSelector, useDispatch} from 'react-redux';
import { fetchSodaData, postSodaStock, purchaseSuccess } from '../../../redux/sodaOperations/sodaSlice';

// import { saveAs } from 'file-saver';

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
// function fileDownLoad (soda, purchaseQty) {
//   let purchase = {
//     name: soda.name,
//     price: soda.price,
//     desc: soda.desc,
//     qty: purchaseQty
//   }
//   let sodaJSON = new Blob(
//     [JSON.stringify(purchase, null,4)],
//     {
//       type: "application/json"
//     }
//   )
//   saveAs(sodaJSON, "soda.json")
// }

export default function ControlPanel() {
  const dispatch = useDispatch()
  const sodaData = useSelector(state => state.sodaState.sodas)

  const [open, setOpen] = React.useState(false);
  const [sodas, setSoda] = React.useState(sodaData);  
  const [selectedSoda, setSelectedSoda] = React.useState();//cola is the default
  const [qty, setQty] = React.useState(0);
  
  useEffect(() => {
    dispatch(fetchSodaData())
    setSoda(sodaData)
    setSelectedSoda(sodaData[0])
  }, [open])


  function purchase(soda, sodaQty){
    //qty check
    console.log('purchase attempt')
    console.log(soda)

    //check if soda is available
    if(soda.quantity === 0){
      alert(`${soda.name} has sold out -> Please Restock on Inventory page`)
      return;
    }  

    //validate user input
    if(sodaQty === 0){
      alert('Please enter a QTY to purchase')
      return;
    }

    //validate user input + complete purchase
    if(sodaQty > soda.quantity){
      alert(`Error: ${soda.quantity} ${soda.name} available`);
    }else{
      // fileDownLoad(soda, sodaQty);

      //update soda Quantity
      let newQTY = soda.quantity - sodaQty;

      let purchasedAmount = parseInt(sodaQty) + parseInt(soda.purchased);

      let payload = {id: soda._id, purchaseAmount: purchasedAmount, remainingStock: newQTY}
      dispatch(postSodaStock(payload))
      dispatch(purchaseSuccess(true))
    }
  }

  //opens control panel -> mui function
  const handleClickOpen = () => {
    setOpen(true);
    dispatch(purchaseSuccess(false))
  };


  //closes control panel -> mui function
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
      setQty(0);
    }
  };

  return (
    <div className='controlPanel'>
      <Button onClick={handleClickOpen}>Menu</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle className='control-panel-header'>Soda Selection</DialogTitle>
        <DialogContent>
          <Box className='control-panel-selection-box' component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                className='control-panel-soda-select'
                native
                onChange={(event) => {
                  let sodaId = event.target.value
                  setSelectedSoda(sodas.find(soda => sodaId === soda._id));                  
                }}
              >
                {sodas.map(soda => (
                  <option key={soda._id} value={soda._id}>{soda.name}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl className='control-panel-soda-qty' sx={{ m: 1, minWidth: 120 }}>
              <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="outlined-basic" label="Qty" variant="outlined" value={qty} onChange={(event)=>setQty(event.target.value)}/>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions className='control-panel-btn-box'>
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

