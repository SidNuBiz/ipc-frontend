import React from 'react'
import AdminOrderList from './AdminOrderList'
import { orders } from '../../../data/siteContent'

const AdminOrdersPageSection = () => {
  return (
    <div>

        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
                <h2 className=" text-4xl font-semibold text-gray-600">Orders</h2>
            </div>

            {/* search & create services */}

            <div className=" mb-20">

              {/* Search Box */}

              <div className="">

                <input type="text" placeholder="Search Orders" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" />

              </div>

            </div>

            {/* Services */}

            <div className="">
              <AdminOrderList orders = {orders} />
            </div>

    </div>
  )
}

export default AdminOrdersPageSection