import React from 'react'
import Slider from "./slider.jsx";

const Hero = () => {
    return (
        <div>
            <div className="bg-[url(./pexels.jpg)] w-full  bg-center bg-cover h-[50vh] md:h-[60vh] lg:h-[80vh]" >

            </div>
            <h2 className="text-4xl text-center flex-wrap mt-4 font-black font-[Montserrat]">Get What You Need. Ditch What You Don’t.</h2>
            <button className='text-white text-center mt-2'>Sell now</button>
            <Slider/>
            <span className="mt-16"></span>
        </div>
    )
}
export default Hero
