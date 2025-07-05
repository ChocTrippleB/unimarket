import React from 'react'
import {Link} from "react-router-dom";
import navItems from "../data.js";

const Navbar = () => {
    return (
        <div className="shadow-sm py-1">
            <div className="my-1 py-1.5 flex justify-between">
                <div className="flex mx-2 gap-2">
                    <img
                        src="./vite.svg"
                        width="25rem"
                    />
                    <p className="text-lg text-[#111] font-semibold">ByteForge</p>
                </div>
                <ul className="flex text-lg gap-3 font-semibold py-1 navitems">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </div>
            <hr className="text-gray-300"/>
            <div className="mx-6 hidden md:block lg:block">
                <ul className="flex gap-10 catnav py-3.5">
                    <li className="font-bold"><Link to="/">Tech</Link></li>
                    <li className="font-bold"><Link to="/cart">Books</Link></li>
                    <li className="font-bold"><Link to="/">Gadgets</Link></li>
                    <li className="font-bold"><Link to="/cart">Men</Link></li>
                    <li className="font-bold"><Link to="/">Ladies</Link></li>
                </ul>
            </div>
        </div>

    )
}
export default Navbar
