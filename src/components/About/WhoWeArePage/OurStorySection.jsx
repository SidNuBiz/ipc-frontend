import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GrayLogo from "../../../assets/logo-gray.png";
import ParentCompanyLogo from "../../../assets/parent-company-logo.png";

const OurStorySection = ({ourStorySlides}) => {

return (

    <div className=" mt-20">

        {/* About */}

        <div>

            {/* Heading */}

            <div className="mb-20 w-fit mx-auto">
                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">Our Story</h2>

                {/* Underline */}

                <div className="block h-1 w-10 mx-auto mt-5">

                    <div className="bg-gray-600 h-1 w-10 lg:ml-[15px] md:ml-[15px] sm:ml-[5px] mt-5"></div>

                </div>
            </div>

            {/* Who We Are Slider */}

            <div className="bg-gradient-to-r from-[#18debb] to-[#0283bb] text-white lg:text-4xl md:text-2xl sm:text-2xl">

                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval= {3000} showIndicators={false} showArrows={false} className="p-10 lg:w-2/3 md:w-5/6 sm:w-full mx-auto italic">

                    {

                        ourStorySlides.map((slide, index) => (

                            <div key={index} className="lg:p-10 md:p-10 h-fit text-left">

                                <p>{slide}</p>

                            </div>

                        ))

                    }

                </Carousel>

            </div>

            {/* Parent Company */}

            <div className=" relative w-full mt-20">
                
                <a target="_blank" rel="noreferrer" href="https://invp.ca/" className="group relative flex justify-center items-center w-fit mx-auto">

                    <span className="bg-[#397f77] px-12 py-16 text-3xl text-center text-white absolute rounded-full group-hover:opacity-0 duration-300">Parent<br />Company</span>

                    <span className="w-fit mx-auto p-10 opacity-0 group-hover:opacity-100 duration-300">

                        <img src={ParentCompanyLogo} alt="" className="w-[200px] h-auto" />

                    </span>

                </a>

            </div>

        </div>
        

    </div>

);

}


export default OurStorySection;