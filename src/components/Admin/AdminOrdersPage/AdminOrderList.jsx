import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"

const AdminOrderList = ({searchKey}) => {

    const { orders } = useSelector(
        (state) => state.allOrders
    );


    console.log(new Date().getMonth())

  return (
    <div>

      {/* Order List */}

      <div className="w-full mb-10">
                {/* Order 1 */}

                <ul>
                    {orders && orders.filter( order => order._id.toLowerCase().includes(searchKey.toLowerCase())).map((order, index) => (
                        <li
                            key={index}
                            className="text-gray-600 border-b-[1px] border-b-gray-200 py-5"
                        >
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

                                {/* OrderId */}

                                <div className="mb-3 px-5">

                                    <div className="">
                                        <b>Order ID</b> <br />
                                        {order._id}
                                    </div>

                                </div>

                                {/* Order Date */}

                                <div className=" italic px-5">
                                    <b className=" not-italic">Date</b> <br />
                                    {`${new Date(order.created).getDate()}-${new Date(order.created).getMonth()+1}-${new Date(order.created).getFullYear()}`}
                                </div>

                                {/* Order Status */}

                                <div className=" px-5">
                                    <div className="mb-3">
                                        <b>Status</b> <br />
                                        {order.status}
                                    </div>
                                </div>

                                {/* Order Total */}

                                <div className="text-left px-5">
                                    <div className="mb-3">
                                        <b>Total</b> <br />
                                        C${order.totalPrice}
                                    </div>
                                </div>
                            </div>

                            {/* View Details Button */}

                            <div className="w-fit mt-3 ml-auto">
                                <Link to={`/IPC-admin-portal/orders/${index}`} className="inline-block">
                                    <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

    </div>
  )
}

export default AdminOrderList