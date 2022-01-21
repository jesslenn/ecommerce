import React from 'react';
import Grid from '@material-ui/core'

const products = [
  {id: 1, name: 'shoes', description: 'bright red stiletto heels', price: '100'}, 
  {id: 2, name: 'blouse', description: 'sheer, flowery, cottagecore fastasy. long sleeves', price: '50'},
  {id: 3, name: 'skirt', description: 'broomstick skirt, perfect for swishing over tall fields of grass', price: '65'},
]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product}/>
        </Grid>
      ))}
    </Grid>
  </main>

}

export default Products