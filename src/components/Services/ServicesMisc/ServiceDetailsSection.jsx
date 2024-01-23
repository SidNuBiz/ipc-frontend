
import GrayLogo from "../../../assets/logo-gray.png";

const ServiceDetailsSection = ({ serviceTitle, serviceSubHeading, serviceDescription, scrollToRef }) => {

    return (

        <div className=" mt-48 mb-24">

            {/* Headline */}

            <div>
                <h2 className="block mb-10 text-gray-600 lg:text-6xl md:text-6xl sm:text-4xl font-semibold z-10">{serviceTitle}</h2>
                <img src={GrayLogo} alt="" className="absolute top-0 -mt-10 right-0 opacity-50 -z-10"/>
            </div>

            {/* Sub Heading */}

            {
                serviceSubHeading && (          // If there is a sub heading, render it

                    <div>
                        <h3 className="block mb-10 text-gray-600 lg:text-2xl md:text-xl sm:text-xl italic">{serviceSubHeading}</h3>
                    </div>

                )
            }

            {/* Description */}

            {
                serviceDescription.paragraphs && (     // Check if there are any paragraphs

                    <div>
                        <p className="block mb-10 text-gray-600 lg:text-2xl md:text-xl sm:text-xl">

                            {
                                serviceDescription.paragraphs.map((item) => (
                                    
                                    <span key={item.id} className="block mb-10">{item.paragraph}</span>

                                ))
                            }


                        </p>
                    </div>

                )
            }


            {/* Bullet Points */}

            {
                serviceDescription.bulletPoints && (    // If there are bullet points

                    <div>

                        {
                        
                            serviceDescription.bulletPoints.map((item) => (

                                <ul key={item.id} className="lg:text-2xl md:text-xl sm:text-xl text-gray-600 list-disc list-outside ml-10">

                                    <li className="mb-2">{item.bulletPoint}</li>

                                </ul>

                            ))
                        
                        }

                    </div>

                )
            }

            <div>
                
            </div>

            {/* Learn More Button */}

            <div className="mt-14">
                <button onClick={() => scrollToRef()} className=' bg-[#397f77] text-white text-xl px-20 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Learn More</button>
            </div>

        </div>

    );

}


export default ServiceDetailsSection;