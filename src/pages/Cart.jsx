import React from 'react'
import "../App.css"
import "../index.css"
import Navbar from "../components/Navbar.jsx";
import CartCard from "../components/CartCard.jsx";


const Cart = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <h3 className="mt-10 mx-4 font-bold text-3xl">Bag</h3>
                <CartCard/>
            </div>
        </div>
    )
}
export default Cart
