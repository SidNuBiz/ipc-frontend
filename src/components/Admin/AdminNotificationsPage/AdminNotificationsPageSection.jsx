import React from 'react'
import AdminNotificationList from './AdminNotificationList'
import { notifications, orders } from '../../../data/siteContent.js'
import Loader from "../../../pages/Loader";
import {getAllOrders} from "../../../actions/orderAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment,useState} from "react"

const AdminNotificationsPageSection = () => {
  const dispatch = useDispatch()

  const { orders,loading } = useSelector(
    (state) => state.allOrders
  );

  useEffect(()=>{
    dispatch(getAllOrders())
  },[dispatch])

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

                  <AdminNotificationList notifications={orders} />

              </div>

          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default AdminNotificationsPageSection