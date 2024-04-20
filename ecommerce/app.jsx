import React from 'react';
import Home from './components/home';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Cart from './components/cart';

const App = () => {
    return (
        <div className='container-fluid-lg'>
          
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
            <Toaster/>
        </div>
    );
}

export default App;
