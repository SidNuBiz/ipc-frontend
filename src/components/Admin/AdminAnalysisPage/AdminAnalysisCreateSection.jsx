import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAnalysis } from "../../../actions/analysisAction";
import { useAlert } from 'react-alert';
import axios from 'axios';
import url from '../../../utils/baseApi';
import { v4 as uuidv4 } from 'uuid';

const AdminAnalysisCreateSection = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const [name, setName] = useState("");
    const [testingCode, setTestingCode] = useState("");
    const [categories, setCategories] = useState("");
    const [typeField, setTypeField] = useState([]);
    const [componentList, setComponentList] = useState("")
    const [matrixForm, setMatrixForm] = useState([]);
    const [description, setDescription] = useState("");
    const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState("");
    const [standardPricing, setStandardPricing] = useState(0);
    const [rushedPricing, setRushedPricing] = useState(0);
    const [urgentPricing, setUrgentPricing] = useState(0);
    const [unit, setUnit] = useState("");

    // Adding matrix to analysis states and functions
    const [matrixSearchKey, setMatrixSearchKey] = useState("")
    const [matrixArr,setMatrixArr] = useState([])

    const addMatrixToAnalysis = (matrix) => {
      let con = true

      matrixForm.forEach((item)=>{
        if(item._id === matrix._id){
          alert.error(matrix.name +' is already included')
          con = false
        }
      })
      if(con){
        setMatrixForm([...matrixForm,matrix])
      }
    }
  
    const deleteMatrixFromAnalysis = (id) => {
      setMatrixForm([...matrixForm.filter((matrix)=>matrix._id != id)])
    }

    // Adding type to analysis states and functions
    const [typeSearchKey, setTypeSearchKey] = useState("")
    const [typeArr,setTypeArr] = useState([])

    const addTypeToAnalysis = (type) => {
      let con = true

      typeField.forEach((item)=>{
        if(item._id === type._id){
          alert.error(type.name +' is already included')
          con = false
        }
      })
      if(con){
        setTypeField([...typeField,type])
      }
    }
  
    const deleteTypeFromAnalysis = (id) => {
      setTypeField([...typeField.filter((type)=>type._id != id)])
    }

    //Adding methods to analysis states and functions
    const [methodsArr,setMethodsArr] = useState([])
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


    const addThisAnalysis = () => {

      if(name.trim() == "" || testingCode.trim() == "" || categories.trim() == "" || componentList.trim() == "" || description.trim() == "" || uspNotUsedHeldDescOnly.trim() == "" || unit.trim() == ""){
        return alert.error("All required fields must be filled")
      }

      if(methodsArr.length == 0){
        return alert.error("At least one method is required")
      }
  
      if(matrixArr.length == 0){
        return alert.error("At least one matrix is required")
      }

      if(typeArr.length == 0){
        return alert.error("At least one type is required")
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
      dispatch(createAnalysis(analysis))
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
            <h2 className=" text-4xl font-semibold text-gray-600">Create New Test</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={addThisAnalysis} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Create Test</button>
        </div>


        {/* Analysis Info */}

        <div className='mt-10'>

           {/* Analysis Name */}
           <div className='mb-10'>
              <label htmlFor="analysis-name" className='text-2xl text-[#397f77] font-semibold'>Name<span className="text-[red]" >*</span></label>

              <input id='analysis-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>

            {/* Analysis Unique code */}
            <div className='mb-10'>
              <label htmlFor="analysis-code" className='text-2xl text-[#397f77] font-semibold'>Testing Code<span className="text-[red]" >*</span></label>

              <input id='analysis-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={testingCode} onChange={(e)=>setTestingCode(e.target.value)} required/>
            </div>

            {/* Analysis Type */}


            {/* Analysis Type Form */}
            <div className='mb-10'>
              <label htmlFor="analysis-matrix-list" className='text-2xl text-[#397f77] font-semibold'>Added Type<span className="text-[red]" >*</span></label>
            </div>
  
            {typeField.map((type,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{type.name}</h2>
                <button onClick={() => deleteTypeFromAnalysis(type._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

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

            {/* Analysis Component List */}
            <div className='my-10'>
              <label htmlFor="analysis-component" className='text-2xl text-[#397f77] font-semibold'>Component List<span className="text-[red]" >*</span></label>

              <input id='analysis-component' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={componentList} onChange={(e)=>setComponentList(e.target.value)} required/>
            </div>

            {/* Analysis Matrix Form */}
            <div className='mb-10'>
              <label htmlFor="analysis-matrix-list" className='text-2xl text-[#397f77] font-semibold'>Added Matrix Form<span className="text-[red]" >*</span></label>
            </div>
  
            {matrixForm.map((matrix,idx)=>(
              <div className='m-5 flex'>
                <span className='pr-2'>&#8226;</span>
                <h2>{matrix.name}</h2>
                <button onClick={() => deleteMatrixFromAnalysis(matrix._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}

            <div className="col-span-3 mt-10 sm:order-2">
              
              <label htmlFor="analysis-matrix" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Matrix</label>
              <input type="text" id='analysis-matrix' placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={matrixSearchKey} onChange={(e)=>setMatrixSearchKey(e.target.value)} />

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

            {/* Analysis Categories */}
            <div className='mb-10'>
              <label htmlFor="analysis-categories" className='text-2xl text-[#397f77] font-semibold'>Categories<span className="text-[red]" >*</span></label>

              <input id='analysis-categories' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={categories} onChange={(e)=>setCategories(e.target.value)} required/>
            </div>

            {/* Analysis Description */}
            <div className='mb-10'>
              <label htmlFor="analysis-description" className='text-2xl text-[#397f77] font-semibold'>Description<span className="text-[red]" >*</span></label>

              <input id='analysis-description' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={description} onChange={(e)=>setDescription(e.target.value)} required/>
            </div>

            {/* Analysis USP Not Used Held Desc Only */}
            <div className='mb-10'>
              <label htmlFor="analysis-usp" className='text-2xl text-[#397f77] font-semibold'>USP Not Used Held Desc Only<span className="text-[red]" >*</span></label>

              <input id='analysis-usp' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={uspNotUsedHeldDescOnly} onChange={(e)=>setUspNotUsedHeldDescOnly(e.target.value)} required/>
            </div>

            {/* Analysis Methods */}
            <div className='my-5'>

              <table className='w-full'>

                <thead >
                  {
                    methodsArr.length > 0 && (
                      <tr className='text-gray-600 font-semibold'>
                        <th className='text-left'><h2 className=' underline text-2xl text-[#397f77] font-semibold mb-2'>Testing Methods<span className="text-[red]" >*</span></h2></th>
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
                            <label htmlFor="analysis-method-name" className='text-xl text-[#397f77] font-semibold'>Method Name</label>

                            <input id='analysis-method-name' type="text" className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.name} onChange={(e)=>editMethod(index,e.target.value,'name')} required/>
                          </div>

                          <div >
                            <label htmlFor="analysis-amount-required" className='text-xl text-[#397f77] font-semibold'>Amount Required</label>

                            <input id='analysis-amount-required' type="number" min={0} className='w-full bg-transparent mt-1 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={item.amount} onChange={(e)=>editMethod(index,e.target.value,'amount')} required/>
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
                            <label htmlFor="analysis-method-name" className='text-xl text-[#397f77] font-semibold'>Method Name<span className="text-[red]" >*</span></label>

                            <input id='analysis-method-name' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' value={methodName} placeholder='Name' onChange={(e)=>setMethodName(e.target.value)} required/>
                          </div>

                          <div className='mb-10'>
                            <label htmlFor="analysis-amount-required" className='text-xl text-[#397f77] font-semibold'>Amount Required<span className="text-[red]" >*</span></label>

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

            {/* Analysis Standard Pricing */}
            <div className='mb-10'>
              <label htmlFor="analysis-standard-pricing" className='text-2xl text-[#397f77] font-semibold'>Standard Price<span className="text-[red]" >*</span></label>

              <input id='analysis-standard-pricing' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricing} onChange={(e)=>setStandardPricing(e.target.value)} required/>
            </div>

            {/* Analysis Rushed Pricing */}
            <div className='mb-10'>
              <label htmlFor="analysis-rushed-pricing" className='text-2xl text-[#397f77] font-semibold'>Rushed Price<span className="text-[red]" >*</span></label>

              <input id='analysis-rushed-pricing' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricing} onChange={(e)=>setRushedPricing(e.target.value)} required/>
            </div>

            {/* Analysis Urgent Pricing */}
            <div className='mb-10'>
              <label htmlFor="analysis-urgent-pricing" className='text-2xl text-[#397f77] font-semibold'>Urgent Price<span className="text-[red]" >*</span></label>

              <input id='analysis-urgent-pricing' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={urgentPricing} onChange={(e)=>setUrgentPricing(e.target.value)} required/>
            </div>

            {/* Analysis Unit */}
            <div className='mb-10'>
              <label htmlFor="analysis-unit" className='text-2xl text-[#397f77] font-semibold'>Unit<span className="text-[red]" >*</span></label>

              <input id='analysis-unit' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={unit} onChange={(e)=>setUnit(e.target.value)} required/>
            </div>
         
        </div>

        {/* Create Analysis Button */}
        <div className="mt-10 flex justify-center">
            <button onClick={addThisAnalysis} className=" bg-transparent text-[#397f77] border-[#397f77] border-[1px] px-7 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] hover:text-white hover:border-white duration-300">Create Test</button>
        </div>

    </div>

  )
}

export default AdminAnalysisCreateSection