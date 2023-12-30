import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import GrayLogo from "../../../assets/logo-gray.png";

const OurClientsSection = ({clients}) => {

    const responsive = {
        0: { items: 1 },
        300: { items: 2 },
        600: { items: 3 },
        900: { items: 4 },
    };


    return (

        <div className="mt-20">

            {/* Heading */}

            <div className="mb-20 w-fit mx-auto">
                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">Our Clients</h2>

                {/* Underline */}

                <div className="block h-1 w-10 mx-auto mt-5">

                    <div className="bg-gray-600 h-1 w-10 lg:ml-[15px] md:ml-[15px] sm:ml-[5px] mt-5"></div>

                </div>
            </div>


            {/* Clients Slider */}

            <div className='w-5/6 mx-auto'>

                <AliceCarousel mouseTracking responsive={responsive} infinite disableDotsControls autoPlay autoPlayInterval={2000}>

                    {

                        clients.map((client, index) => (

                            <div key={index}>
                                <img src={client} alt="" className=" w-[300px]" />
                            </div>

                        ))

                    }

                </AliceCarousel>

            </div>

        </div>

    );

}


export default OurClientsSection;