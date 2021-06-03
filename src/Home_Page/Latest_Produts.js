import React from 'react'
import './Latest_Products.css'
import {Grid,Paper} from '@material-ui/core'

import Product from'./Product'



function Latest_Produts() {
    return (

<div className="Latest_products">
    <h1>Latest Products</h1>
    <br>
    </br><br>
    </br><br>
    </br>

        <Grid container spacing={5} className="products_row">

            <Grid item xs={6} sm={4} md={3} xl={2}>

                <Paper><Product Title="One Plus 7" ImageUrl="/images/product_images/onePlus7.jpg" Category="SmartPhones"/></Paper>

            </Grid>

            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="One Plus 7t" ImageUrl="/images/product_images/onePlus7tPro.jpg" Category="SmartPhones" /></Paper>

            </Grid>


            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="One Plus 8" ImageUrl="/images/product_images/onePlus8.jpg" Category="SmartPhones"/></Paper>

            </Grid>


            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="Acer Nitro 5" ImageUrl="/images/product_images/acerNitro5.jpg" Category="Laptops"/></Paper>

            </Grid>

            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="Acer Predator" ImageUrl="/images/product_images/AcerPredator.jpg" Category="Laptops"/></Paper>

            </Grid>

            
            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="Amaze fit Bip Lite" ImageUrl="/images/product_images/amazefitBipLite.jpg" Category="SmartWatches"/></Paper>

            </Grid>

            
            <Grid item xs={6} sm={4} md={3} xl={2}>

            <Paper><Product Title="Mi Band 4" ImageUrl="/images/product_images/miBand4.jpg" Category="SmartWatches"/></Paper>

            </Grid>




        </Grid>

</div>
       
    )
}

export default Latest_Produts
