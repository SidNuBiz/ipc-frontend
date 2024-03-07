import React, { useState,useEffect} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Type from '../../components/Admin/AdminTypePage/AdminType';
import Cookies from 'js-cookie';
import url from '../../utils/baseApi';

const AdminMatrixEdit = () => {

    const alert = useAlert()
    
    // Matrix States
    const [typeArr,setTypeArr] = useState([])
    const [typeName,setTypeName] = useState('')
    const [typeComponentList,setTypeComponentList] = useState('')

    // Create Matrix
    async function createType ()  {

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
            
            const {data} = await axios.post(`${url}/api/v1/type/create`,{name:typeName,componentList:typeComponentList},config)
            
            if(data.success){
                alert.success("Successfully Created")
                setTypeArr([...typeArr,data.type])
                setTypeName('')
                setTypeComponentList('')
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };

    // Fetch Matrix
    async function fetchData(){
        try{
            const {data} =  await axios.get(`${url}/api/v1/type/all`)
            setTypeArr(data.type)
        }catch(error){
            alert.error(error.response.data.message)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, []);

  
  return (

    <div>

        <div className="lg:grid lg:grid-cols-5">

            <div className=" col-span-1 z-50 relative">

                <SideBar />

            </div>


            <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">

                <div>

                    <div className="mb-5 flex justify-between">
                        <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>   
                    </div>

                    {/* Heading */}

                    {typeArr.map(item=>(

                        <Type key={item._id} type={item} setTypeArr={setTypeArr} />
                    
                    ))}

                    <div className="mb-5 mt-10 pb-5 ">
                        <h2 className=" text-4xl font-semibold text-gray-600">Create Type</h2>
                    </div>

                    <div>
                        <div>
                            <div className='mt-5'>
                                <label htmlFor="type-name" className='text-2xl text-[#397f77] font-semibold'>Type Name</label>
                                <input id='type-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={typeName} placeholder='Name' onChange={(e)=>{setTypeName(e.target.value)}} required/>
                            </div>

                            <div className='mt-5'>
                                <label htmlFor="license-number" className='text-2xl text-[#397f77] font-semibold'>Component List</label>
                                <input id='license-number' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={typeComponentList} placeholder='Component List' onChange={(e)=>{setTypeComponentList(e.target.value)}} required/>
                            </div>
                        </div>

                        <button onClick={createType} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                        
                    </div>  

                </div>

            </div>

        </div>

    </div>


  )
}

export default AdminMatrixEdit