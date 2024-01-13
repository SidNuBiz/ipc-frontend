import GrayLogo from "../../../assets/logo-gray.png";
import {submitContactForm} from '../../../actions/userAction'
import { useAlert } from "react-alert";

const BusinessInfoSection = () => {

    const alert = useAlert()


    const handleSubmit = async (event)=>{
        event.preventDefault();
      
        const submitCheck = await submitContactForm({
            name:event.target[0].value,
            email:event.target[1].value,
            phone:event.target[2].value,
            subject:event.target[3].value,
            message:event.target[4].value
        })

        event.target[0].value = ""
        event.target[1].value = ""
        event.target[2].value = ""
        event.target[3].value = ""
        event.target[4].value = ""

        if(submitCheck){
            alert.success('Your message is submitted')
        }else{
            alert.error('Some error occurred ! Please try again')
        }
    }

    return (
        <div className=" bg-stone-100 mt-32">

            {/* Contact Section */}

            <div className="lg:grid lg:grid-cols-2 gap-10">

                {/* Column 1 */}

                <div className="h-fit mt-20 py-10">
                    {/* Heading */}

                    <div data-aos="fade-in" className="mb-10 text-center lg:-ml-10 md:-ml-10 sm:-ml-0">
                        <img src={GrayLogo} alt="" className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20" />
                        <h2
                            data-aos="fade-in"
                            className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10"
                        >
                            Contact Us
                        </h2>
                    </div>

                    {/* Info */}

                    <div data-aos="fade-up" className="mb-10">
                        <h2 className="lg:text-2xl md:text-2xl sm:text-xl">
                            <span className="block lg:text-3xl md:text-3xl sm:text-2xl text-center font-semibold w-fit mx-auto mb-10 text-[#397f77]">
                                Innovate Phytoceuticals
                            </span>

                            <span className="block text-center w-fit mx-auto mb-3">#2-3485 Velocity Ave, Kelowna, BC V1V 3C2</span>

                            <span className="block text-center w-fit mx-auto mb-3">info@invp-lab.com</span>

                            <span className="block text-center w-fit mx-auto mb-3">(778) 484-5483</span>
                        </h2>
                    </div>
                   
                </div>


                {/* Column 2 */}

                <div className="w-2/3 mx-auto py-10 text-gray-600 mt-10">

                    <form onSubmit={handleSubmit}>

                        {/* Name Label & Input */}

                        <div>

                            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name<span className="text-[red]" >*</span></label>
                            <input type="text" name="name" id="name" className=" bg-transparent w-full px-3 py-2 border-b-2 border-gray-600 focus:outline-none focus:border-[#397f77]" required/>

                        </div>


                        {/* Email Label & Input */}

                        <div className="mt-10">

                            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email<span className="text-[red]" >*</span></label>
                            <input type="email" name="email" id="email" className=" bg-transparent w-full px-3 py-2 border-b-2 border-gray-600 focus:outline-none focus:border-[#397f77]" required />

                        </div>

                        {/* Phone Label & Input */}

                        <div className="mt-10 w-full">
                            
                            <div className="grid grid-cols-4 gap-3 w-full">

                                {/* Phone */}

                                <div className=" lg:col-span-3 md:col-span-3 sm:col-span-2">

                                    <label htmlFor="phone" className="block text-lg font-semibold mb-2">Phone<span className="text-[red]" >*</span></label>

                                    <input type="tel" name="phone" id="phone" className=" bg-transparent w-full px-3 py-2 border-b-2 border-gray-600 focus:outline-none focus:border-[#397f77]" required />
                                </div>

                            </div>

                        </div>

                        {/* Subject Label & Input */}

                        <div className="mt-10">

                            <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject<span className="text-[red]" >*</span></label>
                            <input type="text" name="subject" id="subject" className=" bg-transparent w-full px-3 py-2 border-b-2 border-gray-600 focus:outline-none focus:border-[#397f77]" placeholder="Please type the subject" required />

                        </div>

                        {/* Message Label & Input */}

                        <div className="mt-10">

                            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message<span className="text-[red]" >*</span></label>
                            <textarea type="text" name="message" id="message" rows="5" className=" bg-transparent w-full px-3 py-2 border-b-2 border-gray-600 focus:outline-none focus:border-[#397f77]" placeholder="Please type your message here..." required />

                        </div>

                        {/* Submit Button */}

                        <div className="mt-10 w-fit mx-auto">

                            <button type="submit" className="px-10 py-3 bg-white text-gray-600 text-xl font-semibold hover:text-[#18debb] duration-300">Submit</button>

                        </div>

                    </form>

                </div>
            </div>


            {/* Map */}

            <div className="my-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.49026973871!2d-119.39072804853346!3d49.9459050793079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537ded79bdcac7ab%3A0x9e3819bb94f7f94a!2s1-3485%20Velocity%20Ave%2C%20Kelowna%2C%20BC%20V1V%203C2%2C%20Canada!5e0!3m2!1sen!2sbd!4v1666871684705!5m2!1sen!2sbd" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='location'></iframe>
            </div>
        </div>
    );
};

export default BusinessInfoSection;
