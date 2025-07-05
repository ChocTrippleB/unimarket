import React from 'react'
import "../App.css"
import "../index.css"
import {cartItems} from "../data.js";
import Navbar from "../components/Navbar.jsx";
import CartCard from "../components/CartCard.jsx";


const Cart = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-6xl mx-auto">
                <h3 className="mt-10 mx-6 md:mx-6 lg:mx-6 font-bold text-3xl">Bag</h3>
                <div>
                    {cartItems.map(item => (
                        <CartCard key={item.id} item={item}/>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Cart
