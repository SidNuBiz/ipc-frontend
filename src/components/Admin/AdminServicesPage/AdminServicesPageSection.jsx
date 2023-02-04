import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminServiceList from "./AdminServiceList"
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/productAction";
import Loader from "../../../pages/Loader";


const AdminServicesSection = () => {
  const dispatch = useDispatch()


  const {products,loading} = useSelector(
    (state) => state.products
  );
  const {loading:newProductLoading} = useSelector(
    (state) => state.newProduct
  );

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch,newProductLoading])


  return (

    <Fragment>{loading || newProductLoading? <Loader /> : 
        <Fragment>
          <div>

            {/* Heading */}

            <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
                <h2 className=" text-4xl font-semibold text-gray-600">Testing Services</h2>
            </div>

            {/* search & create services */}

            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 lg:gap-10 md:gap-10 sm:gap-5 mb-20">

              {/* Search Box */}

              <div className="col-span-3 sm:order-2">

                <input type="text" placeholder="Search Services" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" />

              </div>

              {/* Create Service Button */}

              <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 ">

                <Link to="/IPC-admin-portal/services/create">

                  <button className="bg-[#397f77] hover:bg-[#18debb] text-white shadow-lg rounded-2xl p-3 w-full duration-300">Create Service</button>

                </Link>

              </div>

            </div>

            {/* Services */}

            <div className="">
              <AdminServiceList services = {products} />
            </div>
          </div>

        </Fragment> 
    }</Fragment>
  )

}

export default AdminServicesSection