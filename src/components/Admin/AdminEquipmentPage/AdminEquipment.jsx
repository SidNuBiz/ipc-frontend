import React, { useState,useEffect} from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import Cookies from 'js-cookie';

const Equipment = ({equipment,setEquipmentsArr})=>{

    const alert = useAlert()
    const [name,setName] = useState(equipment.name)
    const [model,setModel] = useState(equipment.model)
    const [description,setDescription] = useState(equipment.description)


    const [equipmentImage,setEquipmentImage] = useState()
    const [previewEquipmentImage,setPreviewEquipmentImage] = useState(equipment.img)

    const addEquipmentImage = (e) =>{
        const files = Array.from(e.target.files);
        console.log("game")
        setPreviewEquipmentImage('');
        setEquipmentImage(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
            setPreviewEquipmentImage( reader.result);
            console.log(previewEquipmentImage)
            }
        };
    }


    async function updateEquipmentDetails (id)  {
        try {
            const token = Cookies.get('token')

            const config = {
              headers: { "Content-Type":"multipart/form-data",'Authorization': `Bearer ${token}` },
            };
           
            const config2 = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
            let fileData = new FormData()
      
            fileData.append('equipmentImage',equipmentImage)
           
            const {data} = await axios.put(`http://localhost:8080/api/v1/equipment-details/update/${id}`,{name,img:equipment.img,description,model},config2)
            const {data:status} = await axios.post(`http://localhost:8080/api/v1/equipment-details/image/${id}`,fileData,config)
            if(status.success){
              alert.success("Successfully Updated")
             
            }
            
        } catch (error) {
            alert.error(error)
        }
    };

    async function deleteEquipmentDetails(id){
        try {

            const token = Cookies.get('token')
        
            const config = {
                headers: { 'Authorization': `Bearer ${token}` },
            }
            const {data} = await axios.delete(`http://localhost:8080/api/v1/equipment-details/delete/${id}`,config)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setEquipmentsArr(data.equipments)
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
                    <img src={previewEquipmentImage} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

                    {/* Image Upload Button */}

                    <button onClick={() => {document.getElementById(equipment._id).click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Equipment Image</button>
                </div>

                {/* Image Upload reference input for Button */}

                <div>
                    <input id={equipment._id} type="file" className='hidden' accept="image/*" onChange={addEquipmentImage}/>
                </div>

            </div>
        </div>

        <div className='mt-5'>
        
            <label htmlFor="equipment-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>
            <input id='equipment-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>{setName(e.target.value)}} required/>
        </div>

        
        <div className='mt-5'>
        
            <label htmlFor="equipment-model" className='text-2xl text-[#397f77] font-semibold'>Model</label>
            <input id='equipment-model' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={model} onChange={(e)=>{setModel(e.target.value)}} required/>
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
            <button onClick={()=>updateEquipmentDetails(equipment._id)}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteEquipmentDetails(equipment._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        {/* </div> */}
    </div>
    )
}

export default Equipment