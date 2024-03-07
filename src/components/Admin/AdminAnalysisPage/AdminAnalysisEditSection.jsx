import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAnalysis } from "../../../actions/analysisAction";
import { useAlert } from 'react-alert';
import axios from 'axios';
import url from '../../../utils/baseApi';
import { v4 as uuidv4 } from 'uuid';

const AdminAnalysisEditSection = ({thisAnalysis}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const [name, setName] = useState(thisAnalysis.name);
    const [testingCode, setTestingCode] = useState(thisAnalysis.testingCode);
    const [categories, setCategories] = useState(thisAnalysis.categories);
    const [typeField, setTypeField] = useState(thisAnalysis.type);
    const [componentList, setComponentList] = useState(thisAnalysis.componentList == null ? '' : thisAnalysis.componentList)
    const [matrixForm, setMatrixForm] = useState(thisAnalysis.matrixForm);
    const [description, setDescription] = useState(thisAnalysis.description);
    const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState(thisAnalysis.uspNotUsedHeldDescOnly == "" ? null : thisAnalysis.uspNotUsedHeldDescOnly);
    const [standardPricing, setStandardPricing] = useState(thisAnalysis.standardPricing);
    const [rushedPricing, setRushedPricing] = useState(thisAnalysis.rushedPricing);
    const [urgentPricing, setUrgentPricing] = useState(thisAnalysis.urgentPricing);
    const [unit, setUnit] = useState(thisAnalysis.unit);

     // Adding matrix to analysis states and functions
    const [matrixSearchKey, setMatrixSearchKey] = useState("")
    const [matrixArr,setMatrixArr] = useState([])

    const addMatrixToAnalysis = (matrix) => {
      let con = true
      matrixForm.forEach((item)=>{
        if(item.name === matrix.name){
          alert.error(matrix.name +' is already included')
          con = false
        }
      })
      if(con){
        setMatrixForm([...matrixForm,matrix])
      }
    }
  
    const deleteMatrixFromAnalysis = (id) => {
      setMatrixForm([...matrixForm.filter((matrix)=>matrix.phraseId != id)])
    }

    // Adding type to analysis states and functions
    const [typeSearchKey, setTypeSearchKey] = useState("")
    const [typeArr,setTypeArr] = useState([])

    const addTypeToAnalysis = (type) => {
      let con = true

      typeField.forEach((item)=>{
        if(item.name === type.name){
          alert.error(type.name +' is already included')
          con = false
        }
      })
      if(con){
        setTypeField([...typeField,type])
      }
    }
  
    const deleteTypeFromAnalysis = (name) => {
      setTypeField([...typeField.filter((type)=>type.name != name)])
    }

    //Adding methods to analysis states and functions
    const [methodsArr,setMethodsArr] = useState(thisAnalysis.methods)
    const [methodName,setMethodName] = useState('')
    const [methodAmount,setMethodAmount] = useState(0)
    
    const addNewMethod = () => {
      if(methodName == ""){
        alert.error("Method name is required")
        return
      }
      let newMethodsArr = [...methodsArr]   
      newMethodsArr.push({id:uuidv4(),name:methodName,amount:methodAmount})
      console.log(newMethodsArr)
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

    const updateThisAnalysis = () => {

      if(name.trim() == "" || testingCode.trim() == "" || categories.trim() == "" || componentList.trim() == "" || description.trim() == "" || uspNotUsedHeldDescOnly.trim() == "" || unit.trim() == ""){
        return alert.error("All required fields must be filled")
      }

      if(methodsArr.length == 0){
        return alert.error("At least one method is required")
      }
  
      if(matrixArr.length == 0){
        return alert.error("At least one matrix is required")
      }

      const analysis = {
        name,
        testingCode,
        categories,
        type:typeField,
        componentList:componentList == "" ? null : componentList,
        matrixForm,
        description,
        uspNotUsedHeldDescOnly:uspNotUsedHeldDescOnly == "" ? null : uspNotUsedHeldDescOnly,
        methods:methodsArr,
        standardPricing,
        rushedPricing,
        urgentPricing,
        unit
      }
      dispatch(updateAnalysis(analysis,thisAnalysis._id))
      navigate("/IPC-admin-portal/analyses")
    }
    async function fetchData(){
      try{
        const {data:dataMatrix} =  await axios.get(`${url}/api/v1/matrix/all`)
        setMatrixArr(dataMatrix.matrix)
        const {data:dataType} =  await axios.get(`${url}/api/v1/type/all`)
        setTypeArr(dataType.type)
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
            <h2 className=" text-4xl font-semibold text-gray-600">Update Test</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={updateThisAnalysis} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Update Test</button>
        </div>


        {/* Service Info */}

        <div className='mt-10'>

           {/* Analysis Name Edit */}
           <div className='mb-10'>
              <label htmlFor="analysis-name-edit" className='text-2xl text-[#397f77] font-semibold'>Name</label>

              <input id='analysis-name-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            {/* Analysis Unique code Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-code-edit" className='text-2xl text-[#397f77] font-semibold'>Testing Code</label>

              <input id='analysis-code-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={testingCode} onChange={(e)=>setTestingCode(e.target.value)} required/>
            </div>

            {/* Analysis Type Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-matrix-list" className='text-2xl text-[#397f77] font-semibold'>Added Type<span className="text-[red]" >*</span></label>
            </div>
  
            {typeField.map((type,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{type.name}</h2>
                <button onClick={() => deleteTypeFromAnalysis(type.name)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}

            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="analysis-type" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Type</label>
              <input type="text" id='analysis-type' placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={typeSearchKey} onChange={(e)=>setTypeSearchKey(e.target.value)} />

            </div>
            
            {typeArr && typeArr.filter( type => type.name.toLowerCase().includes(typeSearchKey.toLowerCase())).map((type,idx) => (

              typeSearchKey.length > 0 ?<>
                <div className='m-5 flex'>
                  <span className='pr-2'>&#8226;</span>
                  <h2>{type.name}</h2>
                  <button onClick={() => addTypeToAnalysis(type)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                </div>
              </>:<></>

            ))}

            {/* Analysis Component List Edit */}
            <div className='my-10'>
              <label htmlFor="analysis-component-edit" className='text-2xl text-[#397f77] font-semibold'>Component List</label>

              <input id='analysis-component-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={componentList} onChange={(e)=>setComponentList(e.target.value)} required/>
            </div>

            {/* Analysis Matrix Form Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-matrix-list-edit" className='text-2xl text-[#397f77] font-semibold'>Matrix Form</label>
            </div>

            {matrixForm.map((matrix,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{matrix.name}</h2>
                <button onClick={() => deleteMatrixFromAnalysis(matrix.phraseId)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}

            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="analysis-matrix-edit" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Matrix</label>
              <input type="text"  id='analysis-matrix-edit' placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={matrixSearchKey} onChange={(e)=>setMatrixSearchKey(e.target.value)} />

            </div>
            
            {matrixArr && matrixArr.filter( matrix => matrix.name.toLowerCase().includes(matrixSearchKey.toLowerCase())).map((matrix,idx) => (

              matrixSearchKey.length > 0 ?<>
                <div className='m-5 flex'>
                  <span className='pr-2'>&#8226;</span>
                  <h2>{matrix.name}</h2>
                  <button onClick={() => addMatrixToAnalysis(matrix)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                </div>
              </>:<></>

            ))}
            <div className='mb-10'></div>

            {/* Analysis Categories Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-categories-edit" className='text-2xl text-[#397f77] font-semibold'>Categories</label>

              <input id='analysis-categories-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={categories} onChange={(e)=>setCategories(e.target.value)} required/>
            </div>

            {/* Analysis Description Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-description-edit" className='text-2xl text-[#397f77] font-semibold'>Description</label>

              <input id='analysis-description-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={description} onChange={(e)=>setDescription(e.target.value)} required/>
            </div>

            {/* Analysis USP Not Used Held Desc Only Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-usp-edit" className='text-2xl text-[#397f77] font-semibold'>USP Not Used Held Desc Only</label>

              <input id='analysis-usp-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={uspNotUsedHeldDescOnly} onChange={(e)=>setUspNotUsedHeldDescOnly(e.target.value)} required/>
            </div>

            {/* Analysis Methods Edit */}
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
                            <label htmlFor="analysis-method-name-edit" className='text-xl text-[#397f77] font-semibold'>Method Name</label>

                            <input id='analysis-method-name-edit' type="text" className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.name} onChange={(e)=>editMethod(index,e.target.value,'name')} required/>
                          </div>

                          <div >
                            <label htmlFor="analysis-amount-required-edit" className='text-xl text-[#397f77] font-semibold'>Amount Required</label>

                            <input id='analysis-amount-required-edit' type="number" min={0} className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.amount} onChange={(e)=>editMethod(index,e.target.value,'amount')} required/>
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
                            <label htmlFor="analysis-method-name-edit" className='text-xl text-[#397f77] font-semibold'>Method Name</label>

                            <input id='analysis-method-name-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={methodName} placeholder='Name' onChange={(e)=>setMethodName(e.target.value)} required/>
                          </div>

                          <div className='mb-10'>
                            <label htmlFor="analysis-amount-required" className='text-xl text-[#397f77] font-semibold'>Amount Required</label>

                            <input id='analysis-amount-required' type="number" min={0} className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={methodAmount} placeholder={0} onChange={(e)=>setMethodAmount(e.target.value)} required/>
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

            {/* Analysis Standard Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-standard-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Standard Price</label>

              <input id='analysis-standard-pricing-edit' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricing} onChange={(e)=>setStandardPricing(e.target.value)} required/>
            </div>

            {/* Analysis Rushed Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Rushed Price</label>

              <input id='service-name' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricing} onChange={(e)=>setRushedPricing(e.target.value)} required/>
            </div>

            {/* Analysis urgent Pricing Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-rushed-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Urgent Price</label>

              <input id='analysis-rushed-pricing-edit' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={urgentPricing} onChange={(e)=>setUrgentPricing(e.target.value)} required/>
            </div>

            {/* Analysis Unit Edit */}
            <div className='mb-10'>
              <label htmlFor="analysis-urgent-pricing-edit" className='text-2xl text-[#397f77] font-semibold'>Unit</label>

              <input id='analysis-urgent-pricing-edit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={unit} onChange={(e)=>setUnit(e.target.value)} required/>
            </div>
         
        </div>
                  
        {/* Update Analysis Button Edit */}
        <div className="mt-10 flex justify-center">
            <button onClick={updateThisAnalysis} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Update Test</button>
        </div>

    </div>

  )
}

export default AdminAnalysisEditSection