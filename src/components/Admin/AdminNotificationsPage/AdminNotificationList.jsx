import React from 'react'

import { Link } from 'react-router-dom'

const AdminNotificationList = ({notifications}) => {
    console.log(notifications)

  return (

    <div>

        {/* List */}

        {

            notifications && notifications.filter(notification => new Date(notification.created).getDate() === new Date().getDate() &&  new Date(notification.created).getMonth() === new Date().getMonth() && new Date(notification.created).getFullYear() === new Date().getFullYear()).map((notification, index) => (

                <div key={index} className={"mb-5 shadow-lg rounded-2xl w-fit border-[1px] border-gray-200 " + (false ? " bg-gray-100" : "bg-white")}>
                    
                    <div className="px-3">

                        <div className='py-3 inline-block mr-5 align-middle text-center lg:mb-0 md:mb-0 sm:mb-3'>

                            <h3 className="text-md font-semibold text-white px-3 py-2 bg-[#397f77] w-fit rounded-full">New Order</h3>

                        </div>

                        <div className='py-3 inline-block mr-5 align-middle max-w-[300px] lg:mb-0 md:mb-0 sm:mb-3'>

                            <h2 className=' text-lg text-gray-600' > You have new order from {notification.firstname} {notification.lastname}</h2>

                        </div>

                        <div className='py-3 inline-block align-middle mr-5'>

                            {/* Date */}

                            <p className='lg:block md:block sm:inline-block align-middle w-fit lg:ml-auto ml-auto mr-0 text-gray-400' >{`${new Date(notification.created).getDate()}-${new Date(notification.created).getMonth()+1}-${new Date(notification.created).getFullYear()}`}</p>

                            

                        </div>

                        {/* View Details Button */}

                        <div className="py-3 inline-block align-middle w-fit">
                            <Link to={`/IPC-admin-portal/orders/${index}`} className="">
                                <button className=" text-[#397f77] text-md font-bold hover:underline">View Details &#8594;</button>
                            </Link>
                        </div>

                    </div>


                </div>

            ))

        }

    </div>

  )
}

export default AdminNotificationList