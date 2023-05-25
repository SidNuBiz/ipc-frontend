import React from 'react'
import Select from 'react-select'
import { useState } from 'react'

const TestingSelectionForm = () => {

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
    const [description, setDescription] = useState(null)
    const [amount, setAmount] = useState('3')
    const [unit, setUnit] = useState('grams')

    const [matrixFormList, setMatrixFormList] = useState(null)
    const[categoryList, setCategoryList] = useState(null)
    const [testNameList, setTestNameList] = useState(null) 

    function handleTypeChange(e) {

        setType(e.value)

        var matrixFormList = tests.find(test => test.value === e.value).matrixForms

        setMatrixFormList(matrixFormList)

        console.log(matrixFormList)
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
            label: 'Cannabis',
            value: 'cannabis',
            matrixForms: [
                {label: 'Flower', value: 'flower'},
                {label: 'Concentrate', value: 'concentrate'},
                {label: 'Edible', value: 'edible'},
                {label: 'Topical', value: 'topical'},
                
            ],

            categories: [

                {label: 'THC', value: 'thc'},
                {label: 'CBD', value: 'cbd'},
                {label: 'CBN', value: 'cbn'},
                {label: 'THCA', value: 'thca'},
                {label: 'CBDA', value: 'cbda'},
            ],

            testNames: [
                {label: 'Potency', value: 'potency'},
                {label: 'Terpene', value: 'terpene'},
                {label: 'Pesticide', value: 'pesticide'},
                {label: 'Heavy Metal', value: 'heavyMetal'},
            ],
        },

        { 
            label: 'Cosmetics',
            value: 'cosmetics',
            matrixForms: [
                {label: 'cosmeticsFlower', value: 'cosmetics-flower'},
                {label: 'cosmeticsConcentrate', value: 'cosmetics-concentrate'},
                {label: 'Edible', value: 'edible'},
                {label: 'cosmeticsTopical', value: 'cosmetics-topical'},
                
            ],

            categories: [

                {label: 'cosmeticsTHC', value: 'cosmetics-thc'},
                {label: 'cosmeticsCBD', value: 'cosmetics-cbd'},
                {label: 'cosmeticsCBN', value: 'cosmetics-cbn'},
                {label: 'cosmeticsTHCA', value: 'cosmetics-thca'},
                {label: 'cosmeticsCBDA', value: 'cosmetics-cbda'},
            ],

            testNames: [
                {label: 'cosmeticsPotency', value: 'cosmetics-potency'},
                {label: 'cosmeticsTerpene', value: 'cosmetics-terpene'},
                {label: 'cosmeticsPesticide', value: 'cosmetics-pesticide'},
                {label: 'cosmeticsHeavy Metal', value: 'cosmetics-heavyMetal'},
            ],
        },
    ]

  return (
    <div className='text-gray-600 bg-gray-50 p-3 rounded-md'>

        {/* Delete Test Button */}

        <span className='block float-right ml-3'>
            <button className='text-xs py-[2px] px-[7px] rounded-full border-red-500 border-[2px] text-red-500 font-semibold hover:bg-red-500 hover:text-white duration-300'>X</button>
        </span>

        {/* Testing selection Form */}

        <span className='block '>
                
            <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-2'>

                {/* Test Type */}

                <div>
                    {/* <button onClick={() => {console.log(type)}}>show type</button> */}
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Type</label>
                    <Select options={tests} defaultValue={type} onChange={handleTypeChange} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Matrix */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Matrix Form</label>
                    <Select options={matrixFormList} value={matrixForm} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Category */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Categories</label>
                    <Select options={categoryList} value={category} className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                </div>

                {/* Test Name */}

                <div>
                    <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Test Name</label>
                    <Select options={testNameList} value={testName} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
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