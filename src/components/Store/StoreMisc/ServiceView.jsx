import NavBar from "../../Misc/NavBar.jsx";
import Footer from "../../Misc/Footer.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {addItemsToCart} from "../../../actions/cartAction"
import { testingServices } from "../../../data/siteContent.js";
import { useSelector,useDispatch } from "react-redux";

const ServiceView = () => {

    const dispatch = useDispatch()

    const {serviceId} = useParams();

    const {products,loading} = useSelector(
        (state) => state.products
    );

    const thisService = products && products.find(service => service._id.toString() === serviceId);

    const [turnaround, setTurnaround] = useState(thisService && thisService.turnaroundTypes[0].addOnPrice);

    const [strains, setStrains] = useState(0);

    const [strainsType,setStrainsType] = useState([])
    const [turnaroundTitle,setTurnaroundTitle] = useState("Standard (7 buisness days)")

    const addToCart = ()=>{
        dispatch(addItemsToCart({thisService,strainsType,turnaroundType:{title:turnaroundTitle,addOnPrice:turnaround},calculatedPrice,productPrice:thisService.price}))
        setTurnaroundTitle("Standard (7 buisness days)")
        setStrainsType([])
    }

    const onTurnaroundValueChange = (e) => {
        setTurnaround(e.target.value);
        setTurnaroundTitle(e.target.selectedOptions[0].innerText)
    
    }

    const onStrainValueChange = (e) => {

        if (e.target.checked) {
            setStrains(strains + parseFloat(e.target.value));
            strainsType.push({title:e.target.id,addOnPrice:parseFloat(e.target.value)})
        } else {
            setStrains(strains - parseFloat(e.target.value));
            let filtered = strainsType.filter(function(value){ 
                return value.title != e.target.id;
            });
            setStrainsType(filtered)
        }

    }

    let calculatedPrice = thisService && thisService.price + parseFloat(turnaround) + parseFloat(strains)


    if (parseFloat(calculatedPrice) < 0) {                 // Disable Add to Cart Button if price is 0 or less

        document.getElementById("add-to-cart-btn").disabled = true;

    }

    useEffect(() => {
        setTurnaround(thisService && thisService.turnaroundTypes[0].addOnPrice)
        // 👇️ scroll to top on page load
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [thisService]);

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
                    <button onClick={() => {window.history.go(-1)}} className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-5">&#x2190;Back</button>
                </div>

                {/* Service Image */}

                <div className="w-full h-[250px]">
                    <img src={thisService && thisService.image.url} alt="" className="h-full w-full object-cover object-center" />
                </div>

                {/* Service Name */}

                <div className="mt-10">
                    
                    <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10">

                        {/* Details Column */}

                        <div>

                            {/* Name */}

                            <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-gray-600 font font-semibold">{thisService && thisService.name}</h2>

                            {/* Price */}

                            <h2 className="lg:text-3xl md:text-3xl sm:text-2xl text-gray-600 mt-5">C${ calculatedPrice}</h2>

                            {/* Description */}

                            <p className="lg:text-lg md:text-lg sm:text-base text-gray-600 mt-10">{thisService && thisService.description}</p>
                        </div>

                        {/* Selection Column */}

                        <div className="w-fit lg:mx-auto md:mx-auto ">

                            {/* Turnaround */}

                            <div className="mb-10">

                                <label htmlFor="turnaround" className="block text-xl font-semibold mb-10">Type</label>

                                <select name="turnaround" id="turnaround" value={turnaround} onChange={(e) => onTurnaroundValueChange(e)} className="p-3 text-lg focus:outline-none">

                                    {
                                        thisService && thisService.turnaroundTypes.map((turnaroundType, index) => (

                                            <option key={index} value={turnaroundType.addOnPrice} className="text-lg">{turnaroundType.title} ({turnaroundType.turnaround})</option>

                                        ))

                                    }

                                </select>

                            </div>

                            {/* Strains Check boxes */}
                            
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

                            </div>

                            {/* Add to Cart Button */}

                            <div className="mt-10">
                                <button onClick={addToCart} id="add-to-cart-btn" className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 disabled:bg-gray-500 ">Add to Cart</button>
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

    );

}


export default ServiceView;