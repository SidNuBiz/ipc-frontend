import React from 'react'
import noImg from '../../../assets/no-img.jpg'
import { useState,Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';
import SideBar from "../../../components/Admin/Misc/SideBar";
import Loader from "../../../pages/Loader";
import Select from 'react-select'
import axios from 'axios';
import AdminServiceHoverBoxSection from '../../../components/Admin/AdminServicesPage/AdminServiceHoverBoxSection';
import {getService} from "../../../actions/serviceAction"
import Cookies from 'js-cookie';


const AdminServiceHoverBoxPage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    const {services,loading} = useSelector(
        (state) => state.services
    );

    const [selectedServiceIdx,setSelectedServiceIdx] = useState(0)

    // Hover box content
    
    const [hoverBoxImg,setHoverBoxImg] = useState(null)
    const [hoverBoxPreviewImg,setHoverBoxPreviewImg] = useState(noImg)
    const [hoverBoxTitle,setHoverBoxTitle] = useState('')
    const [hoverBoxDescription,setHoverBoxDescription] = useState('')
    const [hoverBoxBulletPointsArr,setHoverBoxBulletPointsArr] = useState([])
    const [hoverBoxBulletPoints,setHoverBoxBulletPoints] = useState('')
    
    const addNewHoverBoxBulletPoint = () => {
      let newHoverBoxBulletPointsArr = [...hoverBoxBulletPointsArr]   
      newHoverBoxBulletPointsArr.push({id:uuidv4(),bulletpoint:hoverBoxBulletPoints})
      setHoverBoxBulletPoints('')
      setHoverBoxBulletPointsArr(newHoverBoxBulletPointsArr)
    }

    const editHoverBoxBulletPoints = (idx,value) => {
      let editedHoverBoxBulletPointsArr = hoverBoxBulletPointsArr
      editedHoverBoxBulletPointsArr[idx].bulletpoint = value
      setHoverBoxBulletPointsArr(editedHoverBoxBulletPointsArr)
    }

    const deleteHoverBoxBulletPoints = (value) => {
      setHoverBoxBulletPointsArr(
        hoverBoxBulletPointsArr.filter((item) => item.id !== value)
      );
    }


    const addHoverBoxImage = (e) =>{
        const files = Array.from(e.target.files);

        setHoverBoxPreviewImg('');
        setHoverBoxImg(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
                setHoverBoxPreviewImg( reader.result);
            
            }
        };
    }

    async function createServiceHoverBox(){

        if(hoverBoxTitle.trim() === ''){
            return alert.error("Please Enter a title")
        }
        if(hoverBoxDescription.trim() === ''){
            return alert.error("Please Enter a description")
        }
        try{
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type":"multipart/form-data",'Authorization': `Bearer ${token}` },
            }
            
            if(hoverBoxImg == null){
                alert.error("Please select an image")
                return
            }
            let fileData = new FormData()
            fileData.set('title',hoverBoxTitle)
            fileData.set('description',hoverBoxDescription)
            fileData.append('points',JSON.stringify(hoverBoxBulletPointsArr))
            fileData.append('hoverBoxImage',hoverBoxImg)
            
    
            const {data} = await axios.post(`http://localhost:8080/api/v1/service-hoverbox/create/${services[selectedServiceIdx]._id}`,fileData,config)
            if(data.success){
                alert.success("created successfully")
                    
                setHoverBoxImg(null)
                setHoverBoxPreviewImg(noImg)
                setHoverBoxTitle('')
                setHoverBoxDescription('')
                setHoverBoxBulletPointsArr([])
                setHoverBoxBulletPoints('')
                dispatch(getService())
            }
        }catch(error){
            alert.error(error.response.data.error)
        }
       
      
    }

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



    
    return(

    <Fragment>{loading ? (
        <Loader />
        ) : (
        <Fragment>

            <div>
                

                <div className="lg:grid lg:grid-cols-5">

                <div className=" col-span-1 z-50 relative">

                    <SideBar />

                </div>

                <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">

                        <div className='mt-5'>
                        <div>
                            <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Select Service<span className='text-red-500'>*</span></label>
                            <Select options={services.map((item,index) => { return {label:item.title,value:index}})} defaultValue={selectedServiceIdx} onChange={(e) =>{setSelectedServiceIdx(e.value) }} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                        </div>

                        <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Hover Box Content</h2>

                        {services[selectedServiceIdx].hoverBoxContents.map((item,index)=>(
                            <div>
                                
                                <AdminServiceHoverBoxSection idx={index}  hoverBox={item} setSelectedServiceIdx={setSelectedServiceIdx} serviceId={services[selectedServiceIdx]._id} />
                                

                            </div>
                            
                     
                        ))}

                        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                            <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

                                {/* Image */}

                                <div className='block relative h-fit group'>
                                    <img src={hoverBoxPreviewImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

                                    {/* Image Upload Button */}

                                    <button onClick={() => {document.getElementById("hover-box-img").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Equipment Image</button>
                                </div>

                                {/* Image Upload reference input for Button */}

                                <div>
                                    <input id="hover-box-img" type="file" className='hidden' accept="image/*" onChange={addHoverBoxImage}/>
                                </div>

                            </div>
                        </div>

                        <div className=' mt-5 '>
                    
                        <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                            <tbody>

                            <tr className=' text-gray-600 font-semibold'>

                                <td>

                                <input  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxTitle(e.target.value)}} value={hoverBoxTitle} placeholder='Title' required />
                                <textarea row="6"  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxDescription(e.target.value)}} value={hoverBoxDescription} placeholder='Description' required />
                                
                                

                                    <h2 className='text-2xl text-[#397f77] font-semibold mt-5'>Hover Box Bulletpoints</h2>


                                    <table className='w-full'>


                                    <thead >

                                        {

                                            hoverBoxBulletPointsArr.length > 0 && (

                                                <tr className='text-gray-600 font-semibold'>

                                                    <th className='text-left'>Bulletpoints</th>

                                                </tr>

                                            )

                                        }

                                    </thead>

                                    <tbody>

                                        {
                                        hoverBoxBulletPointsArr.map((item,index) => {
                                            return (
                                            <tr key={item.id} className=''>

                                                <td>
                                                <input disabled type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editHoverBoxBulletPoints(index,e.target.value)}  defaultValue={item.bulletpoint} required />
                                                </td>

                                                <td className='h-full'>
                                                <button onClick={() => deleteHoverBoxBulletPoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                                                </td>

                                            </tr>
                                            )
                                        })
                                        } 

                                    </tbody>

                                    </table>



                                    <div className=' mt-5 '>


                                    <h2 className='text-lg text-[#397f77] font-semibold' >Add New</h2>

                                    <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                                        <tbody>

                                        <tr className=' text-gray-600 font-semibold'>

                                            <td>

                                            <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxBulletPoints(e.target.value)}} value={hoverBoxBulletPoints} placeholder='Bulletpoint' required />
                                            

                                            </td>

                                        </tr>

                                        </tbody>

                                    </table>

                    

                                <div className='mt-5 w-full mx-auto'>
                                    <button onClick={addNewHoverBoxBulletPoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                                </div>

                                </div>

                                </td>

                            </tr>

                            </tbody>

                        </table>

                        
                        <div className="mb-5 mt-10 flex justify-between">
                            <button onClick={createServiceHoverBox}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                        </div>

                        </div>

                    </div>


                </div>

                </div>

            </div>
        </Fragment> 
     )}
    </Fragment>

      
    )

}

export default AdminServiceHoverBoxPage