
import SectionTopCurveDark from '../../assets/section-top-curve-dark.png';
import GrayLogo from "../../assets/logo-gray.png";

const ContactSection = () => {

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

                        {/* Heading */}

                        <div className='mb-10 text-center'>

                            <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                            <h2 className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">Contact Us</h2>

                        </div>

                        {/* Info */}

                        <div className='mb-10'>

                            <h2 className='lg:text-2xl md:text-2xl sm:text-xl'>
                                <span className='block lg:text-3xl md:text-3xl sm:text-2xl text-center font-semibold w-fit mx-auto mb-10 text-[#397f77]'>Innovate Phytoceuticals</span>

                                <span className='block text-center w-fit mx-auto mb-3'>#2-3485 Velocity Ave, Kelowna, BC V1V 3C2</span>

                                <span className='block text-center w-fit mx-auto mb-3'>info@invp-lab.com</span>

                                <span className='block text-center w-fit mx-auto mb-3'>(778) 484-5483</span>
                            </h2>

                        </div>

                        {/* Submit Request Button */}

                        <div className=' w-fit mx-auto'>
                            <button className=' px-5 py-2 bg-[#397f77] text-white text-xl rounded-full hover:bg-[#18debb] duration-300'>Submit Request</button>
                        </div>


                    </div>

                    {/* Column 2 */}

                    <div>

                        <div className='w-5/6 mx-auto md:mt-10 sm:mt-10'>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.49026973871!2d-119.39072804853346!3d49.9459050793079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537ded79bdcac7ab%3A0x9e3819bb94f7f94a!2s1-3485%20Velocity%20Ave%2C%20Kelowna%2C%20BC%20V1V%203C2%2C%20Canada!5e0!3m2!1sen!2sbd!4v1666871684705!5m2!1sen!2sbd" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'></iframe>

                        </div>

                    </div>

                </div>

                

            </div>

        </div>

    );

}

export default ContactSection;