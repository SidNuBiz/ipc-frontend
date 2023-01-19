


const ServiceOutlineSection = ({ outline }) => {

    return (

        <div className="my-20">
            
            {/* Section Title */}

            { outline.outlineTitle &&(

                    <div>
                        <h2 className="block mb-10 text-gray-600 lg:text-6xl md:text-6xl sm:text-4xl">{outline.outlineTitle}</h2>
                    </div>

                )
            
            }

            {/* Sub Heading */}

            {
                outline.outlineSubHeading && (          // If there is a sub heading, render it

                    <div>
                        <h3 className="block mb-10 text-gray-600 lg:text-2xl md:text-2xl sm:text-xl italic">{outline.outlineSubHeading}</h3>
                    </div>

                )
            }

            {/* Outline Paragraphs */}                  

            {
                outline.outlineParagraphs && (          // If there is a paragraph, render it

                    <div>

                        {
                            outline.outlineParagraphs.map((paragraph, index) => (

                                <div key={index} className="block mb-10 text-gray-600 lg:text-2xl md:text-2xl sm:text-xl">
                                    <p>{paragraph}</p>
                                </div>

                            ))
                        }

                    </div>

                )           
            }


            {/* Outline Bullet Points */}

            {
                outline.outlineBulletPoints && (         // If there is a bullet point, render it

                    <div>

                        {
                            outline.outlineBulletPoints.map((bulletPoint, index) => (

                                <ul key={index} className="text-2xl text-gray-600 list-disc list-outside ml-10">

                                    <li className="mb-2">{bulletPoint}</li>

                                </ul>

                            ))
                        }

                    </div>
                    
                )          
            }


            {/* Book Now Button */}


            <div className="mt-14">
                <button className=' bg-[#397f77] text-white text-xl px-20 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Book Now</button>
            </div>

        </div>

    );

}


export default ServiceOutlineSection;