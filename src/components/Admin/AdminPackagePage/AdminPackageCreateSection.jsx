import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPackage } from "../../../actions/packageAction";
import { useAlert } from 'react-alert';
import axios from 'axios';
import url from '../../../utils/baseApi';
import noImg from '../../../assets/no-img.jpg'

const AdminPackageCreateSection = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const alert = useAlert()

  const [searchKey, setSearchKey] = useState("")
  const [matrixSearchKey, setMatrixSearchKey] = useState("")

  const {analyses} = useSelector(state => state.analyses)
  const [matrixArr,setMatrixArr] = useState([])

  const [name, setName] = useState("");
  const [testingCode, setTestingCode] = useState("");
  const [categories, setCategories] = useState("");
  const [type, setType] = useState("");
  const [componentList, setComponentList] = useState("")
  const [packageMatrix, setPackageMatrix] = useState([])
  const [description, setDescription] = useState("");
  const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState("");
  const [uspAmtReq, setUspAmtReq] = useState(0);
  const [euAmtReq, setEuAmtReq] = useState(0);
  const [standardPricing, setStandardPricing] = useState(0);
  const [rushedPricing, setRushedPricing] = useState(0);
  const [urgentPricing, setUrgentPricing] = useState(0);
  const [unit, setUnit] = useState("");
  const [packageTests,setPackageTests] = useState([])

  const [mainImage,setMainImage] = useState()
  const [previewMainImage,setPreviewMainImage] = useState('')

  const addPackageMainImage = (e) =>{
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

  const addTestToPackage = (analysis) => {
    let con = true
    packageTests.forEach((analysisTest)=>{
      if(analysisTest._id === analysis._id){
        alert.error(analysis.name+' is already included')
        con = false
      }
    })
    if(con){
      setPackageTests([...packageTests,analysis]) 
    }
    
  }

  const deleteTestFromPackage = (id) => {
    setPackageTests([...packageTests.filter((analysis)=>analysis._id != id)])
  }

  const addMatrixToPackage = (matrix) => {
    let con = true
    packageMatrix.forEach((item)=>{
      if(item._id === matrix._id){
        alert.error(matrix.name +' is already included')
        con = false
      }
    })
    if(con){
      setPackageMatrix([...packageMatrix,matrix])
    }
  }

  const deleteMatrixFromPackage = (id) => {
    setPackageMatrix([...packageMatrix.filter((matrix)=>matrix._id != id)])
  }

  const addThisPackage = () => {

    const pack = {
      name,
      img:"no-img",
      testingCode,
      categories,
      type,
      componentList:componentList == "" ? null : componentList,
      matrixForm:packageMatrix,
      description,
      uspNotUsedHeldDescOnly:uspNotUsedHeldDescOnly == "" ? null : uspNotUsedHeldDescOnly,
      uspAmtReq:uspAmtReq == 0 ? null : uspAmtReq,
      euAmtReq:euAmtReq == 0 ? null : euAmtReq,
      standardPricing,
      rushedPricing,
      urgentPricing,
      unit,
      packageTests
    }
    dispatch(createPackage(pack,mainImage))
    navigate("/IPC-admin-portal/packages")
  }

  async function fetchData(){
    const {data} =  await axios.get(`${url}/api/v1/matrix/all`)
    setMatrixArr(data.matrix)
  }

  useEffect(() => {
      fetchData()
  }, []);

  useEffect(()=>{

  },[packageTests.length,matrixArr.length])

  return (

    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Create New Package</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={addThisPackage} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Create Package</button>
        </div>

        {/* Service Main Image */}

        <div className='h-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5'>

          {/* Image */}

          <div className='block relative h-fit group'>
            <img src={previewMainImage !== '' ? previewMainImage : noImg} alt="" className=" relative w-full h-64 object-cover rounded-xl" />

            {/* Image Upload Button */}

            <button onClick={() => {document.getElementById("package-img-upload").click()}} className=" absolute bottom-0 shadow-lg w-full rounded-xl px-5 py-3 bg-[#397f77] text-white hover:bg-[#18debb] duration-300 lg:hidden md:hidden group-hover:block">Change Main Image</button>
          </div>

          {/* Image Upload reference input for Button */}

          <div>
            <input id='package-img-upload' type="file" className='hidden' accept="image/*" onChange={addPackageMainImage}/>
          </div>

        </div>
        

        {/* Service Info */}

        <div className='mt-10'>

           {/* Service Name */}

           <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Name</label>

              <input id='service-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            {/* Code Name */}

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Testing Code</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={testingCode} onChange={(e)=>setTestingCode(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Type</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={type} onChange={(e)=>setType(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Component List</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={componentList} onChange={(e)=>setComponentList(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Added Matrix Form</label>
            </div>

            {packageMatrix.map((matrix,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{matrix.name}</h2>
                <button onClick={() => deleteMatrixFromPackage(matrix._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}

            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="service-name" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Matrix</label>
              <input type="text" placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={matrixSearchKey} onChange={(e)=>setMatrixSearchKey(e.target.value)} />

            </div>
            
            {matrixArr && matrixArr.filter( matrix => matrix.name.toLowerCase().includes(matrixSearchKey.toLowerCase())).map((matrix,idx) => (

              matrixSearchKey.length > 0 ?<>
                <div className='m-5 flex'>
                  <span className='pr-2'>&#8226;</span>
                  <h2>{matrix.name}</h2>
                  <button onClick={() => addMatrixToPackage(matrix)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                </div>
              </>:<></>

            ))}
            <div className='mb-10'></div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Categories</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={categories} onChange={(e)=>setCategories(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Description</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={description} onChange={(e)=>setDescription(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>USP Not Used Held Desc Only</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={uspNotUsedHeldDescOnly} onChange={(e)=>setUspNotUsedHeldDescOnly(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>USP Amount Required</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={uspAmtReq} onChange={(e)=>setUspAmtReq(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>EU Amount Required</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={euAmtReq} onChange={(e)=>setEuAmtReq(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Standard Price</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricing} onChange={(e)=>setStandardPricing(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Rushed Price</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricing} onChange={(e)=>setRushedPricing(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Urgent Price</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={urgentPricing} onChange={(e)=>setUrgentPricing(e.target.value)} required/>
            </div>
            
            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Unit</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={unit} onChange={(e)=>setUnit(e.target.value)} required/>
            </div>

            <h1 className='text-2xl  text-[#397f77] font-semibold'>Added Tests</h1>

            {packageTests.map((analysis,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{analysis.name}</h2>
                <button onClick={() => deleteTestFromPackage(analysis._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}


            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="service-name" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Test</label>
              <input type="text" placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

            </div>
            
            {analyses && analyses.filter( analysis => analysis.name.toLowerCase().includes(searchKey.toLowerCase())).map((analysis,idx) => (
              
                searchKey.length > 0 ?<>
                  <div className='m-5 flex'>
                    <span className='pr-2'>&#8226;</span>
                    <h2>{analysis.name}</h2>
                    <button onClick={() => addTestToPackage(analysis)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                  </div>
                </>:<></>
              
            ))}
            
         
        </div>

        <div className="mt-10 flex justify-center">
           
            <button onClick={addThisPackage} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Create Package</button>
        </div>

    </div>

  )
}

export default AdminPackageCreateSection