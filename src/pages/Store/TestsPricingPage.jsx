import { useEffect, useState } from "react";
import NavBar from "../../components/Misc/NavBar.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"




const TestsPricingPage = () => {

    const [searchKey,setSearchKey] = useState('')

    const {analyses} = useSelector(state=>state.analyses)
    // const {packages} = useSelector(state=>state.packages)


    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

        {/* NavBar */}

        <div>
            <NavBar />
        </div>

        {/* Page Section */}

        <div className=" pt-32 animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">
            {/* Go Back Button */}

            <div className="mb-5">
                <button
                    onClick={() => {
                        window.history.go(-1);
                    }}
                    className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-5">
                    &#x2190;Back
                </button>
            </div>

            {/*Searcb Bar  */}
            <div className="col-span-3 sm:order-2">

                <input type="text" placeholder="Search Test..." className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

            </div>

            {/* Service Name */}

            <div className="mt-10 text-gray-600">
                {/* Name */}

                <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-gray-600 font font-semibold mb-5">Tests Pricing</h2>

                <div className=" grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10">
                    {/* Details Column */}

                    <div className="my-5 w-full overflow-x-auto">
                        {/* Details */}

                        <table className=" table-auto w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-300">
                                    {/* <th className="text-left text-xl font-semibold border-2 px-3 py-1">Test Code</th> */}

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Test Name</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Description</th>

                                    {/* <th className="text-left text-xl font-semibold border-2 px-3 py-1">Matrix</th> */}

                                    {/* <th className="text-left text-xl font-semibold border-2 px-3 py-1">Sample Required</th> */}

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard Price</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed Price</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard2 Price</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed2 Price</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard3 Price</th>

                                    <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed3 Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <tr className="border-b-2 border-gray-300">

                                    <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].testCode}</td>

                                    <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].name}</td>

                                    <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].description}</td>

                                    <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].sampleRequired}</td>
                                </tr> */}

                                {analyses && 
                                    analyses.filter( tests => tests.name.toLowerCase().includes(searchKey.toLowerCase())).map((test, index) => (
                                        <tr
                                            key={index}
                                            className="border-b-2 border-gray-300">
                                            {/* <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.testCode}</td> */}

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.name}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.description}</td>

                                            {/* <td className="text-left text-lg font-normal border-2 px-3 py-1">
                                                {test.matrixForm.map((matrix, index) => (
                                                    (
                                                        <span key={index}>
                                                            {index == 0 ? matrix.name : ", "+matrix.name} 
                                                        </span>
                                                    )
                                                ))}
                                            </td> */}

                                            {/* <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.sampleRequired}</td> */}

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.standardPricing}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.rushedPricing}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.standardPricingLvl2}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.rushedPricingLvl2}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.standardPricingLvl3}</td>

                                            <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.rushedPricingLvl3}</td>
                                        </tr>
                                    ))}
{/* 
                                <tr className="border-b-2 border-gray-300">
                                    <td
                                        colSpan={4}
                                        className="text-left text-xl font-semibold border-2 px-3 py-1">
                                        Regular Price
                                    </td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalStandardPrice}</td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalStandard2Price}</td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalStandard3Price}</td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalRushedPrice}</td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalRushed2Price}</td>

                                    <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalRushed3Price}</td>
                                </tr> */}
{/* 
                                <tr className="border-b-2 border-gray-300">
                                    <td
                                        colSpan={4}
                                        className="text-left text-xl font-semibold border-2 px-3 py-1">
                                        Package Price
                                    </td>

                                    {thisPackage.turnaroundTypes &&
                                        thisPackage.turnaroundTypes.map((turnaroundType, index) => (
                                            <td
                                                key={index}
                                                className="text-left text-xl font-semibold border-2 px-3 py-1">
                                                C${turnaroundType.price}
                                            </td>
                                        ))}
                                </tr> */}
                            </tbody>
                        </table>

                        {/* Description */}

                        {/* <p className="lg:text-lg md:text-lg sm:text-base text-gray-600 mt-10">{thisPackage && thisPackage.description}</p>
                        <Link to="/testing-submission">
                            <div className="mt-10">
                                <button id="add-to-cart-btn" className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 disabled:bg-gray-500 ">Submit a Sample</button>
                            </div>
                        </Link> */}
                    </div>
                </div>

                {/* Selection & Price Column */}

                <div className=" mt-10 w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:mx-auto md:mx-auto ">
                    <div>
                        {/* Price */}

                       

                        <Link to="/testing-submission">
                            <div className="mt-5">
                                <button
                                    id="add-to-cart-btn"
                                    className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 disabled:bg-gray-500 ">
                                    Submit a Sample
                                </button>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>

        {/* Footer */}

        <div>
            <Footer />
        </div>
    </div>

    );

}



export default TestsPricingPage;