import React from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateAnalysis } from "../../../actions/analysisAction";
import { useAlert } from 'react-alert';

const AdminAnalysisEditSection = ({thisAnalysis}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const [name, setName] = useState(thisAnalysis.name);
    const [testingCode, setTestingCode] = useState(thisAnalysis.testingCode);
    const [categories, setCategories] = useState(thisAnalysis.categories);
    const [type, setType] = useState(thisAnalysis.type.toString());
    const [componentList, setComponentList] = useState(thisAnalysis.componentList)
    const [matrixForm, setMatrixForm] = useState(thisAnalysis.matrixForm.toString());
    const [subMatrixForm, setSubMatrixForm] = useState(thisAnalysis.subMatrixForm.toString())
    const [description, setDescription] = useState(thisAnalysis.description);
    const [uspNotUsedHeldDescOnly, setUspNotUsedHeldDescOnly] = useState(thisAnalysis.uspNotUsedHeldDescOnly);
    const [uspAmtReq, setUspAmtReq] = useState(thisAnalysis.uspAmtReq);
    const [euAmtReq, setEuAmtReq] = useState(thisAnalysis.euAmtReq);
    const [standardPricing, setStandardPricing] = useState(thisAnalysis.standardPricing);
    const [rushedPricing, setRushedPricing] = useState(thisAnalysis.rushedPricing);
    const [standardPricingLvl2, setStandardPricingLvl2] = useState(thisAnalysis.standardPricingLvl2);
    const [rushedPricingLvl2, setRushedPricingLvl2] = useState(thisAnalysis.rushedPricingLvl2);
    const [standardPricingLvl3, setStandardPricingLvl3] = useState(thisAnalysis.standardPricingLvl3);
    const [rushedPricingLvl3, setRushedPricingLvl3] = useState(thisAnalysis.rushedPricingLvl3);
    const [sampleRequired, setSampleRequired] = useState(thisAnalysis.sampleRequired);
    const [unit, setUnit] = useState(thisAnalysis.unit);

    // Reset add New Turnaround Fields 

    const updateThisAnalysis = () => {
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
      const analysis = {
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
       unit
      }
      dispatch(updateAnalysis(analysis,thisAnalysis._id))
      navigate("/IPC-admin-portal/analyses")
    }

  return (

    <div>

        {/* Heading */}

        <div className="mb-5 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Update Test</h2>
        </div>

        {/* Go Back Button */}

        <div className="mb-5 flex justify-between">
            <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2">&#x2190;Back</button>

            <button onClick={updateThisAnalysis} className=" bg-[#397f77] text-white px-5 py-3 text-lg rounded-xl font-semibold hover:bg-[#18debb] duration-300">Update</button>
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
         
        </div>

    </div>

  )
}

export default AdminAnalysisEditSection