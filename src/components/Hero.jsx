import React from 'react'
import Slider from "./slider.jsx";

const Hero = () => {
    return (
        <div>
            <div className="bg-[url(./pexels.jpg)] w-full lg:h-[50vh] bg-center bg-cover sm:h-[35vh] md:h-[30vh]" >

            </div>
            <h2 className="text-4xl text-center flex-wrap mt-4 font-black font-[Montserrat]">Get What You Need. Ditch What You Don’t.</h2>
            <button className='text-white text-center mt-2'>Sell now</button>
            <Slider/>
            <span className="mt-16"></span>
        </div>
    )
}
export default Hero
