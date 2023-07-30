import GrayLogo from "../../assets/logo-gray.png";
import { Link } from "react-router-dom";

const ServicesSection = ({services}) => {

    console.log(services)

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

                <div className="hover:scale-110 duration-300 ">
                    <Link to="/services/cannabis">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/ios-filled/100/397f77/marijuana-leaf.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Cannabis Testing</span>

                        </div>

                    </Link>
                </div>


                {/* Service 2 */}

                <div className=" hover:scale-110 duration-300">
                    <Link to="/services/nhp">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-glyph-geotatah/100/397f77/external-chemical-free-eco-friendly-lifestyle-glyph-glyph-geotatah-3.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">NHP (Natural Health Products)</span>

                        </div>

                    </Link>
                </div>


                {/* Service 3 */}

                <div className=" hover:scale-110 duration-300">
                    <Link to="/services/pharmaceutical">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-solidglyph-m-oki-orlando/100/397f77/external-Medicine-pharmacy-solidglyph-m-oki-orlando.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Pharmaceutical</span>

                        </div>

                    </Link>
                </div>


                {/* Service 4 */}

                <div className="hover:scale-110 duration-300">
                    <Link to="/services/fnb">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                            <img src="https://img.icons8.com/ios-filled/100/397f77/street-food--v1.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Food & Beverage</span>

                        </div>

                    </Link>
                </div>


                {/* Service 5 */}

                <div className=" hover:scale-110 duration-300 h-full">
                    <Link to="/services/rnd">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/397f77/external-research-marketing-seo-flatart-icons-solid-flatarticons.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">R&D</span>

                        </div>

                    </Link>
                </div>


                {/* Service 6 */}

                <div className=" hover:scale-110 duration-300">
                    <Link to="/services/cds">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/397f77/external-drug-diet-and-nutrition-flatart-icons-solid-flatarticons.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Controlled Drug & Substances</span>

                        </div>

                    </Link>
                </div>


                {/* Service 7 */}

                <div className=" hover:scale-110 duration-300">
                    <Link to="/services/environmental">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/397f77/external-recycle-earth-day-flatart-icons-solid-flatarticons.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Environmental</span>

                        </div>

                    </Link>
                </div>


                {/* Service 8 */}

                <div className=" hover:scale-110 duration-300">
                    <Link to="/services/agriculture">

                        <div className=" bg-white p-8 drop-shadow-xl rounded-2xl border-2 border-gray-50 h-full">

                            <span className="block w-fit mx-auto mb-5 opacity-80">
                                <img src="https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/100/397f77/external-agriculture-smart-agriculture-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png" alt=""/>
                            </span>

                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl font-medium text-center w-fit mx-auto">Agriculture</span>

                        </div>

                    </Link>
                </div>

            </div>

        </div>

    );

}

export default ServicesSection;