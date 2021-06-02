import React from 'react'
import './categories.css'
function Home_categories({heading,backgroundUrl}) {
    return (
        <div className="category_item"  style={{backgroundImage: `url(${backgroundUrl})`}}>
            
            <div className="category_data" >

            <h2>{heading}</h2>

            
            <button>Shop Now</button>

            </div>
          


        </div>
    )
}

export default Home_categories
