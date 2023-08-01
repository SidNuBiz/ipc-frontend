import GrayLogo from "../../assets/logo-gray.png";
import { Link } from "react-router-dom";

const ServicesSection = ({services}) => {

    return (

        <div className="my-20">

            {/* Headline */}

            <div>
                <h2>
                    <span className="block mb-5 text-center font-semibold">
                        <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                        <h2 className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">Testing Services</h2>
                    </span>

                    <span className="block lg:text-2xl md:text-2xl sm:text-xl text-center text-[#397f77]">Offered by Innovate Phytoceuticals</span>
                </h2>
            </div>

            {/* Testing Services */}

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-20 w-5/6 mx-auto text-gray-600">

                {/* Service 1 */}

                {services.map(((service,idx) => (

                    <div className="hover:scale-110 duration-300 ">
                        <Link to={"/services/"+idx}>

                            <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                                <span className="block w-fit mx-auto mb-5 opacity-80">
                                    <img src={service.icon} alt=""/>
                                </span>

                                <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">{service.title}</span>

                            </div>

                        </Link>
                    </div>


                )))}

            </div>

        </div>

    );

}

export default ServicesSection;