import React from 'react'
import AdminNotificationList from './AdminNotificationList'
import { notifications } from '../../../data/siteContent.js'

const AdminNotificationsPageSection = () => {
  return (
    <div>

        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Notifications</h2>
        </div>

        {/* Notifications */}

        <div>

            <AdminNotificationList notifications={notifications} />

        </div>

    </div>
  )
}

export default AdminNotificationsPageSection