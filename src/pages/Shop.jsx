import React, { useEffect, useState } from 'react';
import { getAllItems } from '../services/Itemapi.js';
import {Link, useSearchParams} from "react-router-dom";
import api from "../services/api.js";
import Navbar from "../components/Navbar.jsx";

function Shop() {
    const [items, setItems] = useState([]);
    const [searchParams] = useSearchParams();
    const [category, setCategory] = useState("");
    const [condition, setCondition] = useState("");
    const [loading, setLoading] = useState(true);
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        getAllItems()
            .then(res => setItems(res.data))
            .catch(err => console.error('Failed to fetch items:', err));
    }, []);

    const fetchItems = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/items`, {
                params: {
                    searchQuery,
                    category,
                    condition,
                },
            });
            setItems(res.data);
        } catch (err) {
            console.error("Error fetching items:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    }, [searchQuery, category, condition]);

    return(
        <div className="">
            <Navbar />
            <div className="p-4">

                {/* Filters */}
                <div className="mb-6 flex gap-4 flex-wrap">
                    <select
                        onChange={(e) => setCategory(e.target.value)}
                        className="border text-sm/6 p-2 rounded"
                    >
                        <option value="">Category</option>
                        <option value="Tech">Tech</option>
                        <option value="Books">Books</option>
                        <option value="Gadgets">Gadgets</option>
                        <option value="Men">Men</option>
                        <option value="Ladies">Ladies</option>
                    </select>

                    <select
                        onChange={(e) => setCondition(e.target.value)}
                        className="border text-sm/6 p-2 rounded"
                    >
                        <option value="">Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                    </select>
                </div>

                {/* Item Grid */}
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {items.map((item) => (
                            <Link
                                to={`/product/${item.id}`}
                                key={item.id}
                                className="border rounded p-3 shadow hover:shadow-md transition duration-150" >
                                <div className="h-40 overflow-hidden flex items-center justify-center mb-2">
                                    <img
                                        src={item.images.length > 0 ? item.images[0].url : "/adidas-yeezy.png"}
                                        alt={item.name}
                                        className="w-full h-48 object-cover rounded"
                                    />
                                </div>
                                <h2 className="font-semibold text-md truncate">{item.name}</h2>
                                <p className="text-sm text-gray-600 line-clamp-2">
                                    {item.description}
                                </p>
                                <p className="font-bold mt-2 text-[#ce1750]">R{item.price}</p>
                                <p className="text-xs text-gray-500">{item.condition}</p>

                            </Link>
                        ))}
                    </div>
                ) : items.length === 0 ? (
                    <p>No items found.</p>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded p-3 shadow hover:shadow-md"
                            >
                                <h2 className="font-semibold text-lg">{item.name}</h2>
                                <p className="text-sm text-gray-600">{item.description}</p>
                                <p className="font-bold mt-2 text-[#ce1750]">R{item.price}</p>
                                <p className="text-xs text-gray-500">{item.condition}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Shop;