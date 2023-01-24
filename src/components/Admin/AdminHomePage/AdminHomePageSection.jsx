// import { useState } from "react";
import LineChart from "./LineChart";
import { orders } from "../../../data/siteContent";


const AdminHomePageSection = () => {


  return (

    <div>

        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Overview</h2>
        </div>

        {/* Orders Chart */}

        <div className="mb-10">
            <LineChart  />
        </div>

        {/* Status boxes */}

        <div className=" grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">

            {/* Total Orders */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Orders</h2>

                <h2 className="text-4xl text-[#397f77]">{orders.length}</h2>

            </div>

            {/* Total Sales */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Sales</h2>

                <h2 className="text-4xl text-[#397f77]">C$35500</h2>

            </div>

            {/* Total Services */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Services</h2>

                <h2 className="text-4xl text-[#397f77]">8</h2>

            </div>

            {/* Total Members */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Members</h2>

                <h2 className="text-4xl text-[#397f77]">100</h2>

            </div>

        </div>

    </div>

  );

}

export default AdminHomePageSection