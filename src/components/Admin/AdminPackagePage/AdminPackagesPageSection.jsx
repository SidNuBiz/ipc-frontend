import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminPackageList from "./AdminPackageList"
import { useSelector, useDispatch } from "react-redux";
import { getPackages } from "../../../actions/packageAction";
import Loader from "../../../pages/Loader";


const AdminPackagesSection = () => {
  const dispatch = useDispatch()

  const[searchKey,setSearchKey] = useState('')

  const {loading} = useSelector(
    (state) => state.packages
  );
  const {loading:newPackageLoading} = useSelector(
    (state) => state.newPackage
  );
  const {loading:updatePackageLoading} = useSelector(
    (state) => state.package
  )

  useEffect(()=>{
    dispatch(getPackages())
  },[dispatch,newPackageLoading])

  return (

    <Fragment>{loading || newPackageLoading || updatePackageLoading? <Loader /> : 
        <Fragment>
          <div>

            {/* Heading */}

            <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
                <h2 className=" text-4xl font-semibold text-gray-600">Packages</h2>
            </div>

            {/* search & create services */}

            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 lg:gap-10 md:gap-10 sm:gap-5 mb-20">

              {/* Search Box */}

              <div className="col-span-3 sm:order-2">

                <input type="text" placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

              </div>

              {/* Create Service Button */}

              <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 ">

                <Link to="/IPC-admin-portal/packages/create">

                  <button className="bg-[#397f77] hover:bg-[#18debb] text-white shadow-lg rounded-2xl p-3 w-full duration-300">Create Package</button>

                </Link>

              </div>

            </div>

            {/* Services */}

            <div className="">
              <AdminPackageList  searchKey = {searchKey} />
            </div>
          </div>

        </Fragment> 
    }</Fragment>
  )

}

export default AdminPackagesSection