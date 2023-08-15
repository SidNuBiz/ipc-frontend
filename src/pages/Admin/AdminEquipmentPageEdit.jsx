import React, { useState,useEffect,useRef} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Equipment from '../../components/Admin/AdminEquipmentPage/AdminEquipment';
import noImg from "../../assets/no-img.jpg"


const AdminEquipmentPageEdit = () => {

    const alert = useAlert()
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);

  
    const handleChange = async (e) => {
      setDate(e.target.value);
      try{
        const config = {
            headers:{"Content-Type":"application/json"}
          }
          const {data} = await axios.put("http://localhost:8080/api/v1/updated/update",{equipment:e.target.value},config)
          if(data.success){
            // alert.success("Date updated successfully")
          }
      }catch(error){
        alert.error(error.response.data.error)
      }
      
    };

 
    const [equipmentsArr,setEquipmentsArr] = useState([])


    const [name,setName] = useState('')
    const [model,setModel] = useState('')
    const [description,setDescription] = useState('')

    const [equipmentImage,setEquipmentImage] = useState()
    const [previewEquipmentImage,setPreviewEquipmentImage] = useState('')

    const addEquipmentImage = (e) =>{
        const files = Array.from(e.target.files);

        setPreviewEquipmentImage('');
        setEquipmentImage(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
            setPreviewEquipmentImage( reader.result);
            
            }
        };
    }


    async function createEquipmentDetails ()  {
        try {

            const config = {
              headers: { "Content-Type":"multipart/form-data" },
            };
            const config2 = {
              headers:{"Content-Type":"application/json"}
            }
            let fileData = new FormData()
      
            fileData.append('equipmentImage',equipmentImage)
          
            const {data} = await axios.post(`http://localhost:8080/api/v1/equipment-details/create/`,{name,img:'no-img',description,model},config2)
            const {data:equipment} = await axios.post(`http://localhost:8080/api/v1/equipment-details/image/${data.equipment._id}`,fileData,config)
            if(equipment.success){
              alert.success("Successfully Created")
              setEquipmentsArr([...equipmentsArr,equipment.equipment])
              setName('')
              setModel('')
              setDescription('')
              setPreviewEquipmentImage('')
            }
            
          } catch (error) {
              alert.error(error.response.data.error)
          }
    };


    async function fetchData(){
        const {data} =  await axios.get('http://localhost:8080/api/v1/equipment-details/all')
        const {data:updated} =  await axios.get('http://localhost:8080/api/v1/updated/all')
        setEquipmentsArr(data.equipments)
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
                        <h2 className=" text-4xl font-semibold text-gray-600">Update Equipment Content</h2>
                        
                    </div>

                    <div className='mb-10'>
                        <input
                            type="date"
                            onChange={handleChange}
                            ref={dateInputRef}
                        />
                        <p>Selected Updated Date: {date}</p>
                    </div>

                    <div>


                        {equipmentsArr.map(item => (
                            <Equipment key={item._id} equipment={item}  setEquipmentsArr={setEquipmentsArr} />
                        ))}


                    </div>
                    
                    <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                        <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>
            
                            {/* Image */}
            
                            <div className='block relative h-fit group'>
                                <img src={previewEquipmentImage !== '' ? previewEquipmentImage:noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />
            
                                {/* Image Upload Button */}
            
                                <button onClick={() => {document.getElementById("equipment-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Equipment Image</button>
                            </div>
            
                            {/* Image Upload reference input for Button */}
            
                            <div>
                                <input id='equipment-img-upload' type="file" className='hidden' accept="image/*" onChange={addEquipmentImage}/>
                            </div>
            
                        </div>
                    </div>
            
                    <div className='mt-5'>
                    
                        <label htmlFor="equipment-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>
                        <input id='equipment-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={name} placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
                    </div>

                    <div className='mt-5'>
                        
                        <label htmlFor="equipment-model" className='text-2xl text-[#397f77] font-semibold'>Model</label>
                        <input id='equipment-model' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={model} placeholder='Model' onChange={(e)=>{setModel(e.target.value)}} required/>
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
                        <button onClick={createEquipmentDetails}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                    </div>
                </div>
            

            </div>

        </div>

    </div>


  )
}

export default AdminEquipmentPageEdit