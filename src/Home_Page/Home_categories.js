import React from 'react'
import './categories.css'
function Home_categories({heading,description,buttonText,backgroundUrl}) {
    return (
        <div className="category_item"  style={{backgroundImage: `url(${backgroundUrl})`}}>
            
            <div className="category_data" >

            <h1>{heading}</h1>
            <p>{description}</p>
            
            <button>{buttonText}</button>

            </div>
          


        </div>
    )
}

export default Home_categories
