import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GrayLogo from "../../../assets/logo-gray.png";
import InvpBuilding from "../../../assets/invp-building.png";


const WhoWeAreSection = ({whoWeAreSlides}) => {

return (

    <div className=" pt-40">

        {/* About */}

        <div>

            {/* Heading */}

            <div className="mb-20 text-center">
                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">About Us</h2>
            </div>

            {/* Who We Are Slider */}

            <div className="bg-gradient-to-r from-[#18debb] to-[#0283bb] text-white lg:text-4xl md:text-2xl sm:text-2xl">

                {/* Heading */}

                <h2 className=" lg:text-3xl md:text-3xl sm:text-xl text-center font-semibold w-fit mx-auto pt-10 lg:-mb-10 md:-mb-10">Who We Are</h2>

                <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval= {3000} showIndicators={false} showArrows={false} className="p-10 lg:w-2/3 md:w-5/6 sm:w-full mx-auto italic">

                    {

                        whoWeAreSlides.map((slide, index) => (

                            <div key={index} className="lg:p-10 md:p-10 h-fit text-left">

                                <p>{slide}</p>

                            </div>

                        ))

                    }

                </Carousel>

            </div>

            {/* Banner Image */}

            <div className="w-full-h-screen">
                
                <img src={InvpBuilding} alt="" className="w-full h-full object-cover" />

            </div>

        </div>
        

    </div>

);

}


export default WhoWeAreSection;