import React, { useEffect,Fragment } from "react";
import NavBar from "../../Misc/NavBar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../Misc/Footer";
import { useSelector } from "react-redux";
import Loader from "../../../pages/Loader";

const PackageView = () => {
    //   const [notification, setNotification] = useState({trigger:false,notificationMessage:""})

    const packageId = useParams().packageId;
    const {loading,packages} = useSelector(state => state.packages)

    const thisPackage = packages && packages.find((pkg) => pkg._id === packageId);

    const [totalStandardPrice, setTotalStandardPrice] = useState(0);

    function calculateTotalStandardPrice() {
        let total = 0;
        thisPackage &&
            thisPackage.packageTests.forEach((test) => {
                total += test.standardPricing;
            });
        setTotalStandardPrice(total);
    }


    const [totalRushedPrice, setTotalRushedPrice] = useState(0);

    function calculateTotalRushedPrice() {
        let total = 0;
        thisPackage &&
            thisPackage.packageTests.forEach((test) => {
                total += test.rushedPricing;
            });
        setTotalRushedPrice(total);
    }

    const [totalUrgentPrice, setTotalUrgentPrice] = useState(0);

    function calculateTotalUrgentPrice() {
        let total = 0;
        thisPackage &&
            thisPackage.packageTests.forEach((test) => {
                total += test.urgentPricing;
            });
        setTotalUrgentPrice(total);
    }


    // const [calculatedPrice, setCalculatedPrice] = useState();

    // const [turnaround, setTurnaround] = useState(thisPackage && thisPackage.turnaroundTypes[0].price);

    // let calculatedPrice = parseFloat(turnaround);


    useEffect(() => {

        // setTurnaround(thisPackage && thisPackage.turnaroundTypes[0].price);
        // setCalculatedPrice(thisPackage && thisPackage.turnaroundTypes[0].price);
        calculateTotalStandardPrice();
        calculateTotalRushedPrice();
        calculateTotalUrgentPrice()

    }, []);

    

    // const onTurnaroundValueChange = (e) => {
    //     setTurnaround(e.target.value);
        // setCalculatedPrice(turnaround);
        // setTurnaroundTitle(e.target.selectedOptions[0].innerText)
    // };

    return (

        <Fragment>{loading === false ?
                
            <Fragment>
                <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">
                    {/* Notification Popup */}

                    {/* <NotificationPopup notification={notification}/> */}

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

                        {/* Service Image */}

                        <div className="w-full h-[250px]">
                            <img
                                src={thisPackage && thisPackage.img}
                                alt=""
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        {/* Service Name */}

                        <div className="mt-10 text-gray-600">
                            {/* Name */}

                            <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-gray-600 font font-semibold mb-5">{thisPackage && thisPackage.name}</h2>

                            <div className=" grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-10">
                                {/* Details Column */}

                                <div className="my-5 w-full overflow-x-auto">
                                    {/* Details */}

                                    <table className=" table-auto w-full">
                                        <thead>
                                            <tr className="border-b-2 border-gray-300">
                                                <th className="text-left text-xl font-semibold border-2 px-3 py-1">Test Code</th>

                                                <th className="text-left text-xl font-semibold border-2 px-3 py-1">Test Name</th>

                                                <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard Price</th>

                                                <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed Price</th>

                                                <th className="text-left text-xl font-semibold border-2 px-3 py-1">Urgent Price</th>

                                            </tr>
                                        </thead>

                                        <tbody>
                                            {/* <tr className="border-b-2 border-gray-300">

                                                <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].testCode}</td>

                                                <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].name}</td>

                                                <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].description}</td>

                                                <td className="text-left text-xl font-semibold border-2 px-3 py-1">{thisPackage && thisPackage.tests[0].sampleRequired}</td>
                                            </tr> */}

                                            {thisPackage.packageTests &&
                                                thisPackage.packageTests.map((test, index) => (
                                                    <tr
                                                        key={index}
                                                        className="border-b-2 border-gray-300">
                                                        <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.testingCode}</td>

                                                        <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.name}</td>

                                                        <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.standardPricing}</td>

                                                        <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.rushedPricing}</td>

                                                        <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.urgentPricing}</td>

                                                    </tr>
                                                ))}

                                            <tr className="border-b-2 border-gray-300">
                                                <td
                                                    colSpan={2}
                                                    className="text-left text-xl font-semibold border-2 px-3 py-1">
                                                    Regular Price
                                                </td>

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalStandardPrice}</td>

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalRushedPrice}</td>

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${totalUrgentPrice}</td>

                                                
                                            </tr>

                                            <tr className="border-b-2 border-gray-300">
                                                <td
                                                    colSpan={2}
                                                    className="text-left text-xl font-semibold border-2 px-3 py-1">
                                                    Package Price
                                                </td>

                                                {/* {thisPackage.turnaroundTypes &&
                                                    thisPackage.turnaroundTypes.map((turnaroundType, index) => (
                                                        <td
                                                            key={index}
                                                            className="text-left text-xl font-semibold border-2 px-3 py-1">
                                                            C${turnaroundType.price}
                                                        </td>
                                                    ))} */}

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${thisPackage.standardPricing}</td>

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${thisPackage.rushedPricing}</td>

                                                <td className="text-left text-xl font-normal border-2 px-3 py-1">C${thisPackage.urgentPricing}</td>
                                            </tr>
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

                                    {/* <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-gray-600 mb-5">C${calculatedPrice}</h2> */}

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

                                {/* Turnaround */}

                                {/* <div className="mb-10 w-fit mr-0 ml-auto">
                                    <label
                                        htmlFor="turnaround"
                                        className="block text-xl font-semibold mb-5">
                                        Turnaround Type
                                    </label>

                                    <select
                                        name="turnaround"
                                        id="turnaround"
                                        value={turnaround}
                                        onChange={(e) => onTurnaroundValueChange(e)}
                                        className="p-3 text-lg focus:outline-none w-full">
                                        {thisPackage &&
                                            thisPackage.turnaroundTypes.map((turnaroundType, index) => (
                                                <option
                                                    key={index}
                                                    value={turnaroundType.price}
                                                    className="text-lg">
                                                    {turnaroundType.title}
                                                </option>
                                            ))}
                                    </select>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}

                    <div>
                        <Footer />
                    </div>
                </div>
            </Fragment> :
            <Loader /> 
        }</Fragment>
        
    );
};

export default PackageView;
