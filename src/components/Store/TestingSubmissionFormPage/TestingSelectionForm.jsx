import React from 'react'
import Select from 'react-select'
import { useState } from 'react'
import { newMap } from "../../../data/mapping-json";

let typeTests
let matrixFormTests
let categoriesTests

const TestingSelectionForm = () => {

    function removeDuplicate(arr) {
        let outputArray = arr.filter(function(v, i, self){
          return i == self.indexOf(v);
        });
      
        return outputArray;
    }
      

    // var selectedValue = {

    //     type: '',
    //     matrixForm: '',
    //     category: '',
    //     testName: '',
    // }

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

        setType(e.value)
        let matrixArr = []
        typeTests = newMap.filter(data => (data.Type2 != undefined ? data.Type2.includes(e.value):false))
        typeTests.forEach(data => data.MatrixForm != undefined ? matrixArr.push(...data.MatrixForm):false)
        const selectMatrixArr = removeDuplicate(matrixArr).map((data) => {
            return {label:data,value:data}
        })
        setMatrixFormList(selectMatrixArr)
       
    }

    function handleMatrixChange(e) {
        setMatrixForm(e.value)
        let categoriesArr = []
        matrixFormTests = typeTests.filter(data => data.MatrixForm != undefined ? data.MatrixForm.includes(e.value):false)
        matrixFormTests.forEach(data => data.MatrixForm != undefined ? categoriesArr.push(data.Categories):false)
        const selectCategoriesArr = removeDuplicate(categoriesArr).map((data) => {
            return {label:data,value:data}
        })
        setCategoryList(selectCategoriesArr)
       
    }

    function handleCategoryChange(e) {
        setCategory(e.value)
        let testNameArr = []
        categoriesTests = matrixFormTests.filter(data => data.Categories == e.value)
        categoriesTests.forEach(data => data.Name != undefined ? testNameArr.push(data.Name):false)
        const selectTestNameArr = removeDuplicate(testNameArr).map((data) => {
            return {label:data,value:data}
        })
        setTestNameList(selectTestNameArr)
    }

    function handleTestNameChange(e) {
        const nameTests = categoriesTests.filter(data => data.Name == e.value)
        console.log(nameTests)
        setDescription(nameTests[0].Description)
        setAmount(nameTests[0].USPAmtReq)
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
    ]

  return (
    <div className='text-gray-600 bg-gray-50 p-3 rounded-md'>

        {/* Testing selection Form */}

        <span className='block '>
                
            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2'>

                {/* Test Type */}

                <div>
                    {/* <button onClick={() => {console.log(type)}}>show type</button> */}
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Type</label>
                    <Select options={tests} value={type} onChange={(e) =>{handleTypeChange(e); setType(e); }} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Matrix */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Matrix Form</label>
                    <Select options={matrixFormList} value={matrixForm} onChange={(e) => {handleMatrixChange(e); setMatrixForm(e);}} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Category */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Categories</label>
                    <Select options={categoryList}  onChange={handleCategoryChange} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Name */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Test Name</label>
                    <Select options={testNameList}  onChange={handleTestNameChange} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                <div>
                    <label htmlFor='description' className='block mb-2 text-sm font-semibold'>Description</label>
                    <input type='text' value={description} name='sampleName' id='sampleName' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                </div>

                <div>
                    <label htmlFor='description' className='block mb-2 text-sm font-semibold'>Amount REQ'D</label>
                    <input type='text' value={amount + ' ' + unit} name='sampleName' id='sampleName' className='w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none' disabled />
                </div>

            </div>

        </span>

    </div>
  )
}

export default TestingSelectionForm