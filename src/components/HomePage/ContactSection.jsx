
import SectionTopCurveDark from '../../assets/section-top-curve-dark.png';
import GrayLogo from "../../assets/logo-gray.png";
import { Link } from 'react-router-dom';

const ContactSection = ({details}) => {

    return (

        <div className=' bg-gradient-to-b from-[#eaf8f5] to-transparent pb-20'>

            {/* Top Curve */}

            <div>
                <img src={SectionTopCurveDark} alt="" className='w-screen' />
            </div>

            {/* Content */}

            <div className='py-10'>

                <div className='lg:grid lg:grid-cols-2 gap-5'>

                    {/* Column 1 */}

                    <div className='h-fit my-auto'>

                    <div className='mb-10 text-center' style={{ position: 'relative' }}>

                        <img src={GrayLogo} alt="" className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20" style={{ position: 'relative', zIndex: 1 }}/>

                        <h2 className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10" style={{ position: 'relative', zIndex: 2 }}>Contact Us</h2>

                    </div>

                        {/* Info */}

                        <div className='mb-10'>

                            <h2 className='lg:text-2xl md:text-2xl sm:text-xl'>
                                <span className='block lg:text-3xl md:text-3xl sm:text-2xl text-center font-semibold w-fit mx-auto mb-10 text-[#397f77]'>Innovate Phytoceuticals</span>

                                <span className='block text-center w-fit mx-auto mb-3'>{details.location}</span>

                                <span className='block text-center w-fit mx-auto mb-3'>{details.email}</span>

                                <span className='block text-center w-fit mx-auto mb-3'>{details.phone}</span>
                            </h2>

                        </div>

                        {/* Submit Request Button */}

                        <div className=' w-fit mx-auto'>
                            <Link to='/contact/business-information'>
                                <button className=' px-5 py-2 bg-[#397f77] text-white text-xl rounded-full hover:bg-[#18debb] duration-300'>Submit Request</button>
                            </Link>
                            </div>
                           


                    </div>

                    {/* Column 2 */}

                    <div>

                        <div className='w-5/6 mx-auto md:mt-10 sm:mt-10'>

                            <iframe src={details.map } width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'></iframe>

                        </div>

                    </div>

                </div>

                

            </div>

        </div>

    );

}

export default ContactSection;