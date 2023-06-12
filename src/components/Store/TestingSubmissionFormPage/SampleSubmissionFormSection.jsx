import React from 'react'
import TestingSelectionForm from './TestingSelectionForm'
import Select from 'react-select'
import { useState,useEffect,useId } from 'react'
import { useSelector,useDispatch } from 'react-redux'

// const SampleSubmissionFormSection = ({id,sampleList,setSampleList,sampleFormData,setSampleFormData}) => {
const SampleSubmissionFormSection = ({id,sampleList,setSampleList}) => {

    const dispatch = useDispatch()

    const {sampleFormData} = useSelector(state => state.sampleFormSubmit)

    const [testFormData,setTestFormData] = useState([])
    const [sampleName,setSampleName] = useState('')
    const [sampleBatch,setSampleBatch] = useState('')
    const [selectedTurnaround, setSelectedTurnaround] = useState(null);
    const [storageType,setStorageType] = useState({
        awayFromLight:{
            name:'Away From Light',
            value:false
        },
        freezer:{
            name:'Freezer',
            value:false
        },
        hazardous:{
            name:'Hazardous',
            value:false
        },
        hygroscopic:{
            name:'Hygroscopic',
            value:false
        },
        refrigeration:{
            name:'Refrigeration',
            value:false
        },
        roomTemperature:{
            name:'Room Temperature',
            value:false
        },
        na:{
            name:'N/A',
            value:false
        },
        others:{
            name:'Others',
            value:''
        }
    })

    const checkboxData = (e)=>{

        storageType[e.target.name].value = e.target.name=='others' ?  e.target.value : e.target.checked
        sampleDataMerged()

    }
    let sampleData = {
        id:useId()
    }
    const sampleDataMerged = ({td=testFormData,sName=sampleName,sBatch=sampleBatch,sTurnaround=selectedTurnaround}={})=>{
        setTestFormData(td)
        setSampleName(sName)
        setSampleBatch(sBatch)
        setSelectedTurnaround(sTurnaround)
        const updateSampleData = sampleFormData.map(sample => {
  
            if(sample.id==sampleData.id){
                return {
                    id:sample.id,
                    'sampleName':sName,
                    'sampleBatch':sBatch,
                    'selectedTurnaround':sTurnaround,
                    storageType,
                    'testFormData':td
                }
            }else{
                return sample
            }
        })
        
        // setSampleFormData(updateSampleData)
        dispatch({type:'SAMPLE_FORM_DATA',payload:updateSampleData})


    }

    const [testList,setTestList] = useState([{id:new Date().getTime(),content:TestingSelectionForm}])

    const selectCustomStyles = {

        control: (provided, state) => ({

            ...provided,

            backgroundColor: 'white',

            outline: 'none',

            outlineOffset: state.isFocused ? 'none' : 'none',

            border: 0,

            boxShadow: 'none',

            borderRadius: '6px',

            innerWidth: '100%',

        }),

    }

    const turnaroundList = [
        {label:"Standard", value: "standard"},
        {label:"Rushed", value: "rushed"},
    ]

    const addTest = ()=>{     
        setTestList([...testList,{id:new Date().getTime(),content:TestingSelectionForm}])
        sampleDataMerged({td:testFormData})
       
    }

    useEffect(()=>{
        // setSampleFormData([...sampleFormData,sampleData])
        dispatch({type:'SAMPLE_FORM_DATA',payload:[...sampleFormData,sampleData]})
    },[])

  return (
    <div className='border-[1px] border-gray-300 p-5 text-gray-600 rounded-xl'>

        {/* Heading */}

        <div className='mb-5'>
        <span className='inline-block mr-3'>
                <button
                onClick={() => {
                    setSampleList(
                        sampleList.filter(sampleItem =>
                            sampleItem.id !== id
                        )
                    );
                   
                    // setSampleFormData(
                    //     sampleFormData.filter(sample=>
                    //         sample.id !== sampleData.id
                    //     )
                    // )
                    dispatch({type:'SAMPLE_FORM_DATA',payload:[
                        sampleFormData.filter(sample=>
                            sample.id !== sampleData.id
                        )
                    ]})
                }}  
                className='py-[2px] px-[9px] rounded-full border-red-500 border-[2px] text-red-500 font-semibold hover:bg-red-500 hover:text-white duration-300'>X</button>
            </span>
            {/* Sample Count */}

            <span className=' inline-block'>
                <p className='font-semibold text-xl'>Sample Submission</p>
            </span>

        </div>

 

        {/* Sample Form */}

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-10'>

            {/* Sample Name */}

            <div>
                <label htmlFor='sampleName' className='block mb-2 text-lg font-semibold'>Sample Name<span className='text-red-500'>*</span></label>
                <input type='text' value={sampleName} onChange={(e)=>{sampleDataMerged({sName:e.target.value})}} name='sampleName' id='sampleName' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

            {/* Sample Batch/Lot # */}

            <div>
                <label htmlFor='sampleBatchLot' className='block mb-2 text-lg font-semibold'>Sample Batch/Lot #</label>
                <input type='text' value={sampleBatch} onChange={(e)=>{sampleDataMerged({sBatch:e.target.value})}} name='sampleBatchLot' id='sampleBatchLot' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

            {/* Sample Date */}

            {/* <div>
                <label htmlFor='sampleDate' className='block mb-2 text-lg font-semibold'>Sample Date</label>
                <input type='date' name='sampleDate' id='sampleDate' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div> */}

            {/* Sample Time */}

            {/* <div>
                <label htmlFor='sampleTime' className='block mb-2 text-lg font-semibold'>Sample Time</label>
                <input type='time' name='sampleTime' id='sampleTime' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div> */}

        </div>

        {/* Testing Selection */}

        {/* Heading */}

        <div className='mb-5'>
            <p className='font-semibold text-xl'>Testing<span className='text-red-500'>*</span></p>
        </div>

        {/* Tests */}

        {testList.map((item)=>(
            <div key={item.id} className='mb-5'>
                {/* Delete Test Button */}
                <span className='block float-right ml-3'>
                    <button onClick={() => {
                    setTestList(
                        testList.filter(testItem =>
                        testItem.id !== item.id
                        )
                    );
                    // dispatch({type:'TEST_FORM_DATA',payload:[
                    //     testFormData.filter(testData => 
                    //         testData.id !== item.id
                    //     )
                    // ]})
               
                    sampleDataMerged( {td:testFormData.filter(testData => 
                        testData.id !== item.id
                    )})
                    }} 
                    className='text-xs py-[2px] px-[7px] rounded-full border-red-500 border-[2px] text-red-500 font-semibold hover:bg-red-500 hover:text-white duration-300'>
                    X
                    </button>
                </span>

                {/* {<item.content testFormData={testFormData} setTestFormData={setTestFormData} sampleDataMerged={sampleDataMerged} testDataId = {item.id}/>} */}
                {<item.content  testDataId = {item.id} sampleDataMerged={sampleDataMerged} testFormData={testFormData} setTestFormData={setTestFormData}/>}
            </div>
        ))}
     

        {/* Add Test Button */}

        <div className='mb-10'>
            <button onClick={addTest} className='bg-[#397f77] hover:bg-[#18debb] rounded-md font-semibold text-white px-3 py-2 duration-300'>Add Test</button>
        </div>

        {/* Additional Testing Information */}

        <div>

            {/* Heading */}

            <div className='mb-5'>
                <p className='font-semibold text-xl'>Additional Testing Information</p>
            </div>

            {/* Selections */}

            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>

                {/* Turnaround Selection */}

                <div>

                    {/* Heading */}

                    <div className='mb-5'>
                        <p className='font-semibold text-lg'>Turnaround Time</p>
                    </div>

                    <Select options={turnaroundList} value={selectedTurnaround} onChange={(e)=>{sampleDataMerged({sTurnaround:e})}} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                
                    {/* Notes */}

                    <div className='mt-5'>

                        <p className=' text-md mb-3'>Standard: 5-10 <br /> Business Days</p>

                        <p className=' text-md'>Rushed: Within 5 <br /> Business Days</p>

                    </div>
                </div>

                {/* Special Storage/​Handling Conditions Required */}

                <div>

                    {/* Heading */}

                    <div className='mb-5'>
                        <p className='font-semibold text-lg'>Special Storage/​Handling Conditions Required<span className='text-red-500'>*</span></p>
                    </div>

                    {/* Inputs */}

                    <div className=''>

                        {/* Away From Light */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="awayFromLight" id="awayFromLight" />
                            <label htmlFor="awayFromLight">Away From Light</label>
                        </div>

                        {/* Freezer */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="freezer" id="freezer" />
                            <label htmlFor="freezer"> Freezer</label>
                        </div>

                        {/* Hazardous */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="hazardous" id="hazardous" />
                            <label htmlFor="hazardous"> Hazardous</label>
                        </div>

                        {/* Hygroscopic */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="hygroscopic" id="hygroscopic" />
                            <label htmlFor="hygroscopic"> Hygroscopic</label>
                        </div>

                        {/* Refrigeration */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="refrigeration" id="refrigeration" />
                            <label htmlFor="refrigeration"> Refrigeration</label>
                        </div>

                        {/* Room Temperature */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="roomTemperature" id="roomTemperature" />
                            <label htmlFor="roomTemperature">Room Temperature</label>
                        </div>

                        {/* N/​A */}

                        <div className='mb-2'>
                            <input type="checkbox" onChange={(e)=>{checkboxData(e)}} name="na" id="na" />
                            <label htmlFor="na"> N/A</label>
                        </div>

                    </div>

                    {/* Others */}

                    <div>
                        <input type='text' onChange={(e)=>{checkboxData(e)}} name='others' id='others' placeholder='Other' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
                    </div>
                </div>

                {/* Total Amount Required */}

                <div className='mt-10'>

                    {/* Heading */}

                    <div className='mb-3'>
                        <p className='font-semibold text-lg'>Total Amount Required for Sample 1</p>
                    </div>

                    {/* Amount */}

                    <div className='mb-5'>
                        <p className='text-lg text-[#397f77]'>03 grams</p>
                    </div>

                    {/* Note */}

                    <div className='mb-5'>

                        <p className=' italic text-sm mb-3'>Based on your testing choices please submit the recommended minimum amount.</p>

                        <p className=' italic text-sm mb-3'>Defaults are either in grams(g) or millilitres(mL) unless otherwise specified.</p>

                        <p className=' italic text-sm'>**If you are submiting Water testing please ensure your measurement is in mL.</p>

                    </div>

                </div>

            </div>

        </div>



    </div>
  )
}

export default SampleSubmissionFormSection