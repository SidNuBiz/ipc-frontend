import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import Cookies from 'js-cookie';
import url from '../../../utils/baseApi';

const Matrix = ({type,setTypeArr})=>{

    const alert = useAlert()

    const [typeName,setTypeName] = useState(type.name)
    const [typeComponentList,setTypeComponentList] = useState(type.componentList)
    
    async function updateType (id)  {
        if(typeName.trim() === ""){
            return alert.error("Type name can not be empty")
        }

        if(typeComponentList.trim() === ""){
            return alert.error("Component list can not be empty")
        }


        try {
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            
            const {data} = await axios.put(`${url}/api/v1/type/update/${id}`,{name:typeName,componentList:typeComponentList},config)
            
            if(data.success){
                alert.success("Successfully updated")
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };
    
    async function deleteType(id){
        try {

            const token = Cookies.get('token')
        
            const config = {
                headers: { 'Authorization': `Bearer ${token}` },
            }

            const {data} = await axios.delete(`${url}/api/v1/type/delete/${id}`,config)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setTypeArr(data.type)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }


    return(
        <div>
            <div>
                {/* Marix Name */}
                <div className='mt-5'>
                    <label htmlFor="type-name" className='text-2xl text-[#397f77] font-semibold'>Type Name<span className="text-[red]" >*</span></label>
                    <input id='type-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={typeName} onChange={(e)=>{setTypeName(e.target.value)}} required/>
                </div>

                {/* Matrix Phrase Id */}
                <div className='mt-5'>
                    <label htmlFor="componentList" className='text-2xl text-[#397f77] font-semibold'>Component List<span className="text-[red]" >*</span></label>
                    <input id='componentList' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={typeComponentList} onChange={(e)=>{setTypeComponentList(e.target.value)}} required/>
                </div>

            </div>

            <button onClick={()=>updateType(type._id)} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteType(type._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        </div>    

    )
}

export default Matrix