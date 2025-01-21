import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Navbar";
import QuickLinks from "./QuickLinks";
import { changeQuantity, removeItem } from "../slices/CartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const incrementQuantity = (productId) => {
        dispatch(changeQuantity({ id: productId, increment: 1 }));
    };

    const decrementQuantity = (productId) => {
        dispatch(changeQuantity({ id: productId, increment: -1 }));
    };

    const handleRemoveItem = (productId) => {
        dispatch(removeItem({ id: productId }));
    };

    const calculateSubtotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    if (items.length === 0) {
        return (
            <div>
                <Navbar />
                <QuickLinks />
                <div className="text-center p-10">
                    <h2 className="text-2xl font-semibold">Your Cart is Empty</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <QuickLinks />
            <div className="min-h-screen bg-gray-100 p-4">
                <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                        {/* Product column */}
                        <div className="col-span-2">
                            <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
                            <div className="border-b border-gray-300 pb-2 mb-4">
                                <button className="text-blue-500 text-sm">Deselect all items</button>
                            </div>
                            {items.map((item) => (
                                <div
                                    key={item._id}
                                    className="flex border-b border-gray-300 pb-4 mb-4"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="ml-4 flex-1">
                                        <h3 className="font-bold text-lg">{item.title}</h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description.length > 100
                                                ? `${item.description.substring(0, 100)}...`
                                                : item.description}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Category: {item.category}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Rating: {item.rating.rate} ({item.rating.count} reviews)
                                        </p>
                                        <p className="font-bold text-lg mt-2">₹{item.price}</p>
                                        <div className="mt-2 flex items-center space-x-4">
                                            <button
                                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                                                onClick={() => decrementQuantity(item._id)}
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                                                onClick={() => incrementQuantity(item._id)}
                                            >
                                                +
                                            </button>
                                            <button
                                                className="px-4 py-2 bg-red-500 text-white rounded-md"
                                                onClick={() => handleRemoveItem(item._id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order summary */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">
                                Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items):
                            </h2>
                            <p className="text-xl font-bold mb-4">₹{calculateSubtotal().toFixed(2)}</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-md">
                                Proceed to Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
