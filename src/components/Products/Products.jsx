import {Grid} from '@material-ui/core';
import React, { useState, useRef, useEffect } from 'react';

import Product from './Product/Product';
import useStyles from './styles';
import { Typography, Button } from '@material-ui/core';

const Products = ({cartData, categories, onAddToCart, onSubtract}) => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [active, setactive] = useState("");
  const productListRef = useRef(null);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setactive(category.slug);
  };


  useEffect(() => {
    if (selectedCategory && productListRef.current) {
      const categoryProducts = productListRef.current.querySelector(`.${selectedCategory.slug}`);
      if (categoryProducts) {
        let position = categoryProducts.getBoundingClientRect();
        if (window.screen.width > 420) {
        window.scrollTo(position.left, position.top + window.scrollY - 70);
        }
        else{
          window.scrollTo(position.left, position.top + window.scrollY - 120);
        }
      }
    }
  }, [selectedCategory]);


  if (!categories.length) return <p>Loading...</p>;

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.categorylist}>
      {categories.map((category) => (
        <Button variant="outlined" className={active === category.slug ? classes.active : classes.button} key={category.id} onClick={() => handleCategorySelect(category)}>
          {category.name}
        </Button >
      ))}
      </div>
      <div className={classes.productlist} ref={productListRef}>
    {categories.map((category) => {
        return (
          
          <div className={classes.container} >
          <Typography className={`category-item ${category.slug}`} variant="h3">
            {category.name}
          </Typography>
          <Grid container spacing={4} >
          {category.productsData.map((product) => (
            <Grid style={{paddingBottom: '50px'}} key={product.id} className={`product-item ${product.categories[0].slug}`} item  sm={6} md={3} lg={3} >
              <Product cartData={cartData} product={product} onAddToCart={onAddToCart} onSubtract={onSubtract} />
            </Grid>
          ))}
         </Grid>

         </div>
         
         

      );
      })}
      </div>

    </div>
  );
};

export default Products;