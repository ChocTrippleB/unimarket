import React from 'react'

const Slider = () => {
    return (
        <div className="max-w-6xl my-16 mx-auto">
            <div className="justify-space-between mt-6 bg-gray-200 flex flex-wrap md:flex-wrap">
                <div className="w-[45%] content-center text-justify items-start px-8">
                    <h3 className="font-bold text-lg">Become a B-Store Campus Manager</h3>
                    <p className="py-1 text-md">Represent B.Store on Campus - apply today!</p>
                    <button className="mt-4 bg-[#111] text-xs font-semibold text-white p-2 rounded justify-center">Sell now
                    </button>
                </div>
                <div className="w-[55%] bg-[url(./pexels.jpg)] bg-center bg-cover">
                    <div className="h-full p-[10rem]">

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Slider
