
import './App.css';
import Header from './components/Header';
import SearchProducts from './components/main/SearchProducts';
import Offers from './components/main/Offers';
import MainSidebar from './components/main/MainSidebar';
import Footer from './components/main/Footer';
import CartComp from './components/main/CartComp';
import FilterContainer from './components/main/FilterContainer';
import { useState } from 'react';

function App() {


  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
        <SearchProducts />
        <div style={{padding:"1rem"}}>
           <Offers />
        </div>
        <div className='filtercontainer-main-div' >
          <FilterContainer />
        </div>
        <MainSidebar />
        <Footer />
      </div>
      <CartComp />
    </>

  );
}

export default App;
