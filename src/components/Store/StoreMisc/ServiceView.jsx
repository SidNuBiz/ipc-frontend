import NavBar from "../../Misc/NavBar.jsx";
import Footer from "../../Misc/Footer.jsx";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import {addItemsToCart} from "../../../actions/cartAction"
import { testingServices } from "../../../data/siteContent.js";
import { useSelector,useDispatch } from "react-redux";
// import NotificationPopup from "../../Misc/NotificationPopup.jsx";
import {newMap} from "../../../data/mapping-json.js"
import Loader from "../../../pages/Loader.jsx";

const ServiceView = () => {

    const [searchKey,setSearchKey] = useState('')

    const {serviceId} = useParams();

    const {services,loading} = useSelector(
        (state) => state.services
    );

    const thisService = services && services.find(service => service._id.toString() === serviceId);

    // const [turnaround, setTurnaround] = useState(thisService && thisService.turnaroundTypes[0].addOnPrice);

    // const [strains, setStrains] = useState(0);

    // const [strainsType,setStrainsType] = useState([])
    // const [turnaroundTitle,setTurnaroundTitle] = useState("Standard (7 buisness days)")

    // const [notification,setNotification] = useState({trigger:false,notificationMessage:""})

    // const addToCart = ()=>{
    //     dispatch(addItemsToCart({thisService,strainsType,turnaroundType:{title:turnaroundTitle,addOnPrice:turnaround},calculatedPrice,productPrice:thisService.price}))
    //     setTurnaroundTitle("Standard (7 buisness days)")
    //     setStrainsType([])

        // setNotification({trigger:true,notificationMessage:"Item added to cart!"})
        // triggerNotification({trigger:true,notificationMessage:"Item added to cart!"})
    // }

    // const onTurnaroundValueChange = (e) => {
    //     setTurnaround(e.target.value);
    //     setTurnaroundTitle(e.target.selectedOptions[0].innerText)
    
    // }

    // const onStrainValueChange = (e) => {

    //     if (e.target.checked) {
    //         setStrains(strains + parseFloat(e.target.value));
    //         strainsType.push({title:e.target.id,addOnPrice:parseFloat(e.target.value)})
    //     } else {
    //         setStrains(strains - parseFloat(e.target.value));
    //         let filtered = strainsType.filter(function(value){ 
    //             return value.title != e.target.id;
    //         });
    //         setStrainsType(filtered)
    //     }

    // }

    // let calculatedPrice = thisService && thisService.price + parseFloat(turnaround) + parseFloat(strains)


    // if (parseFloat(calculatedPrice) < 0) {                 Disable Add to Cart Button if price is 0 or less

    //     document.getElementById("add-to-cart-btn").disabled = true;

    // }

    useEffect(() => {
        // setTurnaround(thisService && thisService.turnaroundTypes[0].addOnPrice)
        // 👇️ scroll to top on page load
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [thisService]);

    return (
        <Fragment>
        {thisService != undefined ? (
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
                    <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-5">&#x2190;Back</button>
                </div>

                {/* Service Image */}

                <div className="w-full h-[250px]">
                    <img src={thisService && thisService.mainImage} alt="" className="h-full w-full object-cover object-center" />
                </div>

                {/* Service Name */}

                <div className="mt-10">
                    
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">

                        {/* Details Column */}

                        <div>

                            {/* Name */}

                            <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-gray-600 font font-semibold">{thisService && thisService.title}</h2>


                                                
                          

                            {/* Price */}

                            {/* <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-gray-600 mt-5">C${ calculatedPrice}</h2> */}

                            {/* Description */}

                            {/* <p className="lg:text-lg md:text-lg sm:text-base text-gray-600 mt-10">{thisService && thisService.description.p}</p> */}
                            {/* <Link to="/testing-submission">
                                <div className="mt-10">
                                    <button id="add-to-cart-btn" className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 disabled:bg-gray-500 ">Submit a Sample</button>
                                </div>
                            </Link> */}
                        </div>

                        {/* Selection Column */}

                        <div className="w-fit lg:mx-auto md:mx-auto ">

                            {/* Turnaround */}
{/* 
                            <div className="mb-10">

                                <label htmlFor="turnaround" className="block text-xl font-semibold mb-10">Type</label>

                                <select name="turnaround" id="turnaround" value={turnaround} onChange={(e) => onTurnaroundValueChange(e)} className="p-3 text-lg focus:outline-none">

                                    {
                                        thisService && thisService.turnaroundTypes.map((turnaroundType, index) => (

                                            <option key={index} value={turnaroundType.addOnPrice} className="text-lg">{turnaroundType.title} ({turnaroundType.turnaround})</option>

                                        ))

                                    }

                                </select>

                            </div> */}

                            {/* Strains Check boxes */}
{/*                             
                            <div>


                                <label htmlFor="strains" className="block text-xl font-semibold mb-10">Additional Strains</label>

                                {
                                    thisService && thisService.strains.map((strain, index) => (

                                        <div key={index} className="flex items-center mb-5">

                                            <input key={index} id={strain.title} type="checkbox"  value={strain.addOnPrice} onChange={onStrainValueChange} />
                                            <label htmlFor={strain.title} className="ml-3 text-lg">{strain.title} (+C${strain.addOnPrice})</label>

                                        </div>

                                    ))
                                }

                            </div> */}

                            {/* Add to Cart Button */}

                            {/* <div className="mt-10">
                                <button onClick={addToCart} id="add-to-cart-btn" className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 disabled:bg-gray-500 ">Add to Cart</button>
                            </div> */}
                    
                          


                        </div>



                    </div>

                    
                    <div className=" pt-10 animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">
                                {/* Go Back Button */}

                 
                                {/*Searcb Bar  */}
                                <div className="col-span-3 sm:order-2">

                                    <input type="text" placeholder="Search Test..." className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

                                </div>

                                {/* Service Name */}

                                <div className="mt-10 text-gray-600">
                                    {/* Name */}

                                    <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-gray-600 font font-semibold mb-5"> {thisService.title} Tests Pricing</h2>

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

                                                    {newMap &&
                                                        newMap.filter(data => (data.Type2 != undefined ? data.Type2.includes(thisService.codeName):false)).filter( tests => tests.Name.toLowerCase().includes(searchKey.toLowerCase())).map((test, index) => (
                                                            <tr
                                                                key={index}
                                                                className="border-b-2 border-gray-300">
                                                                {/* <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.testCode}</td> */}

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.Name}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.Description}</td>

                                                                {/* <td className="text-left text-lg font-normal border-2 px-3 py-1">{test.sampleRequired}</td> */}

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.StandardPricing}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.RushedPricing}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.StandardPricingLvl2}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.RushedPricingLvl2}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.StandardPricingLvl3}</td>

                                                                <td className="text-left text-lg font-normal border-2 px-3 py-1">C${test.RushedPricingLvl3}</td>
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

                </div>

            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

        </Fragment>
        ) : (
           <Loader />
        )}
        </Fragment>

    );

}


export default ServiceView;