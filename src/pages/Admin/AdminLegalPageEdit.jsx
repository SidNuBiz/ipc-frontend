import React, { useState,useEffect } from 'react'
import axios from 'axios';
import SideBar from '../../components/Admin/Misc/SideBar';
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';
import Cookies from 'js-cookie';

const AdminLegalPageEdit = () => {

    const alert = useAlert()

    const[subHeading,setSubHeading] = useState('')

    //Description Paragraphs

    const [paragraphsArr,setParagraphsArr] = useState([])
    const [paragraphs,setParagraphs] = useState('')
    
    const addNewParagraph = () => {
      let newParagraphsArr = [...paragraphsArr]   
      newParagraphsArr.push({id:uuidv4(),paragraph:paragraphs})
      setParagraphs('')
      setParagraphsArr(newParagraphsArr)
    }

    const editParagraphs = (idx,value) => {
      let editedParagraphsArr = paragraphsArr
      editedParagraphsArr[idx].paragraph = value
      setParagraphsArr(editedParagraphsArr)
    }

    const deleteParagraphs = (value) => {
      setParagraphsArr(
        paragraphsArr.filter((item) => item.id !== value)
      );
    }

    async function updateLegal() {
        try{
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }

            const{data} = await axios.put("http://localhost:8080/api/v1/legal/update",{subHeading,description:paragraphsArr},config)
            if(data.success){
                alert.success("Successfully updated")
            }
        }catch(error){
            alert.error(error.response.data.error)
        }
    }

    async function fetchData(){
        const {data} =  await axios.get('http://localhost:8080/api/v1/legal/get')
        console.log(data)
        setSubHeading(data.legal.subHeading)
        setParagraphsArr(data.legal.description)

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
                        <h2 className=" text-4xl font-semibold text-gray-600">Update Legal Info</h2>
                    </div>


                    {/* Legal Info */}

                    <div className='mt-10'>

       
                    {/* Sub Heading */}
                    <div className='mb-10'>
                        <label htmlFor="service-sub-heading" className='text-2xl text-[#397f77] font-semibold'>Sub Heading</label>

                        <input id='service-sub-heading' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={subHeading} onChange={(e)=>setSubHeading(e.target.value)} required/>
                    </div>

                    {/* Description Paragraphs */}

                    <div className='mt-5'>

                        <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Description Paragraphs</h2>


                        <table className='w-full'>


                        <thead >

                            {

                                paragraphsArr.length > 0 && (

                                    <tr className='text-gray-600 font-semibold'>

                                        <th className='text-left'>Paragraph</th>

                                    </tr>

                                )

                            }

                        </thead>

                        <tbody>

                            {
                            paragraphsArr.map((item,index) => {
                                return (
                                <tr key={item.id} className=''>

                                    <td>
                                    <textarea rows="6" type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editParagraphs(index,e.target.value)}  defaultValue={item.paragraph} required />
                                    </td>

                                    <td className='h-full'>
                                    <button onClick={() => deleteParagraphs(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                                    </td>

                                </tr>
                                )
                            })
                            } 

                        </tbody>

                        </table>



                        <div className=' mt-5 '>


                        <h2 className='text-lg text-[#397f77] font-semibold' >Add New Para</h2>

                        <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                            <tbody>

                            <tr className=' text-gray-600 font-semibold'>

                                <td>

                                <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setParagraphs(e.target.value)}} value={paragraphs} placeholder='Paragraph' required />
                                

                                </td>

                            </tr>

                            </tbody>

                        </table>

                        </div>

                        <div className='mt-5 w-full mx-auto'>
                        <button onClick={addNewParagraph} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                        </div>

                    </div>



                    </div>

                </div>

                <div className="mb-5 mt-10 flex justify-between">
                        <button onClick={updateLegal}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
                </div>

            
            </div>

        </div>

    </div>


  )
}

export default AdminLegalPageEdit