import React from 'react'
import Navbar from "../components/Navbar.jsx";
import {ChatBubbleBottomCenterTextIcon, ShoppingBagIcon} from "@heroicons/react/16/solid/index.js";

const ProductDetail = () => {
    return (
        <div className="">
            <Navbar/>
            <p className="mx-4 font-[Montserrat] mt-2">Breadcrumbs</p>
            <div className="flex max-w-6xl mx-auto">
                <div className="w-1/2 ">
                    <img
                        src="./blue-low-nike.png"
                        alt="Product"
                        className="w-180 h-150 object-cover"
                    />
                </div>
                <div className="w-2/5 ml-10 font-[Montserrat]">
                    <div className="flex gap-2">
                        <p className="bg-blue-200 mb-1 flex text-[#111] gap-1 px-2 w-40 md:w-38 lg:w-43 text-[.8rem] md:text-xs lg:text-sm rounded-xl p-1">
                            <ShoppingBagIcon className="size-4.5 text-blue-800"/>
                            In 10 people's bags
                        </p>
                        <p className="bg-blue-200 mb-1 flex text-[#111] gap-1 px-2 w-40 md:w-38 lg:w-43 text-[.8rem] md:text-xs lg:text-sm rounded-xl p-1">
                            <ChatBubbleBottomCenterTextIcon className="size-4.5 text-blue-800"/>
                            In 10 people's bags
                        </p>
                    </div>
                    <h3 className="text-xl mt-4 font-[500]">Nike Women's Blue and White Trainers</h3>
                    <p className="text-lg font-[700] mt-2">R600.00</p>
                    <p className="text-xs font-[500] mt-1">Tax Included</p>
                    <div className="flex gap-1 mt-1 font-[700] text-gray-500">
                        <p>Size 5</p>
                        <span>•</span>
                        <p>Excellent Condition</p>
                        <span>•</span>
                        <p>Nike</p>
                    </div>
                    <button className="p-3 text-md/6 mt-4 w-full font-[700] text-white">Buy now</button>
                    <button className="p-3 text-md/6 mt-2 w-full font-[700] text-white">Add to cart</button>
                    <hr className="text-gray-400 mt-4"/>
                    <div className="w-full">
                        <div className="flex mt-6">
                            <img
                                src="./blue-low-nike.png"
                                className="w-15 h-15 rounded-full object-cover"
                            />
                            <div className="px-4 font-[Montserrat]">
                                <p className="text-md/2 leading-3 pt-4 font-[600]">5c3_carolin3</p>
                                <p className="text-sm/6 font-[400]">Active 2m ago</p>
                            </div>

                        </div>
                        <div className="flex w-full mt-6">
                            <button>Talk to seller</button>
                            <button>View seller</button>
                        </div>
                    </div>
                    <hr className="text-gray-400 mt-4"/>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail
