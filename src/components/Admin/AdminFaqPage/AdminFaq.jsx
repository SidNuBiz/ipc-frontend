import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import Select from 'react-select'
import axios from 'axios';

const Faq = ({faq,setFaqArr})=>{

    const alert = useAlert()
    const [question,setQuestion] = useState(faq.question)
    const [answer,setAnswer] = useState(faq.answer)
    const [category,setCategory] = useState(faq.category)

 
    const categoryList = [
        {label:"General", value: "General"},
        {label:"Samples", value: "Samples"},
        {label:"Results", value: "Results"},
      
    ]

    const selectCustomStyles = {

        control: (provided, state) => ({

            ...provided,

            backgroundColor: 'white',

            outline: 'none',

            outlineOffset: state.isFocused ? 'none' : 'none',

            border: 0,

            boxShadow: 'none',

            borderRadius: '6px',

            innerWidth: '100%',

        }),

    }
    async function updateFaq (id)  {
        try {

            const config = {
              headers:{"Content-Type":"application/json"}
            }
           
            const {data} = await axios.put(`http://localhost:8080/api/v1/faq/update/${id}`,{question,answer,category},config)
          
            if(data.success){
              alert.success("Successfully Updated")
            }
            
        } catch (error) {
            alert.error(error)
        }
    };

    async function deleteFaq(id){
        try {

            const {data} = await axios.delete(`http://localhost:8080/api/v1/faq/delete/${id}`)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setFaqArr(data.faqs)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }
    return (
    <div>
     

        <div className='mt-5'>
        
            <label htmlFor="equipment-name" className='text-2xl text-[#397f77] font-semibold'>Question</label>
            <input id='equipment-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={question} placeholder='Question' onChange={(e)=>{setQuestion(e.target.value)}} required/>
        </div>

        
        <div className='mt-5'>
        
            <label htmlFor="equipment-model" className='text-2xl text-[#397f77] font-semibold'>Answer</label>
            <input id='equipment-model' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={answer} placeholder='Answer' onChange={(e)=>{setAnswer(e.target.value)}} required/>
        </div>

             
        <div className='mt-5'>

        
            <Select options={categoryList} defaultValue={category} placeholder={category} onChange={(e)=>setCategory(e.value)} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
        </div>



        {/* <div className="mb-5 mt-10 flex justify-between"> */}
            <button onClick={()=>updateFaq(faq._id)}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteFaq(faq._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        {/* </div> */}
    </div>
    )
}

export default Faq