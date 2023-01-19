import { Link } from 'react-router-dom';
import HeaderBackground from '../../../assets/service-overview-header-bg.webp';
import ServiceCannabisImage from '../../../assets/service-cannabis-img.webp';
import ServiceNhpImage from '../../../assets/service-nhp-img.webp';
import ServicePharmaceuticalImage from '../../../assets/service-pharmaceutical-img.webp';
import ServiceFbImage from '../../../assets/service-f&b-img.webp';
import ServiceRdImage from '../../../assets/service-r&d-img.webp';
import ServiceControlledDrugImage from '../../../assets/service-controlled-drug-img.webp';
import ServiceEnvironmentalImage from '../../../assets/service-environmental-img.webp';
import ServiceAgricultureImage from '../../../assets/service-agriculture-img.webp';


const ServiceOverviewSection = () => {

    return (

        <div className='text-gray-600'>

            {/* Header section*/}

            <div className=' relative flex items-center justify-center h-full overflow-hidden pt-60 pb-20'>

                {/* Header Text */}

                <div className=' relative z-30 p-10 lg:w-1/2 md:w-2/3 sm:w-5/6 rounded-xl bg-white bg-opacity-95'>

                    <h2>
                        <span data-aos="fade-in" className="block mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold">Services Overview</span>

                        <span data-aos="fade-in" data-aos-delay="500" className="block lg:text-xl md:text-xl sm:text-lg text-center text-[#397f77] italic">Testing Services provided by Innovate Phytoceuticals - the lab.</span>
                    </h2>

                </div>

                {/* Header Background */}

                <img src={HeaderBackground} alt="" className=' absolute z-10 w-screen min-h-full object-cover top-0'/>

            </div>


            {/* Services */}

            <div className='lg:w-2/3 md:w-1/2 sm:w-5/6 mx-auto mt-10'>

                {/* Cannabis */}

                <Link to="/services/cannabis">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className=' mx-auto h-fit my-auto w-full shadow-xl rounded-2xl'>
                            <img src={ServiceCannabisImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Cannabis</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Microbio</li>

                                <li>Heavy metal</li>

                                <li>Profile</li>

                                <li>Stability</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* NHP */}

                <Link to="/services/nhp">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className=' mx-auto h-fit my-auto lg:order-1 w-full shadow-xl rounded-2xl'>
                            <img src={ServiceNhpImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>NHP (natural health products)</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Microbio</li>

                                <li>Heavy metal</li>

                                <li>Toxins</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* Pharmaceutical */}

                <Link to="/services/pharmaceutical">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className=' mx-auto h-fit my-auto w-full shadow-xl rounded-2xl'>
                            <img src={ServicePharmaceuticalImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Pharmaceutical</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Microbio</li>

                                <li>Stability</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* F&D */}

                <Link to="/services/fnb">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className='w-full mx-auto h-fit my-auto lg:order-1 shadow-xl rounded-2xl'>
                            <img src={ServiceFbImage} alt="" className='h-[450px] object-cover w-full rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Food and Beverage</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Microbio</li>

                                <li>Stability</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* R&D */}

                <Link to="/services/rnd">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className='w-full mx-auto h-fit my-auto shadow-xl rounded-2xl'>
                            <img src={ServiceRdImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>R&D</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Synthesis</li>

                                <li>Tissue culture</li>

                                <li>Strain development</li>

                                <li>Non-standard</li>

                                <li>Phenolic-compounds</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* Controlled Drug and Substances */}

                <Link to="/services/cds">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className='w-full mx-auto h-fit my-auto lg:order-1 shadow-xl rounded-2xl'>
                            <img src={ServiceControlledDrugImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Controlled Drug & Substances</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Psilocybin Mushroom</li>

                                <li>MDMA</li>

                                <li>Synthesis</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* Environmental */}

                <Link to="/services/environmental">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className='w-full mx-auto h-fit my-auto shadow-xl rounded-2xl'>
                            <img src={ServiceEnvironmentalImage} alt="" className='w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Environmental</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Hydrocarbons</li>

                                <li>PCBs</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>


                {/* Agriculture */}

                <Link to="/services/agriculture">

                    <div className='grid lg:grid-cols-2 gap-10 mt-10 w-full'>

                        {/* Image */}

                        <div className='w-full mx-auto h-fit my-auto lg:order-1 shadow-xl rounded-2xl'>
                            <img src={ServiceAgricultureImage} alt="" className=' w-full h-[450px] object-cover rounded-2xl' />
                        </div>

                        {/* Text */}

                        <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                            <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>Agriculture</h2>

                            <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>

                                <li>Virisis</li>

                                <li>Genetics</li>
                                
                            </ul>
                        </div>

                    </div>
                    
                </Link>

            </div>

            {/* Visit Store Button */}

            <div data-aos="fade-in" className='my-32 w-fit mx-auto'>

                <Link to="/store">
                    <button className=' bg-[#397f77] text-white text-xl px-10 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Visit Innovate Store</button>
                </Link>

            </div>

        </div>

    );

}


export default ServiceOverviewSection;