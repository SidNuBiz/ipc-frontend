import React from 'react'
import TestingSelectionForm from './TestingSelectionForm'
import Select from 'react-select'
import { useState } from 'react'

const SampleSubmissionFormSection = () => {

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

    const [selectedTurnaround, setSelectedTurnaround] = useState(null);

    const turnaroundList = [
        {label:"Standard", value: "standard"},
        {label:"Rushed", value: "rushed"},
    ]

  return (
    <div className='border-[1px] border-gray-300 p-5 text-gray-600 rounded-xl'>

        {/* Heading */}

        <div className='mb-5'>

            {/* Delete Sample Button */}

            <span className='inline-block mr-3'>
                <button className='py-[2px] px-[9px] rounded-full border-red-500 border-[2px] text-red-500 font-semibold hover:bg-red-500 hover:text-white duration-300'>X</button>
            </span>

            {/* Sample Count */}

            <span className=' inline-block'>
                <p className='font-semibold text-xl'>Sample 1</p>
            </span>

        </div>

        {/* Sample Form */}

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-10'>

            {/* Sample Name */}

            <div>
                <label htmlFor='sampleName' className='block mb-2 text-lg font-semibold'>Sample Name</label>
                <input type='text' name='sampleName' id='sampleName' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

            {/* Sample Batch/Lot # */}

            <div>
                <label htmlFor='sampleBatchLot' className='block mb-2 text-lg font-semibold'>Sample Batch/Lot #</label>
                <input type='text' name='sampleBatchLot' id='sampleBatchLot' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

            {/* Sample Date */}

            <div>
                <label htmlFor='sampleDate' className='block mb-2 text-lg font-semibold'>Sample Date</label>
                <input type='date' name='sampleDate' id='sampleDate' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

            {/* Sample Time */}

            <div>
                <label htmlFor='sampleTime' className='block mb-2 text-lg font-semibold'>Sample Time</label>
                <input type='time' name='sampleTime' id='sampleTime' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
            </div>

        </div>

        {/* Testing Selection */}

        {/* Heading */}

        <div className='mb-5'>
            <p className='font-semibold text-xl'>Testing</p>
        </div>

        {/* Tests */}

        <div className='mb-5'>

            <TestingSelectionForm />

        </div>

        {/* Add Test Button */}

        <div className='mb-10'>
            <button className='bg-[#397f77] hover:bg-[#18debb] rounded-md font-semibold text-white px-3 py-2 duration-300'>Add Test</button>
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

                    <Select options={turnaroundList} defaultValue={selectedTurnaround} className="rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />
                
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
                        <p className='font-semibold text-lg'>Special Storage/​Handling Conditions Required</p>
                    </div>

                    {/* Inputs */}

                    <div className=''>

                        {/* Away From Light */}

                        <div className='mb-2'>
                            <input type="checkbox" name="away-from-light" id="away-from-light" />
                            <label htmlFor="away-from-light"> Away From Light</label>
                        </div>

                        {/* Freezer */}

                        <div className='mb-2'>
                            <input type="checkbox" name="freezer" id="freezer" />
                            <label htmlFor="freezer"> Freezer</label>
                        </div>

                        {/* Hazardous */}

                        <div className='mb-2'>
                            <input type="checkbox" name="hazardous" id="hazardous" />
                            <label htmlFor="hazardous"> Hazardous</label>
                        </div>

                        {/* Hygroscopic */}

                        <div className='mb-2'>
                            <input type="checkbox" name="hygroscopic" id="hygroscopic" />
                            <label htmlFor="hygroscopic"> Hygroscopic</label>
                        </div>

                        {/* Refrigeration */}

                        <div className='mb-2'>
                            <input type="checkbox" name="hygroscopic" id="hygroscopic" />
                            <label htmlFor="hygroscopic"> Refrigeration</label>
                        </div>

                        {/* Room Temperature */}

                        <div className='mb-2'>
                            <input type="checkbox" name="room-temperature" id="room-temperature" />
                            <label htmlFor="room-temperature"> Room Temperature</label>
                        </div>

                        {/* N/​A */}

                        <div className='mb-2'>
                            <input type="checkbox" name="n/a" id="n/a" />
                            <label htmlFor="n/a"> N/​A</label>
                        </div>

                    </div>

                    {/* Others */}

                    <div>
                        <input type='text' name='others' id='others' placeholder='Other' className='w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none' />
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