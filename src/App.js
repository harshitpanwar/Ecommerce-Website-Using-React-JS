import './App.css';
import React from "react";
import Header from './Header'
import Body from './Body'

import Category from './Home_Page/Home_categories'


function App() {
  return (

    //BEM naming convenction
    
    <div className="app">
    <div className="Image">
    <Header/>
    <Body/>

    </div>

    <div className="home_categories_row">
      <Category heading="SmartPhones" backgroundUrl="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"/>
      <Category heading="SmartWatches" backgroundUrl="https://images.pexels.com/photos/267391/pexels-photo-267391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      <Category heading="Laptops" backgroundUrl="https://images.pexels.com/photos/5698415/pexels-photo-5698415.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-5698415.jpg&fm=jpg"/>



    </div>
   
    
  
    </div>
  );
}

export default App;
