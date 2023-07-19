import React, { useState,useEffect,Fragment} from 'react'
import { useAlert } from 'react-alert';
import SideBar from '../../components/Admin/Misc/SideBar';
import axios from 'axios';
import Loader from '../Loader';
import { v4 as uuidv4 } from 'uuid';
import noImg from "../../assets/no-img.jpg"
import TeamMember from '../../components/Admin/AdminWhoWeArePage/AdminTeamMember';


const AdminWhoWeArePageContentEdit = () => {
 

    const alert = useAlert()

    const [ourStory1,setOurStory1] = useState('')
    const [ourStory2,setOurStory2] = useState('')
    const [ourStory3,setOurStory3] = useState('')

    const [whoWeAre1,setWhoWeAre1] = useState('')
    const [whoWeAre2,setWhoWeAre2] = useState('')
    const [whoWeAre3,setWhoWeAre3] = useState('')



    async function updateWhoWeAre(){
        if(whoWeAre1.trim() == ""){
            return alert.error("Who We Are : Slide one field can not be empty")
        }
        if(whoWeAre2.trim() == ""){
            return alert.error("Who We Are : Slide two field can not be empty")
        }

        if(whoWeAre3.trim() == ""){
            return alert.error("Who We Are : Slide three field can not be empty")
        }



        try{
            const config = {
                headers: { "Content-Type": "application/json" },
            }
            const {data} = await axios.put("http://localhost:8080/api/v1/who-we-are-details/update",
                {
                    whoWeAre:[whoWeAre1,whoWeAre2,whoWeAre3]
                },
                config
            )
            if(data.success){
                alert.success("Successfully Updated")
            }
        }catch(error){
            alert.error(error.response.data.error)
        }
      
    }
    

    async function updateOurStory(){
        if(ourStory1.trim() == ""){
            return alert.error("Our Slide : Slide one field can not be empty")
        }
        if(ourStory2.trim() == ""){
            return alert.error("Our Slide : Slide two field can not be empty")
        }

        if(ourStory3.trim() == ""){
            return alert.error("Our Slide : Slide three field can not be empty")
        }

        try{
            const config = {
                headers: { "Content-Type": "application/json" },
            }
            const {data} = await axios.put("http://localhost:8080/api/v1/our-story-details/update",
                {
                    ourStory:[ourStory1,ourStory2,ourStory3]
                },
                config
            )
            if(data.success){
                alert.success("Successfully Updated")
            }
        }catch(error){
            alert.error(error.response.data.error)
        }
  

    }

    // Team Members

    const [membersArr,setMembersArr] = useState([])


     const [name,setName] = useState('')
     const [about,setAbout] = useState('')
 
 
     //Designations
 
     const [designationsArr,setDesignationsArr] = useState([])
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
     const [previewMemberImage,setPreviewMemberImage] = useState('')
 
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


    
    async function createTeamMember ()  {

        try {

            const config = {
              headers: { "Content-Type":"multipart/form-data" },
            };
            const config2 = {
              headers:{"Content-Type":"application/json"}
            }
            let fileData = new FormData()
      
            fileData.append('memberImage',memberImage)
          
            const {data} = await axios.post(`http://localhost:8080/api/v1//team-member/create/`,{name,img:"no-img",about,designations:designationsArr},config2)
            const {data:member} = await axios.post(`http://localhost:8080/api/v1/team-member/image/${data.member._id}`,fileData,config)
            if(member.success){
              alert.success("Successfully Created")
              setMembersArr([...membersArr,member.member])
              setName('')
              setDesignationsArr([])
              setAbout('')
              setPreviewMemberImage('')
            }
            
          } catch (error) {
              alert.error(error.response.data.error)
          }
    };


    async function fetchData(){
        const {data} =  await axios.get('http://localhost:8080/api/v1/who-we-are-page-details')
        setWhoWeAre1(data.details[1].whoWeAreSection.whoWeAre[0])
        setWhoWeAre2(data.details[1].whoWeAreSection.whoWeAre[1])
        setWhoWeAre3(data.details[1].whoWeAreSection.whoWeAre[2])
        setOurStory1(data.details[0].ourStorySection.ourStory[0])
        setOurStory2(data.details[0].ourStorySection.ourStory[1])
        setOurStory3(data.details[0].ourStorySection.ourStory[2])
        const {data:team} =  await axios.get('http://localhost:8080/api/v1/team-member/all')
        setMembersArr(team.details)
  
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
                        <h2 className=" text-4xl font-semibold text-gray-600">Update Who We Are Content</h2>
                    </div>

                    {/* Go Back Button */}

        

                    <div >

                        <div> 

                            <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                                <tbody>

                                    <tr className=' text-gray-600 font-semibold'>

                                    <td>

                                        <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setWhoWeAre1(e.target.value)}} value={whoWeAre1} placeholder='Slide 1' required />
                                    

                                    </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className='mt-5'> 

                            <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                                <tbody>

                                    <tr className=' text-gray-600 font-semibold'>

                                    <td>

                                        <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setWhoWeAre2(e.target.value)}} value={whoWeAre2} placeholder='Slide 2' required />
                                    

                                    </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className='mt-5'> 

                            <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                                <tbody>

                                    <tr className=' text-gray-600 font-semibold'>

                                    <td>

                                        <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setWhoWeAre3(e.target.value)}} value={whoWeAre3} placeholder='Slide 3' required />
                                    

                                    </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <button onClick={updateWhoWeAre} className=" my-10 bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>

                </div>

                
                <div>

                    {/* Heading */}

                    <div className="mb-5 mt-10 pb-5 border-b-[1px] border-b-slate-300">
                        <h2 className=" text-4xl font-semibold text-gray-600">Update Our Story Content</h2>
                    </div>

                    {/* Go Back Button */}

                

                    <div >


                    <div> 

                        <table className='w-full pt-1 mt-1 '>

                            <tbody>

                                <tr className=' text-gray-600 font-semibold'>

                                <td>

                                    <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setOurStory1(e.target.value)}} value={ourStory1} placeholder='Slide 1' required />
                                

                                </td>

                                </tr>

                            </tbody>

                        </table>

                        </div>

                        <div className='mt-5'> 

                        <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                            <tbody>

                                <tr className=' text-gray-600 font-semibold'>

                                <td>

                                    <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setOurStory2(e.target.value)}} value={ourStory2} placeholder='Slide 2' required />
                                

                                </td>

                                </tr>

                            </tbody>

                        </table>

                        </div>

                        <div className='mt-5'> 

                        <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                            <tbody>

                                <tr className=' text-gray-600 font-semibold'>

                                <td>

                                    <textarea rows="6" id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setOurStory3(e.target.value)}} value={ourStory3} placeholder='Slide 3' required />
                                

                                </td>

                                </tr>

                            </tbody>

                        </table>

                        </div>
                    
                    </div>

                    <div className="mb-5 mt-10 flex justify-between">
                    

                    <button onClick={updateOurStory} className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
                </div>


                </div>

                <div>

                    {/* Heading */}

                    <div className="mb-5 mt-10 pb-5 border-b-[1px] border-b-slate-300">
                        <h2 className=" text-4xl font-semibold text-gray-600">Update Team Content</h2>
                    </div>

                    {membersArr.map(member=>(
                        <TeamMember member={member} setMembersArr={setMembersArr} />
         
                    ))}




                </div>


                <div>
                        
                    <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>
                        <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>
                
                            {/* Image */}

                            <div className='block relative h-fit group'>
                                <img src={previewMemberImage !== '' ? previewMemberImage:noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

                                {/* Image Upload Button */}

                                <button onClick={() => {document.getElementById("member-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Member Image</button>
                            </div>

                            {/* Image Upload reference input for Button */}

                            <div>
                                <input id='member-img-upload' type="file" className='hidden' accept="image/*" onChange={addMemberImage}/>
                            </div>

                        </div>
                    </div>
            
                    <div className='mt-5'>
                    
                        <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>
                        <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' required/>
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
            
                    <div className="mb-5 mt-10 flex justify-between">
                        <button onClick={createTeamMember}  className=" bg-[#397f77] text-white px-5 py-3  text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
                        
                    </div>
                </div>
            

            </div>

        </div>

    </div>


  )
}

export default AdminWhoWeArePageContentEdit