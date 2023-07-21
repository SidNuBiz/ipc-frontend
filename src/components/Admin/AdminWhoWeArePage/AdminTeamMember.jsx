import React, { useState,useEffect} from 'react'
import { useAlert } from 'react-alert';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const TeamMember = ({member,setMembersArr})=>{

    const alert = useAlert()


    // Team Members

    const [name,setName] = useState(member.name)
    const [about,setAbout] = useState(member.about)


    //Designations

    const [designationsArr,setDesignationsArr] = useState(member.designations)
    const [designations,setDesignations] = useState('')
    
    const addNewDesignation = () => {
        if(designations.trim() !== ''){
            let newDesignationsArr = [...designationsArr]   
            newDesignationsArr.push({id:uuidv4() ,designation:designations})
            setDesignations('')
            setDesignationsArr(newDesignationsArr)
        }else{
            alert.error("Fill the designation field first")
        }
  
    }

    const editDesignations = (idx,value) => {
        let editedDesignationsArr = designationsArr
        editedDesignationsArr[idx].designation = value
        setDesignationsArr(editedDesignationsArr)
    }

    const deleteDesignations = (id) => {
    setDesignationsArr(
        designationsArr.filter((item) => (item.id !== id ))
        
    );

    }

    const [memberImage,setMemberImage] = useState()
    const [previewMemberImage,setPreviewMemberImage] = useState(member.img)

    const addMemberImage = (e) =>{
        const files = Array.from(e.target.files);

        setPreviewMemberImage('');
        setMemberImage(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
            if (reader.readyState === 2) {
            setPreviewMemberImage( reader.result);
            
            }
        };
    }

    // Update Team Member
    async function updateTeamMember (id)  {

        try {

        const config = {
            headers: { "Content-Type":"multipart/form-data" },
        };
        const config2 = {
            headers:{"Content-Type":"application/json"}
        }
        let fileData = new FormData()

        fileData.append('memberImage',memberImage)
        
        const {data} = await axios.put(`http://localhost:8080/api/v1/team-member/update/${id}`,{name,img:member.img,about,designationsArr},config2)
        const {data:team} = await axios.post(`http://localhost:8080/api/v1/team-member/image/${id}`,fileData,config)
        if(team.success){
            alert.success("Successfully updated")
        }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    };


    async function deleteTeamMember(id){
        try {

            const {data} = await axios.delete(`http://localhost:8080/api/v1/team-member/delete/${id}`)
            
            if(data.success){
                alert.success("Successfully Deleted")
                setMembersArr(data.team)
            }
        
        } catch (error) {
            alert.error(error.response.data.error)
        }
    }




return(
    <div>
                        
        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

                {/* Image */}

                <div className='block relative h-fit group'>
                    <img src={previewMemberImage} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

                    {/* Image Upload Button */}

                    <button onClick={() => {document.getElementById(member._id).click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Member Image</button>
                </div>

                {/* Image Upload reference input for Button */}

                <div>
                    <input id={member._id} type="file" className='hidden' accept="image/*" onChange={addMemberImage}/>
                </div>

            </div>
        </div>

        <div className='mt-5'>
        
            <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>
            <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>{setName(e.target.value)}} required/>
        </div>

        <div className='mt-5'>

            <h2 className='text-2xl text-[#397f77] font-semibold'>Designations</h2>


            <table className='w-full'>



                <tbody>

                    {
                    designationsArr.map((item,index) => {
                        return (
                        <tr key={item.id} className=''>

                            <td>
                            <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editDesignations(index,e.target.value)}  defaultValue={item.designation} required />
                            </td>

                            <td className='h-full'>
                            <button onClick={() => deleteDesignations(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
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

                        <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setDesignations(e.target.value)}} value={designations} placeholder='Designation' required />
                        

                        </td>

                    </tr>

                    </tbody>

                </table>

            </div>

            <div className='mt-5 w-full mx-auto'>
                <button onClick={addNewDesignation} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
            </div>

        </div>

        <div>

            <div className='mt-5'> 

                <h2 className='text-2xl text-[#397f77] font-semibold'>About</h2>

                <table className='w-full pt-1 '>

                    <tbody>

                        <tr className=' text-gray-600 font-semibold'>

                        <td>

                            <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setAbout(e.target.value)}} value={about} placeholder='About' required />
                        
                        </td>

                        </tr>

                    </tbody>

                </table>

            </div>

        </div>

        {/* <div className="mb-5 mt-10 flex justify-between"> */}
            <button onClick={()=>updateTeamMember(member._id)}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
            <button onClick={()=>deleteTeamMember(member._id)} className=" my-10 ml-5 bg-[#D10000] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#FF0000] duration-300">Delete</button>
        {/* </div> */}
    </div>
)
}

export default TeamMember