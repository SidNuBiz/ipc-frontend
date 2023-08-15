import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import Cookies from 'js-cookie';


const License = ({license,setLicenseArr})=>{

    const alert = useAlert()


    const [licenseName,setLicenseName] = useState(license.name)
    const [licenseNumber,setLicenseNumber] = useState(license.number)

    
    // Update License
    async function updateLicense (id)  {

        try {
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            
            const {data} = await axios.put(`http://localhost:8080/api/v1/license/update/${id}`,{name:licenseName,number:licenseNumber},config)
            
            if(data.success){
                alert.success("Successfully updated")
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };

    async function deleteLicense(id){
        try {

            const token = Cookies.get('token')
        
            const config = {
                headers: { 'Authorization': `Bearer ${token}` },
            }

            const {data} = await axios.delete(`http://localhost:8080/api/v1/license/delete/${id}`,config)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setLicenseArr(data.licenses)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }


    return(
        <div>
            <div>
                <div className='mt-5'>

                    <label htmlFor="license-name" className='text-2xl text-[#397f77] font-semibold'>License Name</label>
                    <input id='license-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={licenseName} onChange={(e)=>{setLicenseName(e.target.value)}} required/>
                </div>

                <div className='mt-5'>
                    
                    <label htmlFor="license-number" className='text-2xl text-[#397f77] font-semibold'>License Number</label>
                    <input id='license-number' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={licenseNumber} onChange={(e)=>{setLicenseNumber(e.target.value)}} required/>
                </div>


            </div>

            <button onClick={()=>updateLicense(license._id)} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteLicense(license._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        </div>    

    )
}

export default License