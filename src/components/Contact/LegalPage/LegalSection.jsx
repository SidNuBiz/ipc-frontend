import { useRef,useState,useEffect } from "react";
import GrayLogo from "../../../assets/logo-gray.png";
import axios from 'axios';
import url from "../../../utils/baseApi";
import { useAlert } from "react-alert";

const LegalSection = () => {

    const alert = useAlert()

    const ref = useRef(null);

    const scrollToRef = () => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const [legal,setLegal] = useState({})

    async function fetchData(){
        try{
            const {data} =  await axios.get(`${url}/api/v1/legal/get`)
            setLegal(data.legal)
        }catch(error){
            alert.error(error.response.data.message)
        }    
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (

        <div className="">

            {/* Heading */}

            <div className="text-center pt-40 -ml-16">

                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -mr-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold ">Legal</h2>

            </div>

            {/* Sub Heading */}

            <div className="mt-10">
                <p className=" text-center lg:text-xl md:text-xl sm:text-md text-gray-600">{legal.subHeading}</p>
            </div>

            {/* Learn More Button */}

            <div className="mt-14 w-fit mx-auto">
                <button onClick={() => scrollToRef()} className=' bg-[#397f77] text-white text-xl px-20 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Learn More</button>
            </div>


            {/* Legal Section */}

            <div ref={ref} className="mt-32 mb-20">

                {
                    legal.description && legal.description.map((item, index) => (

                        <p key={index} className="lg:text-xl md:text-xl sm:text-md text-gray-600 mb-10">{item.paragraph}</p>

                    ))
                }

            </div>

        </div>

    );

}



export default LegalSection;