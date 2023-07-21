import React, { useState,useEffect} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Faq from '../../components/Admin/AdminFaqPage/AdminFaq';
import Select from 'react-select'

const AdminFaqPageEdit = () => {

    const alert = useAlert()
    const [faqArr,setFaqArr] = useState([])
    const [question,setQuestion] = useState('')
    const [answer,setAnswer] = useState('')
    const [category,setCategory] = useState(null)

    
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
    async function createFaq ()  {
        try {

            const config = {
              headers:{"Content-Type":"application/json"}
            }
         
            const {data} = await axios.post(`http://localhost:8080/api/v1/faq/create/`,{question,answer,category},config)
          
            if(data.success){
              alert.success("Successfully Updated")
              setFaqArr([...faqArr,data.faq])
              setQuestion('')
              setAnswer('')
              setCategory(null)
            }
            
        } catch (error) {
            alert.error(error)
        }
    };

    async function fetchData(){
        const {data} =  await axios.get('http://localhost:8080/api/v1/faq/all')
        setFaqArr(data.faqs)
     

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

                    <div className="mb-5 pb-5 ">
                        <h2 className=" text-4xl font-semibold text-gray-600">Update FAQ Content</h2>
                    </div>

                    <div>


                        {faqArr.map(item => (
                            <Faq key={item._id} faq={item}  setFaqArr={setFaqArr} />
                        ))}



                    </div>
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
                        
                            <Select options={categoryList} defaultValue={category} onChange={(e)=>setCategory(e.value)} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                        </div>

                    </div>
            
                    <div className="mb-5 mt-10 flex justify-between">
                        <button onClick={createFaq}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                    </div>
                </div>
            

            </div>

        </div>

    </div>


  )
}

export default AdminFaqPageEdit