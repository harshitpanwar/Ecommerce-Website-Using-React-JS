import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className='header'>
            <img className = "header__logo"
            src = '/images/logos/website_logo.png'/>
        
        <div className = "header__search">

        <input className="header__searchInput"
        type = "text"/>
        <SearchIcon 
        className="header__searchIcon"/>

        </div>

            <div className="header_nav">

                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Smartphones
                        </span>
                      
                    </div>


                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Smartwatches
                        </span>
                      
                        
                    </div>

                    
                    <div className="header__option">
                    <span className="header__optionLineOne">
                            Gaming
                        </span>
                     
                    </div>

                    <div className="header__option">
                    <span className="header__optionLineOne">
                            Headphones
                        </span>
                     
                    </div>
                         
                    <div className="header__option">
                    <span className="header__optionLineOne">
                            Accessories
                        </span>
                        
                    </div>

                    <div className="header__option">
                    <span className="header__optionLineOne">
                            Posts
                        </span>
                     
                    </div>

            </div>
            
            

        </div>
    )
}

export default Header
