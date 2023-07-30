import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';
import noImg from '../../../assets/no-img.jpg'
import { updateService } from "../../../actions/serviceAction";

const AdminServiceEditSection = ({thisService}) => {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const alert = useAlert()

    const[title,setTitle] = useState(thisService.title)
    const[subHeading,setSubHeading] = useState(thisService.subHeading)
    const[codeName,setCodeName] = useState(thisService.codeName)


    //Service Points

    const [servicePointsArr,setServicePointsArr] = useState(thisService.points)
    const [servicePoints,setServicePoints] = useState('')
    
    const addNewServicePoint = () => {
      let newServicePointsArr = [...servicePointsArr]   
      newServicePointsArr.push({id:uuidv4(),point:servicePoints})
      setServicePoints('')
      setServicePointsArr(newServicePointsArr)
    }

    const editServicePoints = (idx,value) => {
      let editedServicePointsArr = servicePointsArr
      editedServicePointsArr[idx].point = value
      setServicePointsArr(editedServicePointsArr)
    }

    const deleteServicePoints = (value) => {
      setServicePointsArr(
        servicePointsArr.filter((item) => item.id !== value)
      );
    }


    //Description Paragraphs

    const [paragraphsArr,setParagraphsArr] = useState(thisService.description.paragraphs)
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


    // Description Bulletpoints

    const [bulletPointsArr,setBulletPointsArr] = useState(thisService.description.bulletPoints)
    const [bulletPoints,setBulletPoints] = useState('')
    
    const addNewBulletPoint = () => {
      let newBulletPointsArr = [...bulletPointsArr]   
      newBulletPointsArr.push({id:uuidv4(),bulletpoint:bulletPoints})
      setBulletPoints('')
      setBulletPointsArr(newBulletPointsArr)
    }

    const editBulletPoints = (idx,value) => {
      let editedBulletPointsArr = bulletPointsArr
      editedBulletPointsArr[idx].bulletpoint = value
      setBulletPointsArr(editedBulletPointsArr)
    }

    const deleteBulletPoints = (value) => {
      setBulletPointsArr(
        bulletPointsArr.filter((item) => item.id !== value)
      );
    }


    // Outline
    
    const [outlineTitle,setOutlineTitle] = useState(thisService.outline.outlineTitle)
    const [outlineParagraph,setOutlineParagraph] = useState(thisService.outline.outlineParagraph)
    const [outlineSubHeading,setOutlineSubHeading] = useState(thisService.outline.outlineSubHeading)
    const [outlineBulletPoints,setOutlineBulletPoints] = useState('')
    const [outlineBulletPointsArr,setOutlineBulletPointsArr] = useState(thisService.outline.outlineBulletPoints)

    const addNewOutlineBulletPoint = () => {
      let newOutlineBulletPointsArr = [...outlineBulletPointsArr]   
      newOutlineBulletPointsArr.push({id:uuidv4(),bulletpoint:outlineBulletPoints})
      setOutlineBulletPoints('')
      setOutlineBulletPointsArr(newOutlineBulletPointsArr)
    }

    const editOutlineBulletPoints = (idx,value) => {
      let editedOutlineBulletPointsArr = outlineBulletPointsArr
      editedOutlineBulletPointsArr[idx].bulletpoint = value
      setOutlineBulletPointsArr(editedOutlineBulletPointsArr)
    }

    const deleteOutlineBulletPoints = (value) => {
      setOutlineBulletPointsArr(
        outlineBulletPointsArr.filter((item) => item.id !== value)
      );
    }


    // Image Gallery & mainImage & icon
    const storeImage = []
    const [imageGallery,setImageGallery] = useState([])
    const [previewImageGallery,setPreviewImageGallery] = useState(thisService.imageGallery.map((item,idx)=>{return{id:idx,image:item}}))

    const [dbImageGallery,setDbImageGallery] = useState(thisService.imageGallery)
    const [icon,setIcon] = useState()
    const [previewIcon,setPreviewIcon] = useState(thisService.icon)
    const [mainImage,setMainImage] = useState()
    const [previewMainImage,setPreviewMainImage] = useState(thisService.mainImage)

    const addServiceMainImage = (e) =>{
      const files = Array.from(e.target.files);
      console.log(files)
      setPreviewMainImage('');
      setMainImage(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewMainImage( reader.result);
          
        }
      };
    }

    const addServiceIcon = (e) =>{
      const files = Array.from(e.target.files);
      setPreviewIcon('');
      setIcon(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setPreviewIcon( reader.result);
       
        }
      };
    }

    const addServiceImageGallery = (e) => {
      const files = Array.from(e.target.files);

      console.log(e.target.files[0].name)
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
      
            setPreviewImageGallery((old) => [...old, {id:e.target.files[0].name,image:reader.result}]);
            setImageGallery((old) => [...old, e.target.files[0]]);
         
          }
        };
  
        reader.readAsDataURL(file);
      });
    };

    function deleteImage(image,id) {
      setDbImageGallery(dbImageGallery.filter(item => item != image))
      setPreviewImageGallery(previewImageGallery.filter(item => item.image != image))
      setImageGallery(imageGallery.filter(item=>item.name != id))
    }


    // Reset add New Turnaround Fields 

    const updateThisService = () => {
      if(title.trim() == ""){
        alert.error("Give a name for the service")
        return
      }
      if(paragraphsArr.length == 0){
        alert.error("Give a description paragraph for the service")
        return
      }
      const service = {
        title,
        codeName,
        subHeading,
        points:servicePointsArr,
        description:{'paragraphs':paragraphsArr,'bulletPoints':bulletPointsArr},
        'hoverBoxContents':thisService.hoverBoxContents,
        outline:{
          outlineTitle,
          outlineSubHeading,
          outlineParagraph,
          'outlineBulletPoints':outlineBulletPointsArr
        },
        mainImage:thisService.mainImage,
        icon:thisService.icon,
        imageGallery:dbImageGallery
      }
      dispatch(updateService(service,mainImage,icon,imageGallery,thisService._id))
     
      navigate("/IPC-admin-portal/services")
    }


  return (


    
    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Update Service</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>
            <button onClick={updateThisService} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
        </div>


        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>

          {/* Service Main Image */}

          <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

            {/* Image */}

            <div className='block relative h-fit group'>
              <img src={previewMainImage !== '' ? previewMainImage : noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

              {/* Image Upload Button */}

              <button onClick={() => {document.getElementById("service-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Main Image</button>
            </div>

            {/* Image Upload reference input for Button */}

            <div>
              <input id='service-img-upload' type="file" className='hidden' accept="image/*" onChange={addServiceMainImage}/>
            </div>

          </div>

          {/* Service Icon */}

          <div className='lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

            
            {/* Image */}

            <div className='block relative h-fit group'>
              <img src={previewIcon !== '' ? previewIcon : noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

              {/* Image Upload Button */}

              <button onClick={() => {document.getElementById("service-icon-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Icon</button>
            </div>

            {/* Image Upload reference input for Button */}

            <div>
              <input id='service-icon-upload' type="file" className='hidden' accept="image/*" onChange={addServiceIcon}/>
            </div>

          </div>

        </div>


        {/* Service Image Gallery */}

        <h2 className='text-2xl text-[#397f77] font-semibold mb-5 mt-5'>Image Gallery</h2>
        <button onClick={() => {document.getElementById("service-img-gallery").click()}} className=" bottom-0 shadow-lg w-[200px] rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 ">Add Image to Gallery</button>
        <div>
        
          <input id='service-img-gallery' type="file" className='hidden' accept="image/*" onChange={addServiceImageGallery}/>
        </div>

        <div className='mt-10 flex flex-wrap'> 

          {previewImageGallery.map((item,idx)=>(
            <div key={item.image} className=' m-5'>

          
              {/* Image */}
  
              <div className=' h-fit relative  group'>
                <img src={item.image}  alt="" className=" relative w-full h-64 object-cover rounded-xl" />
                <button onClick={() => deleteImage(item.image,item.id)} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#D10000] text-white hover:bg-[#FF0000] duration-300 lg:hidden md:hidden group-hover:block">Delete</button>
              </div>
  
  
            </div>
          ))}

    

        </div>
        {/* Service Info */}

        <div className='mt-10'>

           {/* Service Name */}

           <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>

              <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={title} onChange={(e)=>setTitle(e.target.value)} required/>
            </div>

             {/* Code Name */}

           <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Code Name</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={codeName} onChange={(e)=>setCodeName(e.target.value)} required/>
            </div>

            {/* Sub Heading */}
            <div className='mb-10'>
              <label htmlFor="service-sub-heading" className='text-2xl text-[#397f77] font-semibold'>Sub Heading</label>

              <input id='service-sub-heading' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={subHeading} onChange={(e)=>setSubHeading(e.target.value)} required/>
            </div>

          {/* Service Points */}

          <div className='mt-5'>

            <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Service Points</h2>


            <table className='w-full'>


              <thead >

                {

                    servicePointsArr.length > 0 && (

                        <tr className='text-gray-600 font-semibold'>

                            <th className='text-left'>Points</th>

                        </tr>

                    )

                }

              </thead>

              <tbody>

                {
                  servicePointsArr.map((item,index) => {
                    return (
                      <tr key={item.id} className=''>

                        <td>
                          <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editServicePoints(index,e.target.value)}  defaultValue={item.point} required />
                        </td>

                        <td className='h-full'>
                          <button onClick={() => deleteServicePoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
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

                      <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setServicePoints(e.target.value)}} value={servicePoints} placeholder='Point' required />
                     

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className='mt-5 w-full mx-auto'>
              <button onClick={addNewServicePoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
            </div>

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

          {/* Description Bulletpoints */}

          <div className='mt-5'>

            <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Description Bulletpoints</h2>


            <table className='w-full'>


              <thead >

                {

                    servicePointsArr.length > 0 && (

                        <tr className='text-gray-600 font-semibold'>

                            <th className='text-left'>Bulletpoints</th>

                        </tr>

                    )

                }

              </thead>

              <tbody>

                {
                  bulletPointsArr.map((item,index) => {
                    return (
                      <tr key={item.id} className=''>

                        <td>
                          <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editBulletPoints(index,e.target.value)}  defaultValue={item.bulletpoint} required />
                        </td>

                        <td className='h-full'>
                          <button onClick={() => deleteBulletPoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
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

                      <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setBulletPoints(e.target.value)}} value={bulletPoints} placeholder='Bulletpoint' required />
                    

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className='mt-5 w-full mx-auto'>
              <button onClick={addNewBulletPoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
            </div>

          </div>



          {/* Outline */}
          
        
          <div className='mt-5'>

            <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Outline of Services</h2>

            <div className='col-span-2'>

              {/* Service Name */}

              <div className='mb-10'>
                <label htmlFor="service-name" className='text-xl text-[#397f77] font-semibold'>Outline Name</label>

                <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={outlineTitle} onChange={(e)=>setOutlineTitle(e.target.value)} required/>
              </div>

              {/* Sub Heading */}
              <div className='mb-10'>
                <label htmlFor="service-sub-heading" className='text-xl text-[#397f77] font-semibold'>Outline Sub Heading</label>

                <input id='service-sub-heading' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={outlineSubHeading} onChange={(e)=>setOutlineSubHeading(e.target.value)} required/>
              </div>
              {/* Outline Description */}


                      

              <div className='mb-10'>
                <label htmlFor="outline-description" className='text-xl text-[#397f77] font-semibold'>Outline Description</label>
                  <textarea id='outline-description' rows="6"  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setOutlineParagraph(e.target.value)}} value={outlineParagraph} placeholder='Description' required />
                
              </div>

            </div>


            <table className='w-full'>


              <thead >

                {

                    outlineBulletPointsArr.length > 0 && (

                        <tr className='text-gray-600 font-semibold'>

                            <th className='text-left'>Bulletpoints</th>

                        </tr>

                    )

                }

              </thead>

              <tbody>

                {
                  outlineBulletPointsArr.map((item,index) => {
                    return (
                      <tr key={item.id} className=''>

                        <td>
                          <input disabled type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editOutlineBulletPoints(index,e.target.value)}  defaultValue={item.bulletpoint} required />
                        </td>

                        <td className='h-full'>
                          <button onClick={() => deleteOutlineBulletPoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                        </td>

                      </tr>
                    )
                  })
                } 

              </tbody>

            </table>



            <div className=' mt-5 '>


              <h2 className='text-lg text-[#397f77] font-semibold' >Outline Bulletpoints</h2>

              <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                <tbody>

                  <tr className=' text-gray-600 font-semibold'>

                    <td>

                      <input id='new-service-point' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setOutlineBulletPoints(e.target.value)}} value={outlineBulletPoints} placeholder='Bulletpoint' required />
                    

                    </td>

                  </tr>

                </tbody>

              </table>

          </div>

          <div className='mt-5 w-full mx-auto'>
            <button onClick={addNewOutlineBulletPoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
          </div>

          </div>

        </div>

    </div>


  )
}

export default AdminServiceEditSection