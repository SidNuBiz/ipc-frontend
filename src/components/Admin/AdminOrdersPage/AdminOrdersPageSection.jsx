import React from 'react'
import AdminOrderList from './AdminOrderList'
import { orders } from '../../../data/siteContent'
import Loader from "../../../pages/Loader";
import {getAllOrders} from "../../../actions/orderAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment,useState} from "react"

const AdminOrdersPageSection = () => {

  const dispatch = useDispatch()

  const[searchKey,setSearchKey] = useState('')

  const { loading } = useSelector(
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
              <h2 className=" text-4xl font-semibold text-gray-600">Orders</h2>
            </div>

            {/* search & create services */}

            <div className=" mb-10">

              {/* Search Box */}

              <div className="">

                <input type="text" placeholder="Search Orders" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>

              </div>

            </div>

            {/* Services */}

            <div className="">
              <AdminOrderList  searchKey = {searchKey} />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>


  )
}

export default AdminOrdersPageSection