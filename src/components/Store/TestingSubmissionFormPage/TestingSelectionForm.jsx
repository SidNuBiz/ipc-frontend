import React, { useEffect } from 'react'
import Select from 'react-select'
import { useState } from 'react'
import {useSelector} from "react-redux"



let typeTests
let matrixFormTests

const TestingSelectionForm = ({testList, setTestList, idx, categoryList, setCategoryList, type, setType, matrixForm, setMatrixForm, testDataId, sampleDataMerged, testFormData}) => {

    const {analyses} = useSelector(state=>state.analyses)
    const {packages} = useSelector(state => state.packages)
  
    function removeDuplicate(arr) {
        let outputArray = arr.filter(function(v, i, self){
          return i === self.indexOf(v);
        });
      
        return outputArray;
    }

    const [categoriesTests,setCategoriesTests] = useState([])
      
    const [test,setTest] = useState(null)

    const [category, setCategory] = useState(null)
    const [testName, setTestName] = useState(null)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [testingMethod, setTestingMethod] = useState(null)
    const [unit, setUnit] = useState('')

    const [typeFormList,setTypeFormList] = useState([])
    const [matrixFormList, setMatrixFormList] = useState([])
    const [isAddOn, setIsAddOn] = useState(false)
    const [addOns,setAddOns] = useState([])
    const [testNameList, setTestNameList] = useState(null) 
    const [testingMethodList, setTestingMethodList] = useState([])
    

    function handleTypeChange(e) {
        
        setMatrixForm(null);
        setMatrixFormList([])
        setCategory(null)
        setCategoryList([])
        setTestName(null)
        setTestNameList([])
        setDescription('')
        setAmount('')
        setUnit('')
        setIsAddOn(false)
        setAddOns([])
        setTestList([testList[0]])
        setType(e.value)
        setTestingMethod(null)
        setTestingMethodList([])
        setTest(null)
        let matrixArr = []
        typeTests = analyses && packages &&  [...analyses,...packages].filter(data => (data.type !== undefined ? data.type.includes(e.value):false))
        typeTests.forEach(data => data.matrixForm !== undefined ? matrixArr.push(...data.matrixForm):false)
        const uniqueObjects = {};
        const result = matrixArr.filter(obj => {
            const key = JSON.stringify(obj);
            return uniqueObjects.hasOwnProperty(key) ? false : (uniqueObjects[key] = true);
        });
        const selectMatrixArr = result.map((data) => {
            return {label:data.name,value:data.phraseId}
        })
        setMatrixFormList(selectMatrixArr)
       
    }

    function handleMatrixChange(e) {
        setCategory(null)
        setCategoryList([])
        setTestName(null)
        setTestNameList([])
        setDescription('')
        setAmount('')
        setUnit('')
        setIsAddOn(false)
        setAddOns([])
        setTestList([testList[0]])
        setTestingMethod(null)
        setTestingMethodList([])
        setTest(null)
        let categoriesArr = []
        matrixFormTests = typeTests.filter(data => data.matrixForm !== undefined ? data.matrixForm.some(item => item.name === e.label):false)
        matrixFormTests.forEach(data => data.matrixForm !== undefined ? categoriesArr.push(data.categories):false)
        const selectCategoriesArr = removeDuplicate(categoriesArr).map((data) => {
            return {label:data,value:data}
        })
        setCategoryList(selectCategoriesArr)
        
    }

    function handleCategoryChange(e) {
        setTestName(null)
        setTestNameList([])
        setDescription('')
        setAmount('')
        setUnit('')
        setIsAddOn(false)
        setAddOns([])
        setTestingMethod(null)
        setTestingMethodList([])
        setTest(null)
        let testNameArr = []
        let filteredArr = matrixFormTests.filter(data => data.categories === e.value)
        // categoriesTests = 
        setCategoriesTests(filteredArr)
        filteredArr.forEach(data => data.name !== undefined ? testNameArr.push(data.name):false)
        const selectTestNameArr = removeDuplicate(testNameArr).map((data) => {
            return {label:data,value:data}
        })
        setTestNameList(selectTestNameArr)
    }

    const handleTestNameChange =  (e) => {
        setDescription('')
        setAmount('')
        setUnit('')
        setTest(null)
        const nameTests = categoriesTests.filter(data => data.name === e.value)
        setTest(nameTests[0])
        setDescription(nameTests[0].description)
        // setAmount(nameTests[0].sampleRequired)
        // setUnit(nameTests[0].unit)
        setTestingMethod(null)
        setTestingMethodList([])
        
        const testingMethodArr = []
        nameTests[0].methods.forEach((method)=>{
            testingMethodArr.push({label:method.name,value:method.amount})
        
        })

        setTestingMethodList(testingMethodArr)

        if(nameTests[0].name == "Cannabis Potency Add On"){
            const addOnArr = []
          
            let editDescription = nameTests[0].description.split(", ")
                            
            editDescription.forEach((data)=>{
                addOnArr.push({name:data,value:false})
            })
            setAddOns(addOnArr)
            setIsAddOn(true)
        }else{
            setIsAddOn(false)
            setAddOns([])
        }
        const filteredTestFormData = testFormData.filter(test => {
            return test.id !== testDataId
        })
        
        sampleDataMerged({td:[...filteredTestFormData,{
            id:testDataId,
            type:type.value,
            matrixForm:matrixForm.label,
            matrixPhraseId:matrixForm.value,
            category:category.value,
            test:nameTests[0],
            method:testingMethod,
            addOn:addOns
        }]})
      
    }

    const handleTestingMethodChange = (e) => {
       
        setAmount(e.value)
        setUnit(test.unit)
      
        const filteredTestFormData = testFormData.filter(test => {
            return test.id !== testDataId
        })
        sampleDataMerged({td:[...filteredTestFormData,{
            id:testDataId,
            type:type.value,
            matrixForm:matrixForm.label,
            matrixPhraseId:matrixForm.value,
            category:category.value,
            test:test,
            method:e.label,
            addOn:addOns
        }]})


    }

    const checkAddOn = (e,idx)=>{
        const addOnArr = addOns
        addOnArr[idx].value = e.target.checked
        setAddOns(addOnArr)
        const filteredTestFormData = testFormData.filter(test => {
            return test.id !== testDataId
        })
        sampleDataMerged({td:[...filteredTestFormData,{
            id:testDataId,
            type:type.value,
            matrixForm:matrixForm.label,
            matrixPhraseId:matrixForm.value,
            category:category.value,
            test:test,
            method:testingMethod,
            addOn:addOns
        }]})
    }

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


    useEffect(()=>{
        let typeArr = []
        analyses && analyses.forEach(test => {
            typeArr.push(...test.type)
        })
        packages && packages.forEach(test => {
            typeArr.push(...test.type)
        })
        setTypeFormList(
            removeDuplicate(typeArr).map((data) => {
                return {label:data,value:data}
            })
        )
    },[analyses,packages])

   

  return (
    <div className='text-gray-600 bg-gray-50 p-3 rounded-md'>

        {/* Testing selection Form */}

        <span className='block '>
                
            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2'>

                {/* Test Type */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Type<span className='text-red-500'>*</span></label>
                    {
                        idx == 0 ? <Select options={typeFormList} value={type} onChange={(e) =>{handleTypeChange(e); setType(e); }} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix /> : 
                        <input type='text' value={type.value} name='static-type' id='static-type' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                    }
                    
                    
                </div>

                {/* Test Matrix */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Matrix Form<span className='text-red-500'>*</span></label>
                    {
                        idx == 0 ? <Select options={matrixFormList} value={matrixForm} onChange={(e) => {handleMatrixChange(e); setMatrixForm(e);}} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix /> : 
                        <input type='text' value={matrixForm.label} name='static-matrix' id='static-matrix' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                    }
                    
                </div>

                {/* Test Matrix */}

                {/* <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Sub Matrix Form<span className='text-red-500'>*</span></label>
                    <Select options={matrixFormList} value={matrixForm} onChange={(e) => {handleMatrixChange(e); setMatrixForm(e);}} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div> */}

                {/* Test Category */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Categories<span className='text-red-500'>*</span></label>
                    <Select options={categoryList} value={category}  onChange={(e) => {handleCategoryChange(e); setCategory(e)}} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Name */}

                <div>
                    <label htmlFor='testName' className='block mb-2 text-sm font-semibold'>Test Name<span className='text-red-500'>*</span></label>
                    <Select options={testNameList} value={testName}  onChange={(e)=>{handleTestNameChange(e);setTestName(e)}} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                <div>
                    <label htmlFor='description' className='block mb-2 text-sm font-semibold'>Description</label>
                    <input type='text' value={description} name='description' id='description' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                </div>

                <div>
                    <label htmlFor='amount' className='block mb-2 text-sm font-semibold'>Amount REQ'D</label>
                    <input type='text' value={amount + ' ' + unit} name='amount' id='amount' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                </div>

                <div>
                    <label htmlFor='testMethod' className='block mb-2 text-sm font-semibold'>Method<span className='text-red-500'>*</span></label>
                    <Select options={testingMethodList} value={testingMethod}  onChange={(e)=>{setTestingMethod(e);handleTestingMethodChange(e)}} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

            </div>

            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-10'>
                 {/* Add On */}
                

                 {isAddOn && addOns.map((data,idx)=>(
                    <div className='m-2'>
                      <input type="checkbox" onChange={(e)=>checkAddOn(e,idx)} name={data.name+testDataId} id={data.name+testDataId} />
                      <label htmlFor={data.name+testDataId}>{data.name}</label>
                    </div>
                ))}
            </div>
               
        
               

        </span>

    </div>
  )
}

export default TestingSelectionForm