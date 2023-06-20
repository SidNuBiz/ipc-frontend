import React from "react";

const Package = ({pkg}) => {
    return (
        <div className="group">
            {/* Image */}

            <div className="h-[400px] w-full overflow-hidden">
                <img
                    src={pkg.img}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-110 duration-500 "
                />
            </div>

            {/* Name */}

            <div className="mt-5 pb-2">
                <h2 className="text-xl text-gray-600">{pkg.name}</h2>
            </div>

            {/* Border */}

            <div className="h-[2px] w-[40px] bg-gray-600"></div>

            {/* Add to cart Button */}

            {/* <div className="mt-5">
                <button onClick={addToCart} className="bg-[#397f77] px-10 py-3 w-full text-white hover:bg-[#18debb] duration-500 lg:opacity-0 md:opacity-0 sm:opacity-100 group-hover:opacity-100">Add to Cart</button>
            </div> */}
        </div>
    );
};

export default Package;
