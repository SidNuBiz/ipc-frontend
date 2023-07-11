import React from 'react'
import noImg from '../../../assets/no-img.jpg'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../actions/productAction";
import { v4 as uuidv4 } from 'uuid';
import RichTextEditor from '../Misc/RichTextEditor'

const AdminServiceCreateSection = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // var newService = {
    //   name: '',
    //   image: '',
    //   // price: '',
    //   description: '',
    //   // turnaroundTypes: [],
    //   // strains: []
    // }

    const[newTurnaroundTitle,setNewTrunaorundTitle] = useState('')
    const[newTurnaroundTurnaround,setNewTrunaorundTurnaround] = useState('')
    const[newTurnaroundAddonPrice,setNewTrunaorundAddonPrice] = useState(0)

    const[newStrainsTitle,setNewStrainsTitle] = useState('')
    const[newStrainsAddonPrice,setNewStrainsAddonPrice] = useState(0)

    const[title,setTitle] = useState('')
    const[subHeading,setSubHeading] = useState('')
    const[description,setDescription] = useState('')
    const[image,setImage] = useState()
    const[previewImage,setPreviewImage] = useState('')


    //Service Points

    const [servicePointsArr,setServicePointsArr] = useState([])
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


    // Description Bulletpoints

    const [bulletPointsArr,setBulletPointsArr] = useState([])
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
    const [hoverBoxContentArr,setHoverBoxContentArr]=useState([])
    const [hoverBoxBackgroundImg,setHoverBoxBackgroundImg] = useState('')
    const [hoverBoxTitle,setHoverBoxTitle] = useState('')
    const [hoverBoxDescription,setHoverBoxDescription] = useState('')
    const [hoverBoxBulletPointsArr,setHoverBoxBulletPointsArr] = useState([])
    const [hoverBoxBulletPoints,setHoverBoxBulletPoints] = useState('')

    const addNewHoverBoxContent = () => {
      let newHoverBoxContentArr = [...hoverBoxContentArr]   
      newHoverBoxContentArr.push({id:uuidv4(),hoverBoxTitle,hoverBoxBackgroundImg,hoverBoxDescription,hoverBoxBulletPoints})
      setHoverBoxTitle('')
      setHoverBoxDescription('')
      setHoverBoxBackgroundImg('')
      setHoverBoxBulletPoints('')
      hoverBoxBulletPointsArr([])
      setHoverBoxContentArr(newHoverBoxContentArr)
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

    // Image Gallery

    const [imageGallery,setImageGallery] = useState([])

    // Outline
    const [outlineTitle,setOutlineTitle] = useState([])
    const [outlineParagrapsh,setOutlineParagraph] = useState('')
    const [outlineSubHeading,setOutlineSubHeading] = useState('')
    const [outlineBulletPoints,setOutlineBulletPoints] = useState('')
    const [outlineBulletPointsArr,setOutlineBulletPointsArr] = useState([])

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


  
    let [turnaroundTypes,setTurnaroundTypes] = useState([])
    let [strains,setStrains] = useState([])




    // Reset add New Turnaround Fields 

    const resetNewTurnaround = () => {

        document.getElementById("new-turnaround-title").value = "";
        document.getElementById("new-turnaround-turnaround").value = "";
        document.getElementById("new-turnaround-addonprice").value = 0;
  
      }
  
      // Reset add New Strain Fields
  
      const resetNewStrain = () => {
  
       
        document.getElementById("new-strain-addonprice").value = 0;
  
      }




      const addNewTurnaroundType = () => {
        if(turnaroundTypes.length === 0){
          setTurnaroundTypes([...turnaroundTypes,{
            title:newTurnaroundTitle,
            turnaround:newTurnaroundTurnaround,
            addOnPrice:newTurnaroundAddonPrice
          }])
        }
        if(turnaroundTypes.some(item => item.title === newTurnaroundTitle)){
          console.log('Same name can not be added twice')
  
        }else{
          setTurnaroundTypes([...turnaroundTypes,{
            title:newTurnaroundTitle,
            turnaround:newTurnaroundTurnaround,
            addOnPrice:newTurnaroundAddonPrice
          }])
          
        }
      }
  
      const addNewStrains = () => {
        if(strains.length === 0){
          setStrains([...strains,{
            title:newStrainsTitle,
            addOnPrice:newStrainsAddonPrice
          }])
        }

        if(strains.some(item => item.title === newStrainsTitle)){
          console.log('Same name can not be added twice')
        }else{
          setStrains([...strains,{
          title:newStrainsTitle,
          addOnPrice:newStrainsAddonPrice
        }])
        }
      }
  
      const editTurnaroundTypes = (idx,value,type) => {
        let editedTurnaroundTypes = turnaroundTypes
        editedTurnaroundTypes[idx][type] = value
        setTurnaroundTypes(editedTurnaroundTypes)
      }
  
      const editStrains = (idx,value,type) => {
        let editedStrains = strains
        editedStrains[idx][type] = value
        setStrains(editedStrains)
      }
  
      const deleteTurnaroundType = (title) => {
        setTurnaroundTypes(
          turnaroundTypes.filter((item) => item.title !== title)
        )
      }
  
      const deleteStrains = (title) => {
        setStrains(
          strains.filter((item) => item.title !== title)
        );
      }

      const addProductImage = (e) =>{
        const files = Array.from(e.target.files);
        setPreviewImage('');
        setImage(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPreviewImage( reader.result);
          }
        };
      }

      const addThisProduct = () => {
        console.log({
          title,
          subHeading,
          servicePointsArr,
          description:{paragraphsArr,bulletPointsArr},
          hoverBoxContentArr,
          outline:{
            outlineTitle,
            outlineSubHeading,
            outlineParagrapsh,
            outlineBulletPointsArr
          }
        })
        // dispatch(createProduct({title,description},image))
        // navigate("/IPC-admin-portal/services")
      }

  return (

    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Create New Service</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={addThisProduct} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Create</button>
        </div>


        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>

          {/* Service Image */}

          <div className=' lg:col-span-1 md:col-span-1 sm:col-span-2 h-full shadow-lg'>

            {/* Image */}

            <div className='block relative h-fit group'>
              <img src={previewImage !== '' ? previewImage : noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

              {/* Image Upload Button */}

              <button onClick={() => {document.getElementById("service-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Image</button>
            </div>

            {/* Image Upload reference input for Button */}

            <div>
              <input id='service-img-upload' type="file" className='hidden' accept="image/*" onChange={addProductImage}/>
            </div>

          </div>

          {/* Service Info */}

          <div className='col-span-2'>

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

          </div>

        </div>

        {/* Service Description & Options */}

        <div className='mt-10'>

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

                      <input  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxTitle(e.target.value)}} value={servicePoints} placeholder='Title' required />
                      <textarea row="6"  type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setHoverBoxDescription(e.target.value)}} value={servicePoints} placeholder='Description' required />
                    
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

            </div>


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























          {/* Service Description */}

          {/* <div className='mb-10'>

            <label htmlFor="service-description" className='text-2xl text-[#397f77] font-semibold'>Description</label>

            <div className='mt-5'>
              <RichTextEditor value={description} setValue={setDescription} required/>
              <textarea name="" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={description} onChange={(e)=>setDescription(e.target.value)}cols="100" rows="10"></textarea>
            </div>

          </div>

       

          <div className='mt-20'>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>

     

              <div className='mt-5 w-full'>

                
                
                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Turnaround</h2>

             

                <table className='w-full'>

   

                  <thead >

                    {

                        turnaroundTypes.length > 0 && (

                            <tr className='text-gray-600 font-semibold'>

                                <th className='text-left'>Title</th>

                                <th className='text-left'>Turnaround</th>

                                <th className='text-left'>(C$) Add On Price</th>

                            </tr>

                        )

                    }

                  </thead>

                  <tbody>

                    {
                      turnaroundTypes.map((turnaround, index) => {
                        return (
                          <tr key={turnaround.title} className=''>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editTurnaroundTypes(index,e.target.value,'title')} defaultValue={turnaround.title} required />
                            </td>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editTurnaroundTypes(index,e.target.value,'turnaround')} defaultValue={turnaround.turnaround} required />
                            </td>

                            <td>
                              <input type="number" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editTurnaroundTypes(index,e.target.value,'addOnPrice')} defaultValue={turnaround.addOnPrice} required />
                            </td>

                            <td>
                              <button onClick={() => deleteTurnaroundType(turnaround.title)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-3'/></button>
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

                          <input id='new-turnaround-title' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' placeholder='Title' onChange={(e) => {setNewTrunaorundTitle(e.target.value)}} required />

                        </td>

                        <td>

                          <input id='new-turnaround-turnaround' type="text" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setNewTrunaorundTurnaround(e.target.value)}} placeholder='Turnaround' required />

                        </td>

                        <td>

                          <input id='new-turnaround-addonprice' type="number" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setNewTrunaorundAddonPrice(e.target.value)}} placeholder='(C$) Add On Price' required />

                        </td>

                        <td>
                          <button type='button' onClick={() => resetNewTurnaround()} className="text-white rounded-lg h-full w-full"><img src="https://img.icons8.com/ios-filled/28/397f77/update-left-rotation.png" alt="" className='h-[28px] w-[28px] m-3 hover:rotate-180 duration-300'/></button>
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

              

                <div className='mt-5 w-full mx-auto'>
                  <button onClick={addNewTurnaroundType} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>


          

              <div className='mt-5'>

                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Strains</h2>


                <table className='w-full'>

            
                  <thead >

                    {

                        strains.length > 0 && (

                            <tr className='text-gray-600 font-semibold'>

                                <th className='text-left'>Title</th>

                                <th className='text-left'>(C$) Add On Price</th>

                            </tr>

                        )

                    }

                  </thead>

                  <tbody>

                    {
                      strains.map((strain,index) => {
                        return (
                          <tr key={strain.title} className=''>

                            <td>
                              <input type="text" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editStrains(index,e.target.value,'title')}  defaultValue={strain.title} required />
                            </td>

                            <td>
                              <input type="number" className='mr-2 w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e)=>editStrains(index,e.target.value,'addOnPrice')}  defaultValue={strain.addOnPrice} required />
                            </td>

                            <td className='h-full'>
                              <button onClick={() => deleteStrains(strain.title)} className="text-white rounded-lg hover:scale-125 duration-300 h-full w-full"><img src="https://img.icons8.com/windows/35/c70000/trash.png" alt="" className='h-[28px] w-[28px] m-2'/></button>
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

                          <input id='new-strain-title' type="text" className=' mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setNewStrainsTitle(e.target.value)}} placeholder='Title' required />

                        </td>

                        <td>

                          <input id='new-strain-addonprice' type="number" className='new-turnaround mr-2 w-full bg-white mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' onChange={(e) => {setNewStrainsAddonPrice(e.target.value)}} placeholder='(C$) Add On Price' required />

                        </td>

                        <td>
                            <button type='button' onClick={() => resetNewStrain()} className="text-white rounded-lg h-full w-full"><img src="https://img.icons8.com/ios-filled/28/397f77/update-left-rotation.png" alt="" className='h-[28px] w-[28px] m-3 hover:rotate-180 duration-300'/></button>
                        </td>

                      </tr>

                    </tbody>

                  </table>

                </div>

         

                <div className='mt-5 w-full mx-auto'>
                  <button onClick={addNewStrains} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>

            </div>

          </div> */}

        </div>

      </div>

  )
}

export default AdminServiceCreateSection