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

        </div>
    );
};

export default Package;
