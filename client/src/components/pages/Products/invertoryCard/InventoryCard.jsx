import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { postRestockSoda } from '../../../../redux/sodaOperations/sodaSlice';

// import ProductDetails from '../ProductDetails/ProductDetails';

export default function InventoryCard(props) {
  
  const dispatch = useDispatch()
  var params ={
    id : props.soda._id,
    maxQty: props.soda.maxQuantity
  }
  
  return (

    <div className="sodaCanCard card">
      <div className="flexbox-1">
        <h1 className="soda-name">{props.soda.name}</h1>
        <div className="soda-img-wrapper">
          <img
            className='soda-can-img'
            src="https://ik.imagekit.io/0ef3zk1rums/ColaCo/icons8-soda-60_R31QKU8mUC8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642911019613" 
            alt="Soda Can" />
        </div>
        
        <div className="price-stock-box">
          <h2 className="soda-price">$$ {props.soda.price}.00</h2>
          <h2 className="soda-qty">QTY: {props.soda.quantity}</h2>
        </div>
      </div>

      <div className="flexbox-2">
        <p className="soda-desc">{props.soda.desc}</p>
        
        <Button className='soda-restock-btn' variant='outlined' onClick={() => dispatch(postRestockSoda(params))}>Restock</Button>
        {/* <ProductDetails sodaName={props.soda.name} sodaId={props.soda.Id} sodaRestock={props.soda.maxQuantity}/> */}
      </div>
      
    </div>
  );
}