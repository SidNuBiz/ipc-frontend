import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import Cookies from 'js-cookie';


const Matrix = ({matrix,setMatrixArr})=>{

    const alert = useAlert()

    const [matrixName,setMatrixName] = useState(matrix.name)
    const [matrixPhraseId,setMatrixPhraseId] = useState(matrix.phraseId)
    
    // Update Matrix
    async function updateMatrix (id)  {
        if(matrixName.trim() === ""){
            return alert.error("Matrix name can not be empty")
        }

        if(matrixPhraseId.trim() === ""){
            return alert.error("Matrix Phrase Id can not be empty")
        }

        try {
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            
            const {data} = await axios.put(`http://localhost:8080/api/v1/matrix/update/${id}`,{name:matrixName,phraseId:matrixPhraseId},config)
            
            if(data.success){
                alert.success("Successfully updated")
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };

    async function deleteMatrix(id){
        try {

            const token = Cookies.get('token')
        
            const config = {
                headers: { 'Authorization': `Bearer ${token}` },
            }

            const {data} = await axios.delete(`http://localhost:8080/api/v1/matrix/delete/${id}`,config)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setMatrixArr(data.matrix)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }


    return(
        <div>
            <div>
                <div className='mt-5'>

                    <label htmlFor="license-name" className='text-2xl text-[#397f77] font-semibold'>Matrix Name</label>
                    <input id='license-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={matrixName} onChange={(e)=>{setMatrixName(e.target.value)}} required/>
                </div>

                <div className='mt-5'>
                    
                    <label htmlFor="license-number" className='text-2xl text-[#397f77] font-semibold'>Phrase Id</label>
                    <input id='license-number' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={matrixPhraseId} onChange={(e)=>{setMatrixPhraseId(e.target.value)}} required/>
                </div>


            </div>

            <button onClick={()=>updateMatrix(matrix._id)} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteMatrix(matrix._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        </div>    

    )
}

export default Matrix