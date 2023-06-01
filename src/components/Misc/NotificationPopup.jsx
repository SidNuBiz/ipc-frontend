import React, { useEffect, useState } from 'react'

const NotificationPopup = ({notification}) => {

    // const notification = {trigger:false,notificationMessage:""}

    const [message, setMessage] = useState('');

    // let message = "";

    const [notificationPopupOpen, setNotificationPopupOpen] = useState(false);

    const triggerNotificationPopup = () => {

        setMessage(notification.notificationMessage);

        setNotificationPopupOpen(true);

        setTimeout(() => {

            setNotificationPopupOpen(false);

        }, 3000);


    }

    if (notification) {

        triggerNotificationPopup();

    }

    // useEffect(() => {

    //     triggerNotificationPopup();

    // }, []);

  return (

    <div className={"duration-300 " + (notificationPopupOpen ? " translate-x-0 " : " translate-x-96 ")} >

        <div className='absolute z-50 w-72 left-auto right-5 top-32 bg-[#18debb] p-3 rounded-xl'>

            <div className='grid grid-cols-12'>

                {/* Notification Message */}

                <div className='block col-span-11 text-white text-xl border-r-[2px] border-r-white'>{message}</div>

                {/* Close Button */}

                <div className='block col-span-1 text-white text-2xl h-fit my-auto px-2'>

                    <button type='button' onClick={() => setNotificationPopupOpen(false)} className=''>X</button>

                </div>

            </div>

        </div>

    </div>

  )
}


export default NotificationPopup;