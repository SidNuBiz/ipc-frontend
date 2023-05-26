import React from "react";
import GrayLogo from "../../../assets/logo-gray.png";
import SampleSubmissionFormSection from "./SampleSubmissionFormSection";
import SignatureCanvas from "react-signature-canvas";
import { useState } from "react";

const TestingSubmissionFormPageSection = () => {

    const [sampleList,setSampleList]=useState([<div className="mb-10"><SampleSubmissionFormSection /></div>])
    const [signature, setSignature] = useState(null);

    const clearSignature = () => {
        signature.clear();
    };

    const addSample = () => {
        setSampleList([...sampleList,<div className="mb-10"><SampleSubmissionFormSection /></div>])
    }

    return (
        <div className="text-gray-600">
            {/* Heading */}

            <div className="text-center -ml-16 mb-10">
                <img
                    src={GrayLogo}
                    alt=""
                    className="inline-block align-top mb-5 opacity-50 -mr-10 lg:w-32 md:w-32 sm:w-20"
                />
                <h2
                    data-aos="fade-in"
                    className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold ">
                    Submission Form
                </h2>
            </div>

            {/* Sample Submission */}

            <div>
                {/* Heading */}

                <div className="w-full mb-5">
                    <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Samples</h2>
                </div>
                {sampleList.map((item)=>(
                    item
                ))}
             
            </div>

            {/* Add Sample Button */}

            <div className="mb-10">
                <button onClick={addSample} className="bg-[#397f77] hover:bg-[#18debb] rounded-md font-semibold text-white px-3 py-2 duration-300">Add Sample</button>
            </div>

            {/* Comments/​Additional Notes */}

            <div className="mb-5">
                {/* Heading */}

                <div className="mb-5">
                    <p className="font-semibold text-xl">Additional Testing Information</p>
                </div>

                {/* Input */}

                <textarea
                    name=""
                    id=""
                    rows="3"
                    className="w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none"></textarea>
            </div>

            {/* Notes */}

            <div className="mb-10">
                <p className="text-sm mb-4">
                    Innovate Phytoceuticals will reference predetermined test limits from accredited pharmacopoeias or Health Canada standards for all
                    samples submitted unless otherwise instructed. If you would like specific test limits for your sample, please clearly indicate in
                    the comments/additional notes section.
                </p>

                <p className="text-sm mb-4">
                    Please review all entries made up to this point and select submit if you are ready to send your samples to us. Select "Save" if
                    you need more time to work on this form.
                </p>

                <p className="text-sm">Some Tests require additional validation which will affect turn around times.</p>
            </div>

            {/* Signature and Acknowledgement */}

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {/* Signature */}

                <div>
                    {/* Heading */}

                    <div>
                        <p className="font-semibold text-xl mb-5">Signature</p>
                    </div>

                    <SignatureCanvas
                        ref={(data) => setSignature(data)}
                        penColor="black"
                        canvasProps={{ height: 200, className: "sigCanvas border-2 w-full" }}
                    />

                    <button
                        onClick={clearSignature}
                        className="bg-[#397f77] hover:bg-[#18debb] rounded-md font-semibold text-white mt-3 px-3 py-2 duration-300">
                        Clear
                    </button>
                </div>

                {/* Acknowledgement */}

                <div>
                    <div className="mb-5">
                        <input
                            type="checkbox"
                            name="acknowledgement"
                            id="acknowledgement"
                        />
                        <label htmlFor="acknowledgement"> Acknowledgement</label>
                    </div>

                    {/* Notes */}

                    <div className="text-xs mb-10">
                        <p className=" mb-4">
                            Innovate Phytoceuticals will reference predetermined test limits from accredited pharmacopoeias or Health Canada standards
                            for all samples submitted unless otherwise instructed. If you would like specific test limits for your sample, please
                            clearly indicate in the comments/additional notes section.
                        </p>

                        <p className=" mb-4">
                            Please review all entries made up to this point and select submit if you are ready to send your samples to us. Select
                            "Save" if you need more time to work on this form.
                        </p>

                        <p className="">Some Tests require additional validation which will affect turn around times.</p>
                    </div>
                </div>
            </div>

            {/* Submit Button */}

            <div className="mt-10 w-fit ml-auto">
                <button className="bg-[#397f77] hover:bg-[#18debb] rounded-md font-semibold text-white px-5 py-3 duration-300">Submit</button>
            </div>
        </div>
    );
};

export default TestingSubmissionFormPageSection;