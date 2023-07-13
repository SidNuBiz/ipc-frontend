import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { useAlert } from 'react-alert';
import noImg from '../../../assets/no-img.jpg'
import { updateService,getService } from "../../../actions/serviceAction";

const AdminServiceEditSection = ({thisService}) => {
 
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const alert = useAlert()

    const[title,setTitle] = useState(thisService.title)
    const[subHeading,setSubHeading] = useState(thisService.subHeading)


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


    // Hover box content
    const [hoverBoxContentArr,setHoverBoxContentArr]=useState(thisService.hoverBoxContents)
    const [hoverBoxBackgroundImg,setHoverBoxBackgroundImg] = useState('')
    const [hoverBoxTitle,setHoverBoxTitle] = useState('')
    const [hoverBoxDescription,setHoverBoxDescription] = useState('')
    const [hoverBoxBulletPointsArr,setHoverBoxBulletPointsArr] = useState([])
    const [hoverBoxBulletPoints,setHoverBoxBulletPoints] = useState('')

    const addNewHoverBoxContent = () => {
      let newHoverBoxContentArr = [...hoverBoxContentArr]   
      newHoverBoxContentArr.push({id:uuidv4(),hoverBoxTitle,hoverBoxBackgroundImg,hoverBoxDescription,hoverBoxBulletPointsArr})
      setHoverBoxContentArr(newHoverBoxContentArr)
      setHoverBoxTitle('')
      setHoverBoxDescription('')
      setHoverBoxBackgroundImg('')
      setHoverBoxBulletPoints('')
      setHoverBoxBulletPointsArr([])
      
    }

    const editHoverBoxContent = (idx,value,key) => {
      let editedHoverBoxContentArr = servicePointsArr
      editedHoverBoxContentArr[idx].key = value
      setHoverBoxContentArr(editedHoverBoxContentArr)
    }

    const deleteHoverBoxContent = (value) => {
      setHoverBoxContentArr(
        hoverBoxContentArr.filter((item) => item.id !== value)
      );
    }


    
    const addNewHoverBoxBulletPoint = () => {
      let newHoverBoxBulletPointsArr = [...hoverBoxBulletPointsArr]   
      newHoverBoxBulletPointsArr.push({id:uuidv4(),bulletpoint:hoverBoxBulletPoints})
      setHoverBoxBulletPoints('')
      setHoverBoxBulletPointsArr(newHoverBoxBulletPointsArr)
    }

    // const editHoverBoxBulletPoints = (idx,value) => {
    //   let editedHoverBoxBulletPointsArr = hoverBoxBulletPointsArr
    //   editedHoverBoxBulletPointsArr[idx].bulletpoint = value
    //   setHoverBoxBulletPointsArr(editedHoverBoxBulletPointsArr)
    // }

    // const deleteHoverBoxBulletPoints = (value) => {
    //   setHoverBoxBulletPointsArr(
    //     hoverBoxBulletPointsArr.filter((item) => item.id !== value)
    //   );
    // }


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

    const [imageGallery,setImageGallery] = useState([])
    const [previewImageGallery,setPreviewImageGallery] = useState(thisService.imageGallery)
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

  
      files.forEach((file) => {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPreviewImageGallery((old) => [...old, reader.result]);
            setImageGallery((old) => [...old, e.target.files[0]]);
          }
        };
  
        reader.readAsDataURL(file);
      });
    };


    // Reset add New Turnaround Fields 

    const addThisProduct = () => {
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
        subHeading,
        points:servicePointsArr,
        description:{'paragraphs':paragraphsArr,'bulletPoints':bulletPointsArr},
        'hoverBoxContents':hoverBoxContentArr,
        outline:{
          outlineTitle,
          outlineSubHeading,
          outlineParagraph,
          'outlineBulletPoints':outlineBulletPointsArr
        },
        mainImage:thisService.mainImage,
        icon:thisService.icon,
        imageGallery:thisService.imageGallery
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

            <button onClick={addThisProduct} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
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

          {previewImageGallery.map(image=>(
            <div className=' m-5'>

          
              {/* Image */}
  
              <div className=' h-fit '>
                <img src={image} alt="" className=" relative w-full h-64 object-cover rounded-xl" />
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


          {/* Hover Box Content */}


          <div className='mt-5'>

            <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Hover Box Content</h2>


            <table className='w-full'>


              <thead >

                {

                    hoverBoxContentArr.length > 0 && (

                        <tr className='text-gray-600 font-semibold'>

                            <th className='text-left'>Hover box</th>

                        </tr>

                    )

                }

              </thead>

              <tbody>

                {
                  hoverBoxContentArr.map((item,index) => {
                    return (
                      <tr key={item.id} className=''>

                        <td>
                          <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editHoverBoxContent(index,e.target.value,'hoverBoxTitle')}  defaultValue={item.hoverBoxTitle} required />
                        </td>
                        <td>
                          <textarea row="6" type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editHoverBoxContent(index,e.target.value,'hoverBoxDescription')}  defaultValue={item.hoverBoxDescription} required />
                        </td>
                        {/* <td>
                          <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editHoverBoxContent(index,e.target.value)}  defaultValue={item.point} required />
                        </td> */}

                      {
                        item.hoverBoxBulletPointsArr.map((item,index) => {
                          return (
                              <tr key={item.id} className=''>

                                <td>
                                  <input disabled type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editBulletPoints(index,e.target.value)}  defaultValue={item.bulletpoint} required />
                                </td>

                                {/* <td className='h-full'>
                                  <button onClick={() => deleteBulletPoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                                </td> */}

                              </tr>
                            )
                          })
                        } 

                        <td className='h-full'>
                          <button onClick={() => deleteHoverBoxContent(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
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

                      <input  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxTitle(e.target.value)}} value={hoverBoxTitle} placeholder='Title' required />
                      <textarea row="6"  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxDescription(e.target.value)}} value={hoverBoxDescription} placeholder='Description' required />
                    
                      <div className='mt-5 px-[80px]'>

                        <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Hover Box Bulletpoints</h2>


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
                                      <input disabled type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editBulletPoints(index,e.target.value)}  defaultValue={item.bulletpoint} required />
                                    </td>

                                    {/* <td className='h-full'>
                                      <button onClick={() => deleteBulletPoints(item.id)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
                                    </td> */}

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

                      </div>

                      <div className='mt-5 w-full mx-auto'>
                        <button onClick={addNewHoverBoxBulletPoint} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                      </div>

                      </div>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

            <div className='mt-5 w-full mx-auto'>
              <button onClick={addNewHoverBoxContent} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
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