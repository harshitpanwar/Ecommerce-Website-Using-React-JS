import React from 'react'
import './Categories_row.css'
import Category from './Home_categories'
import {Grid,Paper} from '@material-ui/core'


function Categories_row() {
    return (
       



    <div className="home_categories_row">

     <Grid container spacing={1} className="products_row">

            <Grid item s={12} md={4}>

                <Paper>    <Category heading="SmartPhones" buttonText="Shop Now" description="One Plus and many more" backgroundUrl="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/></Paper>

            </Grid>

            
            <Grid item s={12} md={4}>

                <Paper>        <Category heading="SmartWatches" buttonText="Check Out" description="Mi bands and much more" backgroundUrl="https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
</Paper>

            </Grid>

            
            <Grid item s={12} md={4}>

                <Paper>        <Category heading="Laptops" buttonText="Discover" description="Gaming Laptops , Ultraboooks" backgroundUrl="https://images.pexels.com/photos/5698415/pexels-photo-5698415.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5698415.jpg&fm=jpg"/>
</Paper>

            </Grid>

    </Grid>


  </div>
    )
}

export default Categories_row
