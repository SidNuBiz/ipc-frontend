import React from 'react'

import { Link } from 'react-router-dom'

const AdminNotificationList = ({notifications}) => {

  return (

    <div>

        {/* List */}

        {

            notifications.map((notification, index) => (

                <div key={index} className={"mb-5 shadow-lg rounded-2xl " + (notification.read ? " bg-gray-100" : "bg-white")}>
                    
                    <div className="p-3 grid grid-cols-8 gap-5 ">

                        <div className='h-fit my-auto lg:col-span-1 md:col-span-8 sm:col-span-8 text-center'>

                            <h3 className="text-md font-semibold text-white px-3 py-2 bg-[#397f77] w-fit rounded-full">{notification.title}</h3>

                        </div>

                        <div className=' h-fit my-auto lg:col-span-4 md:col-span-6 sm:col-span-8'>

                            <h2 className=' text-lg text-gray-600' >{notification.message}</h2>

                        </div>

                        <div className='w-full lg:col-span-3 md:col-span-2 sm:col-span-8'>

                            {/* Date */}

                            <p className='lg:block md:block sm:inline-block align-middle w-fit lg:ml-auto ml-auto mr-0 text-gray-400' >{`${notification.date.month}/${notification.date.day}/${notification.date.year}`}</p>

                            {/* View Details Button */}

                            <div className="lg:block md:block sm:inline-block align-middle lg:mt-3 md:mt-3 sm:ml-5 w-fit lg:ml-auto md:ml-auto mr-0">
                                <Link to={notification.link} className="">
                                    <button className=" text-[#397f77] text-md font-bold hover:underline">View Details &#8594;</button>
                                </Link>
                            </div>

                        </div>

                    </div>


                </div>

            ))

        }

    </div>

  )
}

export default AdminNotificationList