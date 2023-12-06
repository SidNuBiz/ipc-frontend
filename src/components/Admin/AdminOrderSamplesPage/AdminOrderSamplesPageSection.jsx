import React from 'react'
import AdminOrderSampleList from './AdminOrderSampleList';

const AdminOrderSamplesPageSection = ({jobWebId}) => {


  return (

        <div>
            <div className="mb-5 flex justify-between">
                    <button
                        onClick={() => {
                            window.history.go(-1);
                        }}
                        className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2"
                    >
                        &#x2190;Back
                    </button>
                </div>
        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Samples</h2>
        </div>


        {/* Services */}

        <div className="">
            <AdminOrderSampleList jobWebId={jobWebId}/>
        </div>
        </div>
       

  )
}

export default AdminOrderSamplesPageSection