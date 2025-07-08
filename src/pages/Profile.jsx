import React from 'react'
import Navbar from "../components/Navbar.jsx";


const Profile = () => {
    return (
        <div>
            <Navbar/>
            <div className="font-[Montserrat] max-w-3xl mx-auto ">
                <div className="mx-6 text-sm">
                    <div className="flex mt-12 mb-1">
                        <div className=" flex items-center">
                            <img src="./adidas-yeezy.png"
                                 className="w-12 h-12 sm:w-12 sm:h-12 md:w-25 md:h-25 lg:w-25 lg:h-25 object-cover rounded-full"
                                 alt="profile"
                            />
                        </div>
                        <div className="px-2 my-auto items-center">
                            <p className="font-bold text-xs md:text-lg lg:text-md leading-4">seller_name</p>
                            <p className="font-light text-xs md:text-lg/6 lg:text-sm">username</p>
                            <p className="flex gap-3 text-xs">⭐⭐⭐⭐⭐ <span> 0</span></p>
                        </div>
                    </div>
                    <div className="my-5 items-center">
                        <p className="text-gray-400">Bio: Hello world! </p>
                    </div>
                </div>
                <div className="mx-6">
                    <div className="flex mt-4 text-sm gap-6 mb-1">
                        <p>Followers 0</p>
                        <p>Following 0</p>
                    </div>
                    <div className="flex mt-8 gap-4 text-sm">
                        <h4>Listings</h4>
                        <h4>Saved</h4>
                        <h4>Reviews</h4>
                    </div>
                    <hr className="text-gray-300 mt-1"/>
                </div>
            </div>
        </div>
    )
            }
            export default Profile
