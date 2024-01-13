import GrayLogo from "../../../assets/logo-gray.png";

const NowOpeningSection = () => {

    return (

        <div className="bg-stone-100 pt-40">

            {/* Heading */}

            <div data-aos="fade-in" className=" text-center lg:-ml-10 md:-ml-10 sm:-ml-0">
                <img src={GrayLogo} alt="" className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20" />
                <h2
                    data-aos="fade-in"
                    className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10"
                >
                    Careers
                </h2>
            </div>

            {/* Sub Heading */}

            <div className="mb-10">
                <h2 className="text-center text-[#397f77] font-semibold lg:text-2xl md:text-2xl sm:text-xl">We're not hiring at the moment, but we're glad you're interested in joining our team! Keep an eye on this page for future opportunities.</h2>
            </div>

        </div>

    );

}


export default NowOpeningSection;