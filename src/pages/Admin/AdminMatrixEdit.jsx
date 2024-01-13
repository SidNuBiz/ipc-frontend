import React, { useState,useEffect} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Matrix from '../../components/Admin/AdminMatrixPage/AdminMatrix';
import Cookies from 'js-cookie';
import url from '../../utils/baseApi';

const AdminMatrixEdit = () => {

    const alert = useAlert()
    
    // Matrix States
    const [matrixArr,setMatrixArr] = useState([])
    const [matrixName,setMatrixName] = useState('')
    const [matrixPhraseId,setMatrixPhraseId] = useState('')

    // Create Matrix
    async function createMatrix ()  {

        if(matrixName.trim() === ""){
            return alert.error("Matrix name can not be empty")
        }

        if(matrixPhraseId.trim() === ""){
            return alert.error("Phrase Id can not be empty")
        }

        try {
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            
            const {data} = await axios.post(`${url}/api/v1/matrix/create`,{name:matrixName,phraseId:matrixPhraseId},config)
            
            if(data.success){
                alert.success("Successfully Created")
                setMatrixArr([...matrixArr,data.matrix])
                setMatrixName('')
                setMatrixPhraseId('')
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };

    // Fetch Matrix
    async function fetchData(){
        try{
            const {data} =  await axios.get(`${url}/api/v1/matrix/all`)
            setMatrixArr(data.matrix)
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

                    {matrixArr.map(item=>(

                        <Matrix key={item._id} matrix={item} setMatrixArr={setMatrixArr} />
                    
                    ))}

                    <div className="mb-5 mt-10 pb-5 ">
                        <h2 className=" text-4xl font-semibold text-gray-600">Create Matrix</h2>
                    </div>

                    <div>
                        <div>
                            <div className='mt-5'>
                                <label htmlFor="license-name" className='text-2xl text-[#397f77] font-semibold'>Matrix Name</label>
                                <input id='license-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={matrixName} placeholder='Name' onChange={(e)=>{setMatrixName(e.target.value)}} required/>
                            </div>

                            <div className='mt-5'>
                                <label htmlFor="license-number" className='text-2xl text-[#397f77] font-semibold'>Phrase Id</label>
                                <input id='license-number' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={matrixPhraseId} placeholder='Phrase Id' onChange={(e)=>{setMatrixPhraseId(e.target.value)}} required/>
                            </div>
                        </div>

                        <button onClick={createMatrix} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                        
                    </div>  

                </div>

            </div>

        </div>

    </div>


  )
}

export default AdminMatrixEdit