


const ServiceHoverBoxSection = ({ hoverBoxContents }) => {

    return (

        <div className=" relative h-full">

            {
                hoverBoxContents.map((hoverBoxContent, index) => (

                    <div key={index} className="group block relative lg:flex lg:w-5/6 mx-auto lg:text-white md:text-gray-600 sm:text-gray-600 text-lg lg:hover:scale-110 duration-300 min-h-[500px] min-w-full mb-20 overflow-hidden lg:rounded-2xl lg:shadow-2xl">

                        {/* Background Image */}

                        <img src={hoverBoxContent.hoverBoxBackgroundImg} alt="" className=" z-10 lg:absolute md:block sm:block object-cover object-center w-full h-full "/>

                        {/* Content */}

                        <div className="animate-crossfade lg:top-0 lg:bottom-0 lg:bg-black lg:bg-opacity-60 z-30 lg:w-1/2 lg:p-10 lg:my-0 md:my-10 sm:my-10 lg:group-hover:hidden duration-300 ">

                            {/* Hover Box Title */}

                            <h2 className=" text-3xl font-semibold mb-5">{hoverBoxContent.hoverBoxTitle}</h2>

                            {/* Hover Box Description */}

                            <p>{hoverBoxContent.hoverBoxDescription}</p>

                        </div>


                        {/* Hover Box Bullet Points */}

                        <div className="animate-crossfade lg:bg-black lg:bg-opacity-60 z-20 lg:p-10 lg:w-1/2 lg:hidden lg:group-hover:block duration-300 lg:pl-20 md:pl-10 sm:pl-10 h-auto">

                            {
                                hoverBoxContent.hoverBoxBulletPoints.map((bulletPoint, index) => (

                                    <ul key={index} className=" list-outside list-disc text-xl">

                                        <li className="mb-2">{bulletPoint}</li>

                                    </ul>

                                ))
                            }

                        </div>

                    </div>

                ))
            }

        </div>

    );

}


export default ServiceHoverBoxSection;