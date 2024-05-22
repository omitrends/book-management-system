import React, { useEffect, useState } from 'react';
import Book from './components/Book';
import AddBook from './components/AddBook';
import useFetch from './useFetch';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Categories.jsx';
import Supplier from './components/Suppliers.jsx';
import Home from './home.js';


function App() {


   

    return (

        <div id="main-container">
            <Navbar></Navbar>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Categories' element={<Categories/> }/>
                <Route path='/Suppliers' element={<Supplier/> }/>
                
            </Routes>


        </div>
    );
}

export default App;
