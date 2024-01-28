import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePackage } from "../../../actions/packageAction";
import { useAlert } from 'react-alert';
import axios from 'axios';
import url from '../../../utils/baseApi';
import noImg from '../../../assets/no-img.jpg'
import { v4 as uuidv4 } from 'uuid';

const AdminPackageEditSection = ({thisPackage}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const [searchKey, setSearchKey] = useState("")
    const [matrixSearchKey, setMatrixSearchKey] = useState("")

    const [name, setName] = useState(thisPackage.name);
    const [testingCode, setTestingCode] = useState(thisPackage.testingCode);
    const [categories, setCategories] = useState(thisPackage.categories);
    const [type, setType] = useState(thisPackage.type.toString());
    const [componentList, setComponentList] = useState(thisPackage.componentList)
    const [packageMatrix, setPackageMatrix] = useState(thisPackage.matrixForm);
    const [description, setDescription] = useState(thisPackage.description);
    const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState(thisPackage.uspNotUsedHeldDescOnly == "" ? null : thisPackage.uspNotUsedHeldDescOnly);
    const [standardPricing, setStandardPricing] = useState(thisPackage.standardPricing);
    const [rushedPricing, setRushedPricing] = useState(thisPackage.rushedPricing);
    const [urgentPricing, setUrgentPricing] = useState(thisPackage.urgentPricing);
    const [unit, setUnit] = useState(thisPackage.unit);
    const [packageTests,setPackageTests] = useState(thisPackage.packageTests)

    // Adding image to package
    const [mainImage,setMainImage] = useState()
    const [previewMainImage,setPreviewMainImage] = useState(thisPackage.img)

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

    // Adding tests to package state and functions
    const {analyses} = useSelector(state => state.analyses)
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

    // Adding matrix to package state and functions
    const [matrixArr,setMatrixArr] = useState([])
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

    //Adding methods to package state and functions
    const [methodsArr,setMethodsArr] = useState(thisPackage.methods)
    const [methodName,setMethodName] = useState('')
    const [methodAmount,setMethodAmount] = useState(0)
    
    const addNewMethod = () => {
      if(methodName == ""){
        alert.error("Method name is required")
        return
      }
      let newMethodsArr = [...methodsArr]   
      newMethodsArr.push({id:uuidv4(),name:methodName,amount:methodAmount})
      setMethodName('')
      setMethodAmount(0)
      setMethodsArr(newMethodsArr)
    }

    const editMethod = (idx,value,label) => {
      if(value == ""){
        alert.error(label+" is required")
        return
      }
      let editedMethodsArr = methodsArr
      editedMethodsArr[idx][label] = value
      setMethodsArr(editedMethodsArr)
    }

    const deleteMethod = (value) => {
      setMethodsArr(
        methodsArr.filter((item) => item.id !== value)
      );
    }

    const updateThisPackage = () => {
      if(name.trim() == "" || testingCode.trim() == "" || categories.trim() == "" || type.trim() == "" || componentList.trim() == "" || description.trim() == "" || uspNotUsedHeldDescOnly.trim() == "" || standardPricing == 0 || rushedPricing == 0 || urgentPricing == 0 || unit.trim() == "" ){
        alert.error("All required fields must be filled")
        return
      }
  
      if(methodsArr.length == 0){
        return alert.error("At least one method is required")
      }
  
      if(matrixArr.length == 0){
        return alert.error("At least one matrix is required")
      }
  
      if(packageTests.length == 0){
        return alert.error("At least one test is required in the package")
      }
      const pack = {
       name,
       img:thisPackage.img,
       testingCode,
       categories,
       type,
       componentList:componentList == "" ? null : componentList,
       matrixForm:packageMatrix,
       description,
       uspNotUsedHeldDescOnly:uspNotUsedHeldDescOnly == "" ? null : uspNotUsedHeldDescOnly,
       methods:methodsArr,
       standardPricing,
       rushedPricing,
       urgentPricing,
       unit,
       packageTests
      }
      dispatch(updatePackage(pack,mainImage,thisPackage._id))
      navigate("/IPC-admin-portal/packages")
    }

    async function fetchData(){
      try{
        const {data} =  await axios.get(`${url}/api/v1/matrix/all`)
        setMatrixArr(data.matrix)
      }catch(error){
        alert.error(error.response.data.message)
      }
      
    }
  
    useEffect(() => {
        fetchData()
    }, []);
  

  return (

    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Update Package</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={updateThisPackage} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Update Package</button>
        </div>

        {/* Package Main Image */}

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


        <div className='mt-10'>

           {/* Package Name Edit*/}
           <div className='mb-10'>
              <label htmlFor="package-name-edit" className='text-2xl text-[#397f77] font-semibold'>Name</label>

              <input id='package-name-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

             {/* Package Unique code Edit */}
            <div className='mb-10'>
              <label htmlFor="package-code-edit" className='text-2xl text-[#397f77] font-semibold'>Testing Code</label>

              <input id='package-code-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={testingCode} onChange={(e)=>setTestingCode(e.target.value)} required/>
            </div>

            {/* Package Type Edit */}
            <div className='mb-10'>
              <label htmlFor="package-type-edit" className='text-2xl text-[#397f77] font-semibold'>Type</label>

              <input id='package-type-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={type} onChange={(e)=>setType(e.target.value)} required/>
            </div>

            {/* Package Component List Edit */}
            <div className='mb-10'>
              <label htmlFor="ackage-component-edit" className='text-2xl text-[#397f77] font-semibold'>Component List</label>

              <input id='ackage-component-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={componentList} onChange={(e)=>setComponentList(e.target.value)} required/>
            </div>

            {/* Package Matrix Form Edit */}
            <div className='mb-10'>
              <label htmlFor="package-matrix-list-edit" className='text-2xl text-[#397f77] font-semibold'>Added Matrix Form</label>
            </div>

            {packageMatrix.map((matrix,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{matrix.name}</h2>
                <button onClick={() => deleteMatrixFromPackage(matrix._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}

            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="package-matrix-edit" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Matrix</label>
              <input type="text" id='package-matrix-edit' placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={matrixSearchKey} onChange={(e)=>setMatrixSearchKey(e.target.value)} />

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
  
            {/* Package Categories Edit */}
            <div className='mb-10'>
              <label htmlFor="package-categories-edit" className='text-2xl text-[#397f77] font-semibold'>Categories</label>

              <input id='package-categories-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={categories} onChange={(e)=>setCategories(e.target.value)} required/>
            </div>

            {/* Package Description Edit */}
            <div className='mb-10'>
              <label htmlFor="package-description-edit" className='text-2xl text-[#397f77] font-semibold'>Description</label>

              <input id='package-description-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={description} onChange={(e)=>setDescription(e.target.value)} required/>
            </div>

             {/* Package USP Not Used Held Desc Only Edit */}
            <div className='mb-10'>
              <label htmlFor="package-usp-edit" className='text-2xl text-[#397f77] font-semibold'>USP Not Used Held Desc Only</label>

              <input id='package-usp-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={uspNotUsedHeldDescOnly} onChange={(e)=>setUspNotUsedHeldDescOnly(e.target.value)} required/>
            </div>

            {/* Package Methods Edit */}
            <div className='my-5'>


              <table className='w-full'>


                <thead >

                  {

                      methodsArr.length > 0 && (

                          <tr className='text-gray-600 font-semibold'>

                              <th className='text-left'><h2 className=' underline text-2xl text-[#397f77] font-semibold mb-2'>Testing Methods</h2></th>
                              

                          </tr>

                      )

                  }

                </thead>

                <tbody>

                  {
                    methodsArr.map((item,index) => {
                      return (
                        <tr key={item.id} className=''>

                          <div className='my-5'>
                            <label htmlFor="package-method-name-edit" className='text-xl text-[#397f77] font-semibold'>Method Name</label>

                            <input id='package-method-name-edit' type="text" className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.name} onChange={(e)=>editMethod(index,e.target.value,'name')} required/>
                          </div>

                          <div >
                            <label htmlFor="package-amount-required-edit" className='text-xl text-[#397f77] font-semibold'>Amount Required</label>

                            <input id='package-amount-required-edit' type="number" min={0} className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.amount} onChange={(e)=>editMethod(index,e.target.value,'amount')} required/>
                          </div>

                          <button onClick={() => deleteMethod(item.id)} className=" my-5 bg-[#D10000] text-white px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#FF0000]  duration-300">Delete</button>

                        </tr>
                      )
                    })
                  } 

                </tbody>

              </table>

              <div className=' mt-5 '>

                <h2 className='text-2xl text-[#397f77] font-semibold' >Add Method</h2>

                <table className='w-full pt-1 mt-1 border-t-[1px] border-t-slate-300'>

                  <tbody>

                    <tr className=' text-gray-600 font-semibold'>

                      <td>

                          <div className='mb-10'>
                            <label htmlFor="package-method-name-edit" className='text-xl text-[#397f77] font-semibold'>Method Name</label>

                            <input id='package-method-name-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={methodName} placeholder='Name' onChange={(e)=>setMethodName(e.target.value)} required/>
                          </div>

                          <div className='mb-10'>
                            <label htmlFor="package-amount-required-edit" className='text-xl text-[#397f77] font-semibold'>Amount Required</label>

                            <input id='package-amount-required-edit' type="number" min={0} className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={methodAmount} placeholder={0} onChange={(e)=>setMethodAmount(e.target.value)} required/>
                          </div>
                      
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

              <div className=' w-full mx-auto'>
                <button onClick={addNewMethod} className='bg-[#397f77] px-10 py-2 rounded-xl text-white text-xl font-semibold duration-300 hover:bg-[#18debb] w-full '>+Add</button>
              </div>

            </div>

            {/* Package Standard Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="package-standard-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Standard Price</label>

              <input id='package-standard-pricing-edit' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricing} onChange={(e)=>setStandardPricing(e.target.value)} required/>
            </div>

            {/* Package Rushed Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="package-rushed-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Rushed Price</label>

              <input id='package-rushed-pricing-edit' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricing} onChange={(e)=>setRushedPricing(e.target.value)} required/>
            </div>
            
            {/* Package Urgent Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="package-urgent-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Urgent Price</label>

              <input id='package-urgent-pricing-edit' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={urgentPricing} onChange={(e)=>setUrgentPricing(e.target.value)} required/>
            </div>

            {/* Package Unit Edit */}
            <div className='mb-10'>
              <label htmlFor="package-unit-edit" className='text-2xl text-[#397f77] font-semibold'>Unit</label>

              <input id='package-unit-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={unit} onChange={(e)=>setUnit(e.target.value)} required/>
            </div>
            
            {/* Package Tests Edit */}
            <h1 className='text-2xl  text-[#397f77] font-semibold'>Added Tests</h1>
            {packageTests.map((analysis,idx)=>(
              <div className='m-5 flex'>
             
                <h2>{analysis.name}</h2>
                <button onClick={() => deleteTestFromPackage(analysis._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}
          

            <div className="col-span-3 mt-10 sm:order-2">
            <label htmlFor="package-tests-edit" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Test</label>
              <input type="text" id='package-tests-edit' placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

            </div>
            
            {analyses && analyses.filter( analysis => analysis.name.toLowerCase().includes(searchKey.toLowerCase())).map((analysis,idx) => (
              
                searchKey.length > 0 ?<>
                  <div className='m-5 flex'>
                    <h2>{analysis.name}</h2>
                    <button onClick={() => addTestToPackage(analysis)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                  </div>
                </>:<></>
             
            ))}
         
        </div>

        {/* Update Package Button Edit */}
        <div className="mt-10 flex justify-center">
            <button onClick={updateThisPackage} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Update Package</button>
        </div>

    </div>

  )
}

export default AdminPackageEditSection