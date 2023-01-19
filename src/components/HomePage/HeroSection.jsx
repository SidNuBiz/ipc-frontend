
import HeroBackground from "../../assets/hero-background.mp4";
import LogoWhite from "../../assets/logo-white.webp";
import SectionBottomCurve from "../../assets/section-bottom-curve.png";

const HeroSection = ({scrollToRef}) => {
    return (
        <header className="relative flex items-center justify-center h-full overflow-hidden bg-black">
            <div  className="relative z-30 text-2xl text-white rounded-xl pt-[200px]">

                <span data-aos="fade-in" data-aos-delay="200" className="block lg:text-6xl md:text-6xl sm:text-4xl w-fit mx-auto text-center mb-5">Welcome to</span>

                <span data-aos="fade-in" data-aos-delay="600" className="block w-fit mx-auto">
                    <img src={LogoWhite} alt="logo" />
                </span>

                <span data-aos="fade-in" data-aos-delay="900" className="block lg:text-7xl md:text-7xl sm:text-5xl font-bold w-fit mx-auto text-center mb-2">Innovate</span>

                <span data-aos="fade-in" data-aos-delay="1200" className="block lg:text-7xl md:text-7xl sm:text-5xl font-medium w-fit mx-auto text-center mb-20">Phytoceuticals</span>

                <span data-aos="fade-in" data-aos-delay="1500" className="block w-fit mx-auto ">
                    <button onClick={() => scrollToRef()} className=" bg-transparent border-2 rounded-3xl px-10 py-2 hover:bg-[#18DEBB] hover:border-[#18DEBB] duration-300">Learn More</button>
                </span>

                <div className="w-screen -mb-1">
                    <img src={SectionBottomCurve} className='w-screen h-full bottom-0 object-cover' alt="" />
                </div>
            </div>

            
            <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-60">
                <source
                    src= {HeroBackground}
                    type="video/mp4"
                />
                
            </video>
        </header>
    );
};

export default HeroSection;
