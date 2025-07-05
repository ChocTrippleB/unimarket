import React from 'react'
import Slider from "./slider.jsx";

const Hero = () => {
    return (
        <div>
            <div className="bg-[url(./campus.jpg)] w-full h-[50vh] bg-center bg-cover">

            </div>
            <h2 className="text-3xl flex-wrap mt-4 font-bold font-[Montserrat]">Get What You Need. Ditch What You Don’t.</h2>
            <button className='text-white mt-2'>Sell now</button>
            <Slider/>
            <span className="mt-16">Hello</span>
        </div>
    )
}
export default Hero
