import React from 'react'
import noImg from '../../../assets/no-img.jpg'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../actions/productAction";
import RichTextEditor from '../Misc/RichTextEditor'

const AdminServiceCreateSection = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    var newService = {
      name: '',
      image: '',
      price: '',
      description: '',
      turnaroundTypes: [],
      strains: []
    }

    const[newTurnaroundTitle,setNewTrunaorundTitle] = useState('')
    const[newTurnaroundTurnaround,setNewTrunaorundTurnaround] = useState('')
    const[newTurnaroundAddonPrice,setNewTrunaorundAddonPrice] = useState(0)

    const[newStrainsTitle,setNewStrainsTitle] = useState('')
    const[newStrainsAddonPrice,setNewStrainsAddonPrice] = useState(0)

    const[name,setName] = useState('')
    const[image,setImage] = useState()
    const[previewImage,setPreviewImage] = useState('')
    const[price,setPrice] = useState(0)
    const[description,setDescription] = useState('')
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
  
        document.getElementById("new-strain-title").value = "";
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
        dispatch(createProduct({name,price,description,turnaroundTypes,strains},image))
        navigate("/IPC-admin-portal/services")
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

              <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            {/* Service Price */}

            <div className=''>
              
              <label htmlFor="service-price" className='text-2xl text-[#397f77] font-semibold'>Price(C$)</label>

              <input id='service-price' type="number" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={price} onChange={(e)=>setPrice(e.target.value)} required/>

            </div>

          </div>

        </div>

        {/* Service Description & Options */}

        <div className='mt-10'>

          {/* Service Description */}

          <div className='mb-10'>

            <label htmlFor="service-description" className='text-2xl text-[#397f77] font-semibold'>Description</label>

            <div className='mt-5'>
              <RichTextEditor value={description} setValue={setDescription} required/>
            </div>

          </div>

          {/* Service Options */}

          <div className='mt-20'>

            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>

              {/* Turnaround */}

              <div className='mt-5 w-full'>

                {/* Heading */}
                
                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Turnaround</h2>

                {/* list */}

                <table className='w-full'>

                  {/* Table Heading */}

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

                {/* New Turnaround input */}

                <div className=' mt-5 '>

                  {/* Heading */}

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

                {/* Add Button */}

                <div className='mt-5 w-full mx-auto'>
                  <button onClick={addNewTurnaroundType} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>


              {/* Strains */}

              <div className='mt-5'>

                {/* Heading */}
                
                <h2 className='text-2xl text-[#397f77] font-semibold mb-5'>Strains</h2>

                {/* list */}

                <table className='w-full'>

                  {/* Table Heading */}

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

                {/* New strain input */}

                <div className=' mt-5 '>

                  {/* Heading */}

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

                {/* Add Button */}

                <div className='mt-5 w-full mx-auto'>
                  <button onClick={addNewStrains} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

  )
}

export default AdminServiceCreateSection