import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant';
import About from './pages/About/About';
import Hotel from './pages/Hotel/Hotel';
import Menu from './pages/Menu/Menu';
// import RestaurantIntro from './pages/Home/RestaurantIntro/RestaurantIntro';


function App() {
  return (
    <div >
      < Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/restaurant" element={<Restaurant />}/>
        <Route path="/menu" element={<Menu />}/>
        {/* <Route path="/hotel" element={<Home />}/> */}
        {/* <Route path="/hotel" element={<Hotel />}/> */}
        <Route path="/about" element={<About />}/>
      </Routes>
      < Footer />
    </div>
  );
}

export default App;
