import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ProductDetails from '../ProductDetails/ProductDetails';

export default function InventoryCard(props) {
  console.log(props.soda)
  const color = props.soda.hexColorCode
  return (
    <Card className="sodaCanCard card" sx={{ maxWidth: 345 }} style={{backgroundColor: color}}>
      <CardMedia
        component="img"
        alt="Soda Can"
        className='sodaCanCardImg'
        image={"https://ik.imagekit.io/0ef3zk1rums/ColaCo/icons8-soda-60_R31QKU8mUC8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642911019613"}
      />
      <CardContent>
        <Typography className='soda-name' gutterBottom variant="h5" component="div">
          {props.soda.name}
        </Typography>
        <div className="price-stock-box">
          <Typography className='soda-desc' variant="body2" color="text.secondary">
            <b>$$:</b> {props.soda.price}
          </Typography>
          <Typography className='soda-desc' variant="body2" color="text.secondary">
            <b>QTY:</b> {props.soda.quantity}
          </Typography>
        </div>        
        <Typography className='soda-desc' variant="body2" color="text.secondary">
          {props.soda.desc}
        </Typography>
      </CardContent>
      <CardActions className="sodaCardActions">
        <ProductDetails sodaName={props.soda.name} sodaId={props.soda.Id}/>
      </CardActions>
    </Card>
  );
}