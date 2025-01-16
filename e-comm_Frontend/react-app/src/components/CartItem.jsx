import React from "react";

const CartItem = ({ product, incrementQuantity, decrementQuantity }) => {
  return (
    <div
      className="flex items-start justify-between border-b border-gray-300 py-4"
    >
      {/* Product Image */}
      <img
        src={product.imageSrc}
        alt={product.name}
        className="w-24 h-24 object-contain"
      />
      {/* Product Details */}
      <div className="flex-1 px-4">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <p className="text-green-600 text-sm">{product.stockStatus}</p>
        <p className="text-sm text-gray-500">Sold by: {product.seller}</p>
        <p className="text-sm text-gray-500">{product.delivery}</p>
        <p className="text-sm text-gray-500">{product.giftOptions}</p>
        <div className="mt-2 flex items-center space-x-2">
          <button
            className="px-2 py-1 border rounded-md hover:bg-gray-100"
            onClick={() => decrementQuantity(product.id)}
          >
            -
          </button>
          <span className="px-4">{product.quantity}</span>
          <button
            className="px-2 py-1 border rounded-md hover:bg-gray-100"
            onClick={() => incrementQuantity(product.id)}
          >
            +
          </button>
        </div>
        <div className="mt-2 flex items-center space-x-2">
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
            Delete
          </button>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
            Save for later
          </button>
          <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
            See more like this
          </button>
        </div>
      </div>
      {/* Product Price */}
      <div className="text-right">
        <p className="text-lg font-bold">
          ₹{(product.price * product.quantity).toFixed(2)}
        </p>
        <p className="text-sm text-gray-500">
          Up to 5% back with Amazon Pay ICICI card
        </p>
      </div>
    </div>
  );
};

export default CartItem;
