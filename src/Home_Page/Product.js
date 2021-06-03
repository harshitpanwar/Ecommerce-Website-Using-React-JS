import React from 'react'
import './Product.css'


function Product({Title, Category, ImageUrl}) {
    return (
        <div className="Product">
            
            <img className = "productImage"
            src = {ImageUrl}/>
            <h4>{Title}</h4>
            <p>{Category}</p>


        </div>
    )
}

export default Product
