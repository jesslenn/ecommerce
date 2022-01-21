import React from 'react';
import Grid from '@material-ui/core'

const products = [
  {id: 1, name: 'shoes', description: 'bright red stiletto heels'}, 
  {id: 2, name: 'blouse', description: 'sheer, flowery, cottagecore fastasy. long sleeves'},
  {id: 3, name: 'skirt', description: 'broomstick skirt, perfect for swishing over tall fields of grass'},
]

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3}>
          <Product />
        </Grid>
      ))}
    </Grid>
  </main>

}

export default Products