
import { testingServices } from "../../../data/siteContent"
import { useState } from "react"
import AdminServiceList from "./AdminServiceList"


const AdminServicesSection = () => {

  var [ services, setServices ] = useState(testingServices) 

  return (

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

            <button className="bg-[#397f77] hover:bg-[#18debb] text-white shadow-lg rounded-2xl p-3 w-full duration-300">Create Service</button>

          </div>

        </div>

        {/* Services */}

        <div className="">
          <AdminServiceList services = {services} />
        </div>



    </div>

  )

}

export default AdminServicesSection