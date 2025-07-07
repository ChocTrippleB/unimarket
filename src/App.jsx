import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import "./App.css"
import CreateListing from "./pages/CreateListing.jsx";
import ItemDetails from "./pages/ItemDetails.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/create" element={<CreateListing/>} />
            <Route path="/details" element={<ItemDetails/>} />
        </Routes>
    );
}

export default App;