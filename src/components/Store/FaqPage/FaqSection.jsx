import { useState, useEffect } from "react";
import GrayLogo from "../../../assets/logo-gray.png";
import FaqAccordion from "./FaqAccordion";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../../../utils/baseApi";
import { useAlert } from "react-alert";



const FaqSection = () => {

    const alert = useAlert()

    const[faq,setFaq] = useState([])

    var [generalTab, setGeneralTab] = useState(true);

    var [samplesTab, setSamplesTab] = useState(false);

    var [resultsTab, setResultsTab] = useState(false);


    

    //Tab Functions
    
    const isGeneralTab = () => {

        setGeneralTab(true);

        setSamplesTab(false);

        setResultsTab(false);
    }

    const isSamplesTab = () => {

        setGeneralTab(false);

        setSamplesTab(true);

        setResultsTab(false);

    }


    const isResultsTab = () => {

        setGeneralTab(false);

        setSamplesTab(false);

        setResultsTab(true);


    }


    async function fetchData(){
        try{
            const {data} =  await axios.get(`${url}/api/v1/faq/all`)
            setFaq(data.faqs)
            const arr = faq.map((item)=> {if(item.category === 'General'){return item}})
        }catch(error){
            alert.error(error.response.data.message)
        }
        

       
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (

        <div className="bg-stone-100 pt-52">

            {/* Heading */}

            <div data-aos="fade-in" className=" text-center lg:-ml-10 md:-ml-10 sm:-ml-0">
                <img src={GrayLogo} alt="" className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20" />
                <h2
                    data-aos="fade-in"
                    className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10"
                >
                    FAQs
                </h2>
            </div>

            {/* Tab Menu */}

            <div className="my-10">

                <div className="grid grid-cols-3 gap-5 text-center w-fit mx-auto text-2xl text-gray-600 font-semibold">

                    <div className={"w-fit mx-auto p-3 " + (generalTab ? "text-[#397f77]" : "")}>
                        <button onClick={() => isGeneralTab()} >General</button>
                    </div>

                    <div className={"w-fit mx-auto p-3 " + (samplesTab ? "text-[#397f77]" : "")}>
                        <button onClick={() => isSamplesTab()}>Samples</button>
                    </div>

                    <div className={"w-fit mx-auto p-3 " + (resultsTab ? "text-[#397f77]" : "")}>
                        <button onClick={() => isResultsTab()}>Results</button>
                    </div>

                </div>

            </div>

            {/* Accordions */}


            <div className="lg:w-1/2 md:w-2/3 sm:w-5/6 mx-auto pb-10 animate-crossfade">


                    {

                        generalTab ? (
                            
                            <div>
                                <FaqAccordion data={faq.map((item)=> {if(item.category === 'General'){return item}})} />
                            </div>
                        
                        ) 
                        
                        : samplesTab ? (

                            <div>
                                <FaqAccordion data={faq.map((item)=> {if(item.category === 'Samples'){return item}})} />
                            </div>

                        )

                        : (

                            <div>
                                <FaqAccordion data={faq.map((item)=> {if(item.category === 'Results'){return item}})} />
                            </div>

                        )


                    }

                

            </div>


            {/* Contact Section */}


            <div className="mt-10 pb-20">
                
                {/* Logo */}

                <div className="w-fit mx-auto">
                    <img src={GrayLogo} alt="" />
                </div>

                {/* Text */}

                <div className="block w-fit mx-auto text-gray-600 text-lg mt-5">
                    <h2>Couldn't find what you need?</h2>
                </div>   

                {/* Contact Button */}
                
                <div className="block w-fit mx-auto py-10" >
                    <Link to="/contact/business-information" className="px-8 py-3 text-xl bg-gray-600 border-2 border-gray-600 text-white hover:bg-white hover:text-gray-600 duration-300">Contact Us</Link>
                </div>

            </div>

        </div>

    );

}


export default FaqSection;