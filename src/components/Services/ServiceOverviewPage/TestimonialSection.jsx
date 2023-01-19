import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { testimonials } from "../../../data/siteContent";

const TestimonialSection = () => {
    return (
        <div className=" lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto pt-10 border-t-2">

            {/* Heading */}

            <div>
                <h2 className="text-gray-600 text-4xl mb-20">What Our Clients Say</h2>
            </div>
            <Carousel showStatus={false} infiniteLoop={true} autoPlay={true} interval= {3000} showIndicators={true}>
                
                {/* Testimonials */}

                {

                    testimonials.map((testimonial, index) => (

                        <div key={index} className="pb-10">

                            {/* Image */}

                            <div className=" inline-block align-middle w-[120px] h-[120px] overflow-hidden rounded-full">
                                <img src={testimonial.image} alt="" className="w-[120px] h-[120px] object-cover rounded-full "/>
                            </div>


                            {/* Name & testimonial */}

                            <div className=" inline-block align-middle p-10">

                                {/* Name */}

                                <h2 className="text-2xl font-semibold mb-5">{testimonial.name}</h2>

                                <p className="text-lg">"{testimonial.message}"</p>
                            </div>

                        </div>

                    ))

                }

                
                
            </Carousel>
        </div>
    );
};

export default TestimonialSection;
