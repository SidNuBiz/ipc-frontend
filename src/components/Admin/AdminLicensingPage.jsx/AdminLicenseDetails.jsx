import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Cookies from 'js-cookie';

const AdminLicenseDetails = ({licenseDetails,setLicenseDetailsArr})=>{

    const alert = useAlert()
    const [name,setName] = useState(licenseDetails.name)
    const [description,setDescription] = useState(licenseDetails.description)


    //Designations

    const [pointsArr,setPointsArr] = useState(licenseDetails.points)
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
    const [previewLicenseImage,setPreviewLicenseImage] = useState(licenseDetails.img)

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


    async function updateLicenseDetails (id)  {
        if(name.trim() === ""){
            return alert.error("Name can not be empty")
        }

        if(description.trim() === ""){
            return alert.error("Description can not be empty")
        }

        try {
            const token = Cookies.get('token')

            const config = {
              headers: { "Content-Type":"multipart/form-data",'Authorization': `Bearer ${token}` },
            };
        
            const config2 = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            let fileData = new FormData()
      
            fileData.append('licenseImage',licenseImage)
          
            await axios.put(`http://localhost:8080/api/v1/license-details/update/${id}`,{name,img:licenseDetails.img,description,'points':pointsArr},config2)
            const {data:license} = await axios.post(`http://localhost:8080/api/v1/license-details/image/${id}`,fileData,config)
            if(license.success){
              alert.success("Successfully Updated")
             
            }
            
          } catch (error) {
              alert.error(error.response.data.error)
          }
    };

    async function deleteLicenseDetails(id){
        try {

            const token = Cookies.get('token')
        
            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }

            const {data} = await axios.delete(`http://localhost:8080/api/v1/license-details/delete/${id}`,config)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setLicenseDetailsArr(data.licenses)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }
    return (
        <div>
                        
        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

                {/* Image */}

                <div className='block relative h-fit group'>
                    <img src={previewLicenseImage} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

                    {/* Image Upload Button */}

                    <button onClick={() => {document.getElementById(licenseDetails._id).click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Member Image</button>
                </div>

                {/* Image Upload reference input for Button */}

                <div>
                    <input id={licenseDetails._id} type="file" className='hidden' accept="image/*" onChange={addLicenseImage}/>
                </div>

            </div>
        </div>

        <div className='mt-5'>
        
            <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Title</label>
            <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>{setName(e.target.value)}} required/>
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

        {/* <div className="mb-5 mt-10 flex justify-between"> */}
            <button onClick={()=>updateLicenseDetails(licenseDetails._id)}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteLicenseDetails(licenseDetails._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        {/* </div> */}
    </div>
    )
}

export default AdminLicenseDetails