
import FirstBackground from "../../assets/dna.png";
// import SecondBackground from "../../assets/section-bg-3.png";
import SectionTopCurve from "../../assets/section-top-curve.png";


const OverviewSection = () => {

    

    return (

        <div className="relative bg-gradient-to-t from-gray-900 to-[#032725]">

            {/* Section Top Curve */}

            <div className="-mt-2 overflow-y-visible">
                <img src={SectionTopCurve} alt="" className="w-screen h-full object-cover" />
            </div>

            {/* Content */}

            <div className=" relative z-30 lg:pt-10 pb-10 bg-transparent">


                {/* Row 1 */}

                <div className="lg:grid lg:grid-cols-2 gap-5 bg-transparent mt-32 text-gray-300">


                    <div data-aos="slide-left" className=" w-full lg:rounded-l-full bg-[#18debb] py-10 h-fit my-auto lg:order-1 ">

                        <img src="https://img.icons8.com/ios/200/000000/mission-of-a-company.png" alt="" className="block w-fit mx-auto mb-5"/>

                    </div>


                    <div data-aos="fade-in" className="h-fit my-auto">

                        <h2 className="block lg:text-7xl md:text-7xl sm:text-5xl font-semibold w-fit mx-auto text-[#18debb] mb-10 lg:pt-0 md:pt-10 sm:pt-10 ">Mission</h2>

                        <p className="lg:text-3xl md:text-3xl sm:text-2xl lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto font-medium text-center">Dedicated to delivering excellence in research, testing and product development through an uncompromising commitment to maintaining the highest of industry standards.</p>

                    </div>

                    

                </div>

                {/* Row 2 */}

                <div className="lg:grid lg:grid-cols-2 bg-transparent mt-32 text-gray-300">

                    <div data-aos="slide-right" className=" w-full lg:rounded-r-full bg-[#18debb] py-10 h-fit my-auto md:mb-10 sm:mb-10">
                        <img src="https://img.icons8.com/ios/200/000000/opera-glasses.png" alt="" className="block w-fit mx-auto mb-5"/>
                    </div>


                    <div data-aos="fade-in" className="h-fit my-auto">

                        <h2 className="block lg:text-7xl md:text-7xl sm:text-5xl font-semibold w-fit mx-auto text-[#18debb] mb-10">Vision</h2>

                        <p className="lg:text-3xl md:text-3xl sm:text-2xl lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto font-medium text-center">To push the boundaries of scientific discovery and vision, inspiring and celebrating innovation.</p>
                    
                    </div>

                </div>

                {/* Row 3 */}

                <div className="lg:grid lg:grid-cols-2 bg-transparent mt-32 text-gray-300">


                    <div data-aos="slide-left" className=" w-full lg:rounded-l-full bg-[#18debb] py-10 h-fit my-auto lg:order-1 md:mb-10 sm:mb-10">

                        <img src="https://img.icons8.com/ios/200/000000/guarantee--v2.png" alt="" className="block w-fit mx-auto mb-5"/>

                    </div>

                    <div data-aos="fade-in" className="h-fit my-auto">

                        <h2 className="block lg:text-7xl md:text-7xl sm:text-5xl font-semibold w-fit mx-auto text-[#18debb] mb-10">Quality</h2>

                        <p className="lg:text-3xl md:text-3xl sm:text-2xl lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto font-medium text-center">We are a center of excellence whose products and services transcend expectations. Our commitment to continuous improvement allows us to surpass all regulation and guideline requirements.</p>

                    </div>

                </div>



            </div>

            {/* Background Image */}

            <div className="absolute z-10 opacity-20 top-0 min-w-full min-h-full mt-3">

                <img src={FirstBackground} className = "absolute w-full h-full object-cover" alt="background" />



            </div>

        </div>

    );

}

export default OverviewSection;