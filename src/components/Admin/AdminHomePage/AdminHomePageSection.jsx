// import { useState } from "react";
import LineChart from "./LineChart";
import { orders } from "../../../data/siteContent";
import { notifications } from "../../../data/siteContent";
import AdminNotificationList from "../AdminNotificationsPage/AdminNotificationList";
import { Link } from "react-router-dom";
import AdminServiceList from "../AdminServicesPage/AdminServiceList";
import { useState } from "react";


const AdminHomePageSection = () => {

    const[searchKey,setSearchKey] = useState('')


  return (

    <div>

        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Overview</h2>
        </div>


        {/* Status boxes */}

        <div className="mb-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">

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


        {/* Orders Chart and Notification List */}

        <div className="grid lg:grid-cols-2 gap-10 mb-10 w-full">

            {/* Orders Chart */}

            <div className=" min-w-[250px] h-full">
                <LineChart  />
            </div>

            {/* Notification List */}

            <div className="p-5 bg-white rounded-xl shadow-lg ">
                {/* Heading */}

                <div className="flex justify-between mb-10">

                    <h2 className="inline-block align-middle w-fit text-2xl font-semibold text-gray-600">Notifications</h2>

                    {/* See all Button */}

                    <Link to="/IPC-admin-portal/notifications">

                        <button className="inline-block align-middle w-fit text-[#397f77] text-md font-bold hover:underline">See all</button>

                    </Link>  

                </div>

                <div className=" min-h-[200px] max-h-[300px] overflow-y-auto w-full">
                    <AdminNotificationList notifications={notifications} />
                </div>

                
            </div>

        </div>

        {/* Service List */}

        <div className="p-5 bg-white rounded-xl shadow-lg ">

            {/* Heading */}

            <div className="flex justify-between mb-10">

                <h2 className="inline-block align-middle w-fit text-2xl font-semibold text-gray-600">Services</h2>

                {/* See all Button */}

                <Link to="/IPC-admin-portal/services">

                    <button className="inline-block align-middle w-fit text-[#397f77] text-md font-bold hover:underline">See all</button>

                </Link>

            </div>

            {/* Service List */}

            <div className="min-h-[200px] max-h-[300px] overflow-y-auto w-full">
                <AdminServiceList searchKey = {searchKey} />
            </div>

        </div>


    </div>

  );

}

export default AdminHomePageSection