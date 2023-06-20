import React from "react";
import { Link } from "react-router-dom";
import { packages } from "../../../data/siteContent";
import Package from "./Package";

const PackageListSection = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {packages.map((item) => (
                    <Link
                        key={item.id}
                        to={{ pathname: `package/${item.id}` }}>
                        <div className="w-full">
                            <Package pkg={item} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PackageListSection;
