import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import { newMap } from "../../../data/mapping-json";

let typeTests
let matrixFormTests
let categoriesTests

const TestingSelectionForm = ({testDataId,sampleDataMerged,testFormData}) => {

    function removeDuplicate(arr) {
        let outputArray = arr.filter(function(v, i, self){
          return i === self.indexOf(v);
        });
      
        return outputArray;
    }
      
    const [type, setType] = useState(null)
    const [matrixForm, setMatrixForm] = useState(null)
    const [category, setCategory] = useState(null)
    const [testName, setTestName] = useState(null)
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [unit, setUnit] = useState('')

    const [matrixFormList, setMatrixFormList] = useState([])
    const[categoryList, setCategoryList] = useState(null)
    const [testNameList, setTestNameList] = useState(null) 

    function handleTypeChange(e) {
        
        setMatrixForm(null);
        setCategory(null)
        setTestName(null)
        setDescription('')
        setAmount('')
        setUnit('')

        setType(e.value)
        let matrixArr = []
        typeTests = newMap.filter(data => (data.Type2 !== undefined ? data.Type2.includes(e.value):false))
        typeTests.forEach(data => data.MatrixForm !== undefined ? matrixArr.push(...data.MatrixForm):false)
        const selectMatrixArr = removeDuplicate(matrixArr).map((data) => {
            return {label:data,value:data}
        })
        setMatrixFormList(selectMatrixArr)
       
    }

    function handleMatrixChange(e) {
        setCategory(null)
        setTestName(null)
        setDescription('')
        setAmount('')
        setUnit('')
        let categoriesArr = []
        matrixFormTests = typeTests.filter(data => data.MatrixForm !== undefined ? data.MatrixForm.includes(e.value):false)
        matrixFormTests.forEach(data => data.MatrixForm !== undefined ? categoriesArr.push(data.Categories):false)
        const selectCategoriesArr = removeDuplicate(categoriesArr).map((data) => {
            return {label:data,value:data}
        })
        setCategoryList(selectCategoriesArr)
        
    }

    function handleCategoryChange(e) {
        setTestName(null)
        setDescription('')
        setAmount('')
        setUnit('')
        let testNameArr = []
        categoriesTests = matrixFormTests.filter(data => data.Categories === e.value)
        categoriesTests.forEach(data => data.Name !== undefined ? testNameArr.push(data.Name):false)
        const selectTestNameArr = removeDuplicate(testNameArr).map((data) => {
            return {label:data,value:data}
        })
        setTestNameList(selectTestNameArr)
    }

    const handleTestNameChange =  (e) => {
        setDescription('')
        setAmount('')
        setUnit('')
        const nameTests = categoriesTests.filter(data => data.Name === e.value)
        setDescription(nameTests[0].Description)
        setAmount(nameTests[0].USPAmtReq)
        console.log(testFormData)
        const filteredTestFormData = testFormData.filter(test => {
            return test.id !== testDataId
        })
     
        sampleDataMerged({td:[...filteredTestFormData,{
            id:testDataId,
            type:type.value,
            matrixForm:matrixForm.value,
            category:category.value,
            test:nameTests[0]
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

    const tests = [
        { 
            label: 'Environmental',
            value: 'Environmental',
        },
        { 
            label: 'Cannabis',
            value: 'Cannabis',
        },
        { 
            label: 'Cosmetics',
            value: 'Cosmetics',
        },
        { 
            label: 'NHP',
            value: 'NHP',
        },
        { 
            label: 'Food',
            value: 'Food',
        },
        {
            label: 'Water',
            value: 'Water'
        }
    ]

  return (
    <div className='text-gray-600 bg-gray-50 p-3 rounded-md'>

        {/* Testing selection Form */}

        <span className='block '>
                
            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2'>

                {/* Test Type */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Type<span className='text-red-500'>*</span></label>
                    <Select options={tests} value={type} onChange={(e) =>{handleTypeChange(e); setType(e); }} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Matrix */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Matrix Form<span className='text-red-500'>*</span></label>
                    <Select options={matrixFormList} value={matrixForm} onChange={(e) => {handleMatrixChange(e); setMatrixForm(e);}} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
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

            </div>

        </span>

    </div>
  )
}

export default TestingSelectionForm