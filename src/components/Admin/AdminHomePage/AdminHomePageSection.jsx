// import { useState } from "react";
import LineChart from "./LineChart";
import { Link } from "react-router-dom";
import AdminServiceList from "../AdminServicesPage/AdminServiceList";
import { useState, useEffect } from "react";
import AdminOrderList from "../AdminOrdersPage/AdminOrderList";
import axios from "axios";
import Cookies from "js-cookie";
import url from "../../../utils/baseApi";

import { useSelector, useDispatch } from "react-redux";
import {getAllOrders} from "../../../actions/orderAction.js"
import { getAllService } from "../../../actions/serviceAction.js";



const AdminHomePageSection = () => {

    const dispatch = useDispatch()

    const[totalSale,setTotalSale] = useState(0)
    const[totalOrder,setTotalOrder] = useState(0)
    const[totalUser,setTotalUser] = useState(0)

    const[serviceSearchKey,setSearchKey] = useState('');

    const[orderSearchKey,setOrderSearchKey] = useState('');

    const {services} = useSelector(
        (state) => state.services
    );

    const { users } = useSelector(
        (state) => state.allUsers
    );

    async function totalSalesAndOrders(){
        try {

            const token = Cookies.get('token')
            const config = {
              headers: {
                'Authorization': `Bearer ${token}` 
              },
            };
          
            const { data } = await axios.get(`${url}/api/v1/admin/orders/total-sales`,config);
            setTotalSale(data.totalSales)
            setTotalOrder(data.totalOrders)


          }catch (error) {
            console.log(error.response.data.error)
          }
    }

    async function totalUsers(){
        try {

            const token = Cookies.get('token')
            const config = {
              headers: {
                'Authorization': `Bearer ${token}` 
              },
            };
          
            const { data } = await axios.get(`${url}/api/v1/users/total`,config);
            setTotalUser(data.totalUsers)  


          }catch (error) {
            console.log(error.response.data.error)
          }
    }

    useEffect(()=>{
        totalSalesAndOrders()
        totalUsers()
        dispatch(getAllOrders(1))
        dispatch(getAllService())

    },[dispatch])


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

                <h2 className="text-4xl text-[#397f77]">{totalOrder}</h2>

            </div>

            {/* Total Sales */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Sales</h2>

                {/* <h2 className="text-4xl text-[#397f77]">C${orders && orders.map(order =>(totalSale = totalSale + (+order.totalPrice)) )}</h2> */}
                <h2 className="text-4xl text-[#397f77]">C${totalSale.toFixed(2)}</h2>

            </div>

            {/* Total Services */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Services</h2>

                <h2 className="text-4xl text-[#397f77]">{services && services.length}</h2>

            </div>

            {/* Total Members */}

            <div className="col-span-1 bg-white rounded-xl shadow-lg p-10 border-l-8 border-l-[#18debb]">

                <h2 className="text-xl text-gray-600 mb-5">Total Members</h2>

                <h2 className="text-4xl text-[#397f77]">{totalUser}</h2>

            </div>

        </div>


        {/* Orders Chart and Notification List */}

        <div className="grid lg:grid-cols-2 gap-10 mb-10 w-full">

            {/* Orders Chart */}

            <div className=" min-w-[250px] h-full">
                {/* <LineChart  /> */}
            </div>

            {/* Notification List */}

            {/* <div className="p-5 bg-white rounded-xl shadow-lg ">
              

                <div className="flex justify-between mb-10">

                    <h2 className="inline-block align-middle w-fit text-2xl font-semibold text-gray-600">Notifications</h2>

             

                    <Link to="/IPC-admin-portal/notifications">

                        <button className="inline-block align-middle w-fit text-[#397f77] text-md font-bold hover:underline">See all</button>

                    </Link>  

                </div>

                <div className=" min-h-[200px] max-h-[300px] overflow-y-auto w-full">
                    <AdminNotificationList notifications={orders} />
                </div>

                
            </div> */}

        </div>

        {/* Order List */}

        <div className="mb-10 p-5 bg-white rounded-xl shadow-lg ">

            {/* Heading */}

            <div className="flex justify-between mb-10">

                <h2 className="inline-block align-middle w-fit text-2xl font-semibold text-gray-600">Orders</h2>

                {/* See all Button */}

                <Link to="/IPC-admin-portal/orders">

                    <button className="inline-block align-middle w-fit text-[#397f77] text-md font-bold hover:underline">See all</button>

                </Link>

            </div>

            {/* Service List */}

            <div className="min-h-[200px] max-h-[300px] overflow-y-auto w-full">
                <AdminOrderList searchKey = {orderSearchKey} />
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
                <AdminServiceList searchKey = {serviceSearchKey} />
            </div>

        </div>


    </div>

  );

}

export default AdminHomePageSection