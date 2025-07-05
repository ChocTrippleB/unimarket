import React from 'react'
import {ShoppingBagIcon, TrashIcon} from "@heroicons/react/16/solid/index.js";

const CartCard = () => {
    return (
        <div className="px-4 font-[Montserrat] bg-[fff] py-4 mx-4 mt-6  shadow-xl bg-[#f9f9f9] rounded-md">
            <div>
                <div className="flex mb-2">
                    <div className=" flex items-center">
                        <img src="./pexels.jpg"
                             className="w-10 h-10 object-cover rounded-full"
                        />
                    </div>
                    <div className="px-2 py-2 items-center">
                        <p className="font-bold text-md leading-4">Bantu-Bethu Beya</p>
                        <p className="font-light">@bantubeya</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-between">
                <div className="flex mb-6 md:2/3 lg:w-3/2">
                    <img
                        src="./pexels.jpg"
                        className="w-35 h-35 object-cover"
                    />
                    <div className="mx-8">
                        <p className="bg-blue-200 mb-1 flex text-[#111] gap-1 px-2 w-40 md:w-38 lg:w-43 text-[.8rem] md:text-xs lg:text-sm rounded-xl p-1">
                            <ShoppingBagIcon className="size-4.5 text-blue-800"/>
                            In 10 people's bags
                        </p>
                        <p className="text-[.94rem] md:text-[1rem] lg:text-[.95rem]">Baby blue Nike Dunk Low trainers #sneakers</p>
                        <p className="font-[700] mt-8">R 80.00</p>
                        <TrashIcon className="size-5.5 mt-4 light text-dark-100"/>
                    </div>
                </div>
                <div className="w-full md:1/3 lg:2/3">
                    <div className="flex font-[Montserrat] w-full justify-between py-1.5">
                        <p>Item(s)</p>
                        <p>R80.00</p>
                    </div>

                    <hr className="text-gray-300"/>
                    <div className="flex font-[Montserrat] w-full justify-between py-1.5">
                        <p>Sales tax</p>
                        <p>R3.00</p>
                    </div>

                    <hr className="text-gray-300"/>
                    <div className="flex w-full justify-between py-2.5">
                        <p className="text-sm font-[Montserrat] font-[300]">Shipping calculated at checkout</p>
                    </div>
                    <div className="flex w-full justify-between py-2.5">
                        <p className="font-[700] font-[Montserrat]">Total</p>
                        <p className="font-bold">R83.00</p>
                    </div>

                        <button className="text-gray-100 w-full font-[800] p-2 px-14 text-[0.9rem]">Checkout 1 item</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
    )
}
export default CartCard
