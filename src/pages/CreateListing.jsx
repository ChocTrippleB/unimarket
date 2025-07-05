import React from 'react'
import Navbar from "../components/Navbar.jsx";
import CartCard from "../components/CartCard.jsx";
import ListingForm from "../components/ListingForm.jsx";

const CreateListing = () => {
    return (
        <div>
            <Navbar/>
            <div className="max-w-3xl mx-auto">
                <h3 className="mt-10 mx-4 md:mx-6 lg:mx-6 font-black text-3xl">Create Listing</h3>
                <div className="mt-10 mx-4 md:mx-6 lg:mx-6 ">
                    <ListingForm/>
                </div>

            </div>
        </div>
    )
}
export default CreateListing
