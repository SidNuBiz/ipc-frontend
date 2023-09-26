import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePackage } from "../../../actions/packageAction";
import { useAlert } from 'react-alert';

const AdminPackageEditSection = ({thisPackage}) => {

    console.log(thisPackage)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const [searchKey, setSearchKey] = useState("")

    const {analyses} = useSelector(state => state.analyses)

    const [name, setName] = useState(thisPackage.name);
    const [testingCode, setTestingCode] = useState(thisPackage.testingCode);
    const [categories, setCategories] = useState(thisPackage.categories);
    const [type, setType] = useState(thisPackage.type.toString());
    const [componentList, setComponentList] = useState(thisPackage.componentList)
    const [matrixForm, setMatrixForm] = useState(thisPackage.matrixForm.toString());
    const [subMatrixForm, setSubMatrixForm] = useState(thisPackage.subMatrixForm.toString())
    const [description, setDescription] = useState(thisPackage.description);
    const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState(thisPackage.uspNotUsedHeldDescOnly);
    const [uspAmtReq, setUspAmtReq] = useState(thisPackage.uspAmtReq);
    const [euAmtReq, setEuAmtReq] = useState(thisPackage.euAmtReq);
    const [standardPricing, setStandardPricing] = useState(thisPackage.standardPricing);
    const [rushedPricing, setRushedPricing] = useState(thisPackage.rushedPricing);
    const [standardPricingLvl2, setStandardPricingLvl2] = useState(thisPackage.standardPricingLvl2);
    const [rushedPricingLvl2, setRushedPricingLvl2] = useState(thisPackage.rushedPricingLvl2);
    const [standardPricingLvl3, setStandardPricingLvl3] = useState(thisPackage.standardPricingLvl3);
    const [rushedPricingLvl3, setRushedPricingLvl3] = useState(thisPackage.rushedPricingLvl3);
    const [sampleRequired, setSampleRequired] = useState(thisPackage.sampleRequired);
    const [unit, setUnit] = useState(thisPackage.unit);
    const [packageTests,setPackageTests] = useState(thisPackage.packageTests)

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

    const updateThisPackage = () => {
    //   if(title.trim() === ""){
    //     alert.error("Give a name for the service")
    //     return
    //   }
    //   if(paragraphsArr.length === 0){
    //     alert.error("Give a description paragraph for the service")
    //     return
    //   }
    //   if(overviewPointsArr.length === 0){
    //     alert.error("Give at least one overview point")
    //     return
    //   }
      const pack = {
       name,
       testingCode,
       categories,
       type,
       componentList,
       matrixForm,
       subMatrixForm,
       description,
       uspNotUsedHeldDescOnly,
       uspAmtReq,
       euAmtReq,
       standardPricing,
       rushedPricing,
       standardPricingLvl2,
       rushedPricingLvl2,
       standardPricingLvl3,
       rushedPricingLvl3,
       sampleRequired,
       unit,
       packageTests
      }
      dispatch(updatePackage(pack,thisPackage._id))
      navigate("/IPC-admin-portal/packages")
    }

  return (

    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Update Package</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={updateThisPackage} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
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
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Matrix Form</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={matrixForm} onChange={(e)=>setMatrixForm(e.target.value)} required/>
            </div>
            
            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Sub Matrix Form</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={subMatrixForm} onChange={(e)=>setSubMatrixForm(e.target.value)} required/>
            </div>

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
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Standard Price Level Two</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricingLvl2} onChange={(e)=>setStandardPricingLvl2(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Rushed Price Level Two</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricingLvl2} onChange={(e)=>setRushedPricingLvl2(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Standard Price Level Three</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={standardPricingLvl3} onChange={(e)=>setStandardPricingLvl3(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Rushed Price Level Three</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={rushedPricingLvl3} onChange={(e)=>setRushedPricingLvl3(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Sample Required</label>

              <input id='service-code' type="number" min={0} className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={sampleRequired} onChange={(e)=>setSampleRequired(e.target.value)} required/>
            </div>

            <div className='mb-10'>
              <label htmlFor="service-name" className='text-2xl text-[#397f77] font-semibold'>Unit</label>

              <input id='service-code' type="text" className='w-full bg-transparent mt-5 px-5 py-3 border-gray-300 border-[1px] focus:outline-none' defaultValue={unit} onChange={(e)=>setUnit(e.target.value)} required/>
            </div>
            
            <h1 className='text-2xl  text-[#397f77] font-semibold'>Added Tests</h1>
            {packageTests.map((analysis,idx)=>(
              <div className='m-5 flex'>
             
                <h2>{analysis.name}</h2>
                <button onClick={() => deleteTestFromPackage(analysis._id)} className=' bg-[#D70040] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#C41E3A] duration-300'>Delete</button>

              </div>
            ))}
          

            <div className="col-span-3 mt-10 sm:order-2">
            <label htmlFor="service-name" className='text-2xl text-[#397f77] mb-2 font-semibold'>Search Test</label>
              <input type="text" placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

            </div>
            
            {analyses && analyses.filter( analysis => analysis.name.toLowerCase().includes(searchKey.toLowerCase())).map((analysis,idx) => (
              <div className='m-5 flex'>
                {searchKey.length > 0 ?<>
                  <h2>{analysis.name}</h2>
                  <button onClick={() => addTestToPackage(analysis)} className=' bg-[#397f77] text-white ml-5 px-1 py-1 text-sm rounded-sm font-semibold hover:bg-[#18debb] duration-300'>Add</button>
                </>:<></>}
              </div>
            ))}
         
        </div>

    </div>

  )
}

export default AdminPackageEditSection