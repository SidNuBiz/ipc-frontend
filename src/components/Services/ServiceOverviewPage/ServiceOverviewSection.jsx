import { Link } from 'react-router-dom';
import HeaderBackground from '../../../assets/service-overview-header-bg.webp';
import GrayLogo from '../../../assets/logo-gray.png';


const ServiceOverviewSection = ({services}) => {

    return (

        <div className='text-gray-600'>

            {/* Header section*/}

            <div className=' relative flex items-center justify-center h-full overflow-hidden pt-60 pb-20'>

            {/* Header Text */}

           

                <div className=' relative z-30 p-10 lg:w-1/2 md:w-2/3 sm:w-5/6 rounded-xl bg-white bg-opacity-95'>

             
                    <h2>
                        
                        <span data-aos="fade-in" className="block mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold">Services Overview</span>

                        <span data-aos="fade-in" data-aos-delay="500" className="block lg:text-xl md:text-xl sm:text-lg text-center text-[#397f77] italic">Services provided by Innovate Phytoceuticals.</span>
                    </h2>

                </div>

                {/* Header Background */}

                <img src={HeaderBackground} alt="" className=' absolute z-10 w-screen min-h-full object-cover top-0'/>

            </div>


            {/* Services */}

            <div className='lg:w-2/3 md:w-2/3 sm:w-5/6 mx-auto mt-10'>

                {/* Cannabis */}

                {services && services.map((service,index)=>(
                    <Link to={`/services/${index}`} key={service._id}>

                        <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10 w-full'>
    
                        
    
                            <div className={`mx-auto h-fit my-auto w-full shadow-xl rounded-2xl  ${(index%2) !== 0 ? 'lg:order-1 md:order-1':""}`}>
                                <img src={service.mainImage} alt="" className='w-full lg:h-[450px] md:h-[250px] object-cover rounded-2xl' />
                            </div>
    
                
    
                            <div className='h-fit my-auto lg:w-fit lg:mx-auto'>
                                <h2 className=' lg:text-5xl md:text-5xl sm:text-4xl text-gray-600 font-semibold'>{service.title}</h2>
    
                                <ul className=' lg:text-2xl md:text-2xl sm:text-xl mt-10 list-disc list-inside'>
                                    {service.overviewPoints.map((item)=>(
                                        <li key={item.id}>{item.point}</li>
                                    ))}
                                    
                                    
                                </ul>
                            </div>
    
                        </div>
                         
                     </Link>
                ))}
            
            </div>

            {/* Visit Store Button */}

            <div data-aos="fade-in" className='my-32 w-fit mx-auto'>

                <Link to="/store/all">
                    <button className=' bg-[#397f77] text-white text-xl px-10 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Visit Innovate Store</button>
                </Link>

            </div>

        </div>

    );

}


export default ServiceOverviewSection;