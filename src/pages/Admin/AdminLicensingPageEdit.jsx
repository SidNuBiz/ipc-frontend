import React, { useState,useEffect,useRef} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import License from '../../components/Admin/AdminLicensingPage.jsx/AdminLicense';
import AdminLicenseDetails from '../../components/Admin/AdminLicensingPage.jsx/AdminLicenseDetails';
import noImg from "../../assets/no-img.jpg"
import Cookies from 'js-cookie';
import url from '../../utils/baseApi';



const AdminLicensingPageEdit = () => {
 

    const alert = useAlert()
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleChange = async (e) => {
        setDate(e.target.value);
        try{
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            const {data} = await axios.put(`${url}/api/v1/updated/update`,{license:e.target.value},config)
            if(data.success){
            //   alert.success("Date updated successfully")
            }
        }catch(error){
          alert.error(error.response.data.error)
        }
        
      };
    // License Details
    const [licenseDetailsArr,setLicenseDetailsArr] = useState([])


    const [name,setName] = useState('')
    const [description,setDescription] = useState('')


    const [pointsArr,setPointsArr] = useState([])
    const [points,setPoints] = useState('')
    
    const addNewPoint = () => {
        if(points.trim() !== ''){
            let newPointsArr = [...pointsArr]   
            newPointsArr.push({id:uuidv4() ,point:points})
            setPoints('')
            setPointsArr(newPointsArr)
        }else{
            alert.error("Fill the point field first")
        }

    }

    const editPoints = (idx,value) => {
        let editedPointsArr = pointsArr
        editedPointsArr[idx].point = value
        setPointsArr(editedPointsArr)
    }

    const deletePoints = (id) => {
        setPointsArr(
            pointsArr.filter((item) => (item.id !== id ))
            
        );

    }
  
    const [licenseImage,setLicenseImage] = useState()
    const [previewLicenseImage,setPreviewLicenseImage] = useState('')

    const addLicenseImage = (e) =>{
        const files = Array.from(e.target.files);

        setPreviewLicenseImage('');
        setLicenseImage(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
            setPreviewLicenseImage( reader.result);
            
            }
        };
    }
  

    // License
    const [licenseArr,setLicenseArr] = useState([])

    const [licenseName,setLicenseName] = useState('')
    const [licenseNumber,setLicenseNumber] = useState('')

    
    // Create License
    async function createLicense ()  {

        if(licenseName.trim() === ""){
            return alert.error("License Name can not be empty")
        }

        if(licenseNumber.trim() === ""){
            return alert.error("License Number can not be empty")
        }

        try {
            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            
            const {data} = await axios.post(`${url}/api/v1/license/create`,{name:licenseName,number:licenseNumber},config)
            
            if(data.success){
                alert.success("Successfully Created")
                setLicenseArr([...licenseArr,data.license])
                setLicenseName('')
                setLicenseNumber('')
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };


    async function createLicenseDetails ()  {

        if(name.trim() === ""){
            return alert.error("Name can not be empty")
        }

        if(description.trim() === ""){
            return alert.error("Description can not be empty")
        }

        try {

            const token = Cookies.get('token')

            const config = {
              headers: { "Content-Type":"multipart/form-data", 'Authorization':`Bearer ${token}` },
            };
        
            const config2 = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            let fileData = new FormData()
      
            fileData.append('licenseImage',licenseImage)
          
            const {data} = await axios.post(`${url}/api/v1/license-details/create/`,{name,img:'no-img',description,'points':pointsArr},config2)
            const {data:license} = await axios.post(`${url}/api/v1/license-details/image/${data.license._id}`,fileData,config)
            if(license.success){
              alert.success("Successfully Created")
              setLicenseDetailsArr([...licenseDetailsArr,license.license])
              setName('')
              setPointsArr([])
              setDescription('')
              setPreviewLicenseImage('')
            }
            
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };





    async function fetchData(){
        const {data} =  await axios.get(`${url}/api/v1/license/all`)
        setLicenseArr(data.licenses)

        const {data:license} =  await axios.get(`${url}/api/v1/license-details/all`)
        setLicenseDetailsArr(license.details)

        const {data:updated} =  await axios.get(`${url}/api/v1/updated/all`)
        setDate((new Date(updated.updated.equipment).getMonth()+1)+"-"+new Date(updated.updated.equipment).getDate()+"-"+new Date(updated.updated.equipment).getFullYear() )
        dateInputRef.current.value = new Date(updated.updated.equipment).getFullYear()+"-"+(new Date(updated.updated.equipment).getMonth()+1)+"-"+new Date(updated.updated.equipment).getDate()

  
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
                        <h2 className=" text-4xl font-semibold text-gray-600">Update License Content</h2>
                    </div>

                    <div className='mb-10'>
                        <input
                            type="date"
                            onChange={handleChange}
                            ref={dateInputRef}
                        />
                        <p>Selected Updated Date: {date}</p>
                    </div>

                    {licenseArr.map(item=>(

                        <License key={item._id} license={item} setLicenseArr={setLicenseArr} />
                    
                    ))}

                    <div className="mb-5 mt-10 pb-5 ">
                        <h2 className=" text-4xl font-semibold text-gray-600">Create License Content</h2>
                    </div>

                    <div>
                        <div>
                            <div className='mt-5'>

                                <label htmlFor="license-name" className='text-2xl text-[#397f77] font-semibold'>License Name</label>
                                <input id='license-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={licenseName} placeholder='Name' onChange={(e)=>{setLicenseName(e.target.value)}} required/>
                            </div>

                            <div className='mt-5'>
                                
                                <label htmlFor="license-number" className='text-2xl text-[#397f77] font-semibold'>License Number</label>
                                <input id='license-number' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={licenseNumber} placeholder='Number' onChange={(e)=>{setLicenseNumber(e.target.value)}} required/>
                            </div>


                        </div>

                        <button onClick={createLicense} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                        
                    </div>  

                </div>

                <div>


                    {licenseDetailsArr.map(item => (
                        <AdminLicenseDetails key={item._id} licenseDetails={item}  setLicenseDetailsArr={setLicenseDetailsArr} />
                    ))}



                </div>

                    

                <div>
                    
                    <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                        <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>
            
                            {/* Image */}
            
                            <div className='block relative h-fit group'>
                                <img src={previewLicenseImage !== '' ? previewLicenseImage:noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />
            
                                {/* Image Upload Button */}
            
                                <button onClick={() => {document.getElementById("service-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change License Image</button>
                            </div>
            
                            {/* Image Upload reference input for Button */}
            
                            <div>
                                <input id='service-img-upload' type="file" className='hidden' accept="image/*" onChange={addLicenseImage}/>
                            </div>
            
                        </div>
                    </div>
            
                    <div className='mt-5'>
                    
                        <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Title</label>
                        <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
                    </div>
            
                    <div className='mt-5'>
            
                    <h2 className='text-2xl text-[#397f77] font-semibold'>Points</h2>
            
            
                        <table className='w-full'>
            
            
            
                            <tbody>
            
                                {
                                pointsArr.map((item,index) => {
                                    return (
                                    <tr key={item.id} className=''>
            
                                        <td>
                                        <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editPoints(index,e.target.value)}  defaultValue={item.point} required />
                                        </td>
            
                                        <td className='h-full'>
                                        <button onClick={() => deletePoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                                        </td>
            
                                    </tr>
                                    )
                                })
                                } 
            
                            </tbody>
            
                        </table>
            
            
            
                        <div >
            
                            <table className='w-full pt-1 mt-1 '>
            
                                <tbody>
            
                                <tr className=' text-gray-600 font-semibold'>
            
                                    <td>
            
                                    <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setPoints(e.target.value)}} value={points} placeholder='points' required />
                                    
            
                                    </td>
            
                                </tr>
            
                                </tbody>
            
                            </table>
            
                        </div>
            
                        <div className='mt-5 w-full mx-auto'>
                            <button onClick={addNewPoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                        </div>
            
                    </div>
            
                    <div>
            
                        <div className='mt-5'> 
            
                            <h2 className='text-2xl text-[#397f77] font-semibold'>Description</h2>
            
                            <table className='w-full pt-1 '>
            
                                <tbody>
            
                                    <tr className=' text-gray-600 font-semibold'>
            
                                    <td>
            
                                        <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setDescription(e.target.value)}} value={description} placeholder='Description' required />
                                    
                                    </td>
            
                                    </tr>
            
                                </tbody>
            
                            </table>
            
                        </div>
            
                    </div>
            
                    <div className="mb-5 mt-10 flex justify-between">
                        <button onClick={createLicenseDetails}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                    </div>
                </div>
            

            </div>

        </div>

    </div>


  )
}

export default AdminLicensingPageEdit