import React from 'react'
import "../index.css"
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="max-w-6xl mx-auto">
                <div>
                    <h2 className="text-start px-2">Shop by Price</h2>

                </div>
            </section>
        </div>
    )
}
export default Home
