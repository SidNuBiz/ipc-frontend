import React, { useEffect, useState } from 'react'
import AdminNotificationList from './AdminNotificationList'
import Loader from "../../../pages/Loader";
import {Fragment} from "react"
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import url from '../../../utils/baseApi';

const AdminNotificationsPageSection = () => {

  const [notifications, setNotifications] = useState([])

  const { loading, user } = useSelector(
    (state) => state.user
  );

  async function fetchNotifications() {
    if(loading) return
    const data = await axios.post(`${url}/api/v1/notification`,{id:user._id})
    await axios.patch(`${url}/api/v1/notification/all`,{id:user._id})
    setNotifications(data.data.notifications)
  }

  useEffect(() => {
    fetchNotifications()
  }, [loading])

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>
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
        </Fragment>
      )}
    </Fragment>
  )
}

export default AdminNotificationsPageSection