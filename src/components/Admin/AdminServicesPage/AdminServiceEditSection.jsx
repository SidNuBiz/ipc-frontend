import React from 'react'
import { testingServices } from "../../../data/siteContent";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import RichTextEditor from '../Misc/RichTextEditor';

const AdminServiceEditSection = () => {

    const serviceId = useParams();

    const thisService = testingServices.find(service => service.id.toString() === serviceId.id);

    useEffect (() => { console.log(thisService.name) }, [])


    // Reset add New Turnaround Fields

    const resetNewTurnaround = () => {

        document.getElementById("new-turnaround-title").value = "";
        document.getElementById("new-turnaround-turnaround").value = "";
        document.getElementById("new-turnaround-addonprice").value = "";


    }

    // Reset add New Strain Fields

    const resetNewStrain = () => {

        document.getElementById("new-strain-title").value = "";
        document.getElementById("new-strain-addonprice").value = "";


    }


  return (
    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Service Details</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={() => {window.history.go(-1)}} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Save Changes</button>
        </div>
        

        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>

          {/* Service Image */}

          <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

            {/* Image */}

            <div className='block relative h-fit group'>
              <img src={thisService.img} alt={thisService.name} className=" relative w-full h-64 object-cover rounded-xl" />

              {/* Image Upload Button */}

              <button onClick={() => {document.getElementById("service-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Image</button>
            </div>

            {/* Image Upload reference input for Button */}

            <div>
              <input id='service-img-upload' type="file" className='hidden' />
            </div>

          </div>

          {/* Service Info */}

          <div className='col-span-2'>

            {/* Service Name */}

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>

              <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={thisService.name} required/>
            </div>

            {/* Service Price */}

            <div className=''>
              
              <label htmlFor="service-price" className='text-2xl text-[#397f77] font-semibold'>Price(C$)</label>

              <input id='service-price' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={thisService.price} required/>

            </div>

          </div>

        </div>

        {/* Service Description & Options */}

        <div className='mt-10'>

          {/* Service Description */}

          <div className='mb-10'>

            <label htmlFor="service-description" className='text-2xl text-[#397f77] font-semibold'>Description</label>

            <div className='mt-5'>
              <RichTextEditor value={thisService.description} required/>
            </div>

          </div>

          {/* Service Options */}

          <div className='mt-20'>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>

              {/* Turnaround */}

              <div className='mt-5 w-full'>

                {/* Heading */}
                
                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Turnaround</h2>

                {/* list */}

                <table className='w-full'>

                  {/* Table Heading */}

                  <thead >

                    <tr className='text-gray-600 font-semibold'>

                      <th className='text-left'>Title</th>

                      <th className='text-left'>Turnaround</th>

                      <th className='text-left'>(C$) Add On Price</th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      thisService.turnaroundTypes.map((turnaround, index) => {
                        return (
                          <tr key={index} className=''>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={turnaround.title} required />
                            </td>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={turnaround.turnaround} required />
                            </td>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={turnaround.addOnPrice} required />
                            </td>

                            <td>
                              <button className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-3'/></button>
                            </td>

                          </tr>
                        )
                      })
                    }

                  </tbody>

                </table>

                {/* New Turnaround input */}

                <div className=' mt-5 '>

                  {/* Heading */}

                  <h2 className='text-lg text-[#397f77] font-semibold' >Add New</h2>

                  <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                    <tbody>

                      <tr className=' text-gray-600 font-semibold'>

                        <td>

                          <input id='new-turnaround-title' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='Title' required />

                        </td>

                        <td>

                          <input id='new-turnaround-turnaround' type="text" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='Turnaround' required />

                        </td>

                        <td>

                          <input id='new-turnaround-addonprice' type="text" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='(C$) Add On Price' required />

                        </td>

                        <td>
                          <button type='button' onClick={() => resetNewTurnaround()} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/ios-filled/28/397f77/update-left-rotation.png" alt="" className='h-[28px] w-[28px] m-3'/></button>
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

                {/* Add Button */}

                <div className='mt-5 w-full mx-auto'>
                  <button className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>


              {/* Strains */}

              <div className='mt-5'>

                {/* Heading */}
                
                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Strains</h2>

                {/* list */}

                <table className='w-full'>

                  {/* Table Heading */}

                  <thead >

                    <tr className='text-gray-600 font-semibold'>

                      <th className='text-left'>Title</th>

                      <th className='text-left'>(C$) Add On Price</th>

                    </tr>

                  </thead>

                  <tbody>

                    {
                      thisService.strains.map((strain, index) => {
                        return (
                          <tr key={index} className=''>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={strain.title} required />
                            </td>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={strain.addOnPrice} required />
                            </td>

                            <td className='h-full'>
                              <button className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                            </td>

                          </tr>
                        )
                      })
                    }

                  </tbody>

                </table>

                {/* New strain input */}

                <div className=' mt-5 '>

                  {/* Heading */}

                  <h2 className='text-lg text-[#397f77] font-semibold' >Add New</h2>

                  <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                    <tbody>

                      <tr className=' text-gray-600 font-semibold'>

                        <td>

                          <input id='new-strain-title' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='Title' required />

                        </td>

                        <td>

                          <input id='new-strain-addonprice' type="text" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='(C$) Add On Price' required />

                        </td>

                        <td>
                        <button type='button' onClick={() => resetNewStrain()} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/ios-filled/28/397f77/update-left-rotation.png" alt="" className='h-[28px] w-[28px] m-3'/></button>
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

                {/* Add Button */}

                <div className='mt-5 w-full mx-auto'>
                  <button className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default AdminServiceEditSection