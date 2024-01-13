import React from 'react'

const AdminNotificationList = ({notifications}) => {


  return (

    <div>

        {/* List */}

        {

            notifications && notifications.slice(0).reverse().map((notification, index) => (

                <div key={index} className={"mb-5 shadow-lg rounded-2xl w-full border-[1px] border-gray-200 " + (!notification.read ? " bg-gray-100" : "bg-white")}>
                    
                    <div className="px-3">

                        <div className='py-3 inline-block mr-5 align-middle text-center lg:mb-0 md:mb-0 sm:mb-3'>

                            <h3 className="text-md font-semibold text-white px-3 py-2 bg-[#397f77] w-fit rounded-full">{notification.title}</h3>

                        </div>

                        <div className='py-3 inline-block mr-5 align-middle max-w-[750px] lg:mb-0 md:mb-0 sm:mb-3'>

                            <h2 className=' text-lg text-gray-600' > {notification.text}</h2>

                        </div>

                        <div className='py-3 inline-block align-middle mr-5'>

                            <p className='lg:block md:block sm:inline-block align-middle w-fit lg:ml-auto ml-auto mr-0 text-gray-400' >{`${new Date(notification.createdAt).getDate()}-${new Date(notification.createdAt).getMonth()+1}-${new Date(notification.createdAt).getFullYear()}`}</p>

                        </div>

                    </div>


                </div>

            ))

        }

    </div>

  )
}

export default AdminNotificationList