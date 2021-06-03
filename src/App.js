import './App.css';
import React from "react";
import Header from './Header'
import Body from './Body'
import Categories_row from './Home_Page/Categories_row'
import LatestProducts from './Home_Page/Latest_Produts'
import Accessories from './Home_Page/Accessories'
import Footer from './Footer'



function App() {
  return (

    //BEM naming convenction
    
    <div className="app">
    <section>

    <div className="Image">
    <Header/>
    <Body/>

    </div>

    </section>
  

    <div>

    <Categories_row/>

    </div>


    <br>
    </br><br>
    </br><br>
    </br><br>
    </br><br>
    </br>

    <div>
    <LatestProducts/>
    </div>

    <div>

    <Accessories/>

    </div>

    <div>

    <Footer/>

    </div>


  
 
    


   
    
  
    </div>
  );
}

export default App;
