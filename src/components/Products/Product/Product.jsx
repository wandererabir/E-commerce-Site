import React, {useState, useEffect } from 'react';
import { commerce } from '../../../lib/commerce';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddBoxTwoToneIcon from '@material-ui/icons/AddBoxTwoTone';
import IndeterminateCheckBoxTwoToneIcon from '@material-ui/icons/IndeterminateCheckBoxTwoTone';


import useStyles from './styles';

const Product = ({cartData, product, onAddToCart, onSubtract }) => {
  const classes = useStyles();
  const [isAdded, setIsAdded] = useState(false);

  const handleRemoveFromCart = (lineItemId) =>{

    if(cartData.line_items.some((item) => item.product_id === lineItemId)){
        const item = cartData.line_items.find((item) => item.product_id === lineItemId)
        onSubtract(item.id);
      }
      
  };


  useEffect(() => {
    // Retrieve the current cart data and check if the product is already in the cart
      const isProductInCart = cartData.line_items.some((item) => item.product_id === product.id);
      setIsAdded(isProductInCart);
  }, [product.id]);


  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name}>
              <CardActions disableSpacing className={classes.cardActions}>
              <IconButton aria-label="Add to Cart" onClick={() => setIsAdded(!isAdded)}>
                {isAdded ? <IndeterminateCheckBoxTwoToneIcon style={{ color: "black" }} onClick={() => handleRemoveFromCart(product.id)}/> : <AddBoxTwoToneIcon style={{ color: "black" }} onClick={() => onAddToCart(product.id, 1)}/>}
              </IconButton>
              </CardActions>
      </CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
        <Typography gutterBottom variant="body1" component="h2">
           ${product.price.formatted}
          </Typography>
          <Typography gutterBottom variant="body1" component="subtitle1">
            {product.name}
          </Typography>

        </div>
      </CardContent>

    </Card>
  );
};

export default Product;