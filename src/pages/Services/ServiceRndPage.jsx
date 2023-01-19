import NavBar from "../../components/Misc/NavBar.jsx";
import ServiceDetailsSection from "../../components/Services/ServicesMisc/ServiceDetailsSection.jsx";
import ServiceHoverBoxSection from "../../components/Services/ServicesMisc/ServiceHoverBoxSection.jsx";
import ServiceImageGallerySection from "../../components/Services/ServicesMisc/ServiceImageGallerySection.jsx";
import ServiceOutlineSection from "../../components/Services/ServicesMisc/ServiceOutlineSection.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import { rndServiceDetails } from "../../data/siteContent.js";
import { useRef, useEffect } from "react";



const ServiceCannabisPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    var serviceDetails = rndServiceDetails;

    // Scroll fuctions

    const ref = useRef(null);

    const scrollToRef = () => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    return (

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

            {/* Navbar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">

                {/* Service Details Section */}

                <div>
                    <ServiceDetailsSection serviceTitle={serviceDetails.title} serviceSubHeading={serviceDetails.subHeading} serviceDescription={serviceDetails.description} scrollToRef={scrollToRef} />
                </div>


                {/* Service Mid Section */}


                <div ref={ref}>

                    {/* Service Hover Box Section */}


                    {
                        serviceDetails.hoverBoxContents && (            // If there is a hover box, render it

                            <div  className="">
                                <ServiceHoverBoxSection hoverBoxContents={serviceDetails.hoverBoxContents} />
                            </div>

                        )     
                    }



                    {/* Service Image Gallery Section */}

                    {
                        serviceDetails.imageGallery && (            // If there is an image gallery, render it

                            <div className="relative">
                                <ServiceImageGallerySection images={serviceDetails.imageGallery}/>
                            </div>

                        )   
                    }

                </div>

  

                {/* Service outline Section */}

                <div>
                    <ServiceOutlineSection outline={serviceDetails.outline} />
                </div>

            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default ServiceCannabisPage;