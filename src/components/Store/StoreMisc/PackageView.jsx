import React, { useEffect } from "react";
import NavBar from "../../Misc/NavBar";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { packages } from "../../../data/siteContent";
import Footer from "../../Misc/Footer";

const PackageView = () => {
    //   const [notification, setNotification] = useState({trigger:false,notificationMessage:""})

    const packageId = useParams().packageId;

    const thisPackage = packages && packages.find((pkg) => pkg.id.toString() === packageId);

    const [totalStandardPrice, setTotalStandardPrice] = useState(0);

    function calculateTotalStandardPrice() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.standard;
            });
        setTotalStandardPrice(total);
    }

    const [totalStandard2Price, setTotalStandard2Price] = useState(0);

    function calculateTotalStandard2Price() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.standard2;
            });
        setTotalStandard2Price(total);
    }

    const [totalStandard3Price, setTotalStandard3Price] = useState(0);

    function calculateTotalStandard3Price() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.standard3;
            });
        setTotalStandard3Price(total);
    }

    const [totalRushedPrice, setTotalRushedPrice] = useState(0);

    function calculateTotalRushedPrice() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.rushed;
            });
        setTotalRushedPrice(total);
    }

    const [totalRushed2Price, setTotalRushed2Price] = useState(0);

    function calculateTotalRushed2Price() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.rushed2;
            });
        setTotalRushed2Price(total);
    }

    const [totalRushed3Price, setTotalRushed3Price] = useState(0);

    function calculateTotalRushed3Price() {
        let total = 0;
        thisPackage &&
            thisPackage.tests.forEach((test) => {
                total += test.price.rushed3;
            });
        setTotalRushed3Price(total);
    }

    // const [calculatedPrice, setCalculatedPrice] = useState();

    const [turnaround, setTurnaround] = useState(thisPackage && thisPackage.turnaroundTypes[0].price);

    let calculatedPrice = parseFloat(turnaround);


    useEffect(() => {

        setTurnaround(thisPackage && thisPackage.turnaroundTypes[0].price);
        // setCalculatedPrice(thisPackage && thisPackage.turnaroundTypes[0].price);
        calculateTotalStandardPrice();
        calculateTotalStandard2Price();
        calculateTotalStandard3Price();
        calculateTotalRushedPrice();
        calculateTotalRushed2Price();
        calculateTotalRushed3Price();

    }, []);

    

    const onTurnaroundValueChange = (e) => {
        setTurnaround(e.target.value);
        // setCalculatedPrice(turnaround);
        // setTurnaroundTitle(e.target.selectedOptions[0].innerText)
    };

    return (
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

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Description</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Sample Required</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard Price</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard2 Price</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Standard3 Price</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed Price</th>

                                        <th className="text-left text-xl font-semibold border-2 px-3 py-1">Rushed2 Price</th>

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

                                    {thisPackage.tests &&
                                        thisPackage.tests.map((test, index) => (
                                            <tr
                                                key={index}
                                                className="border-b-2 border-gray-300">
                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.testCode}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.name}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.description}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.sampleRequired}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.standard}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.standard2}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.standard3}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.rushed}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.rushed2}</td>

                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.price.rushed3}</td>
                                            </tr>
                                        ))}

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
                                    </tr>

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

                            <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-gray-600 mb-5">C${calculatedPrice}</h2>

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

                        <div className="mb-10 w-fit mr-0 ml-auto">
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
};

export default PackageView;
