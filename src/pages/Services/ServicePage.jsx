import NavBar from "../../components/Misc/NavBar.jsx";
import ServiceDetailsSection from "../../components/Services/ServicesMisc/ServiceDetailsSection.jsx";
import ServiceHoverBoxSection from "../../components/Services/ServicesMisc/ServiceHoverBoxSection.jsx";
import ServiceImageGallerySection from "../../components/Services/ServicesMisc/ServiceImageGallerySection.jsx";
import ServiceOutlineSection from "../../components/Services/ServicesMisc/ServiceOutlineSection.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import { useRef, useEffect, Fragment } from "react";
import { useParams,Link } from "react-router-dom"; 
import { useSelector} from "react-redux";
import Loader from "../Loader.jsx";


const ServicePage = () => {

    const params = useParams()
  
    const {services,loading} = useSelector(
        (state) => state.services
    );

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        
    }, []);


    // Scroll fuctions

    const ref = useRef(null);

    const scrollToRef = () => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    return (
        <Fragment>
        {loading === false ? (
             <Fragment>
                
             <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">
 
                 {/* Navbar */}
 
                 <div>
                     <NavBar />
                 </div>
 
                 {/* Page Sections */}
 
                 <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">
 
                     {/* Service Details Section */}
 
                     <div>
                         <ServiceDetailsSection serviceTitle={services[params.id].title} serviceSubHeading={services[params.id].subHeading} serviceDescription={services[params.id].description} scrollToRef={scrollToRef} />
                     </div>
 
                     {/* Service Mid Section */}
 
 
                     <div ref={ref}>
 
                         {/* Service Hover Box Section */}
 
 
                         {
                             services[params.id].hoverBoxContents && (            // If there is a hover box, render it
 
                                 <div  className="">
                                     <ServiceHoverBoxSection hoverBoxContents={services[params.id].hoverBoxContents} />
                                 </div>
 
                             )     
                         }
 
 
 
                         {/* Service Image Gallery Section */}
 
                         {
                             services[params.id].imageGallery && (            // If there is an image gallery, render it
 
                                 <div className="relative">
                                     <ServiceImageGallerySection images={services[params.id].imageGallery}/>
                                 </div>
 
                             )   
                         }
 
                     </div>
                     
                     
 
                     {/* Service outline Section */}
 
                     <div>
                        <ServiceOutlineSection outline={services[params.id].outline} />
                        {/* Test Now Button*/}

                        {/* <Link to="/testing-submission" >
                            <div >
                                <button className=' bg-[#397f77] text-white text-xl px-20 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Test Now</button>
                            </div>
                        </Link> */}

                         {/* Pricing Button */}

                         <Link to={`/store/all/testing-services/${services[params.id]._id}`}  >
                            <div className="my-10">
                                <button className=' bg-[#397f77] text-white text-xl px-20 py-2 hover:bg-[#18debb] duration-300 rounded-full'>Pricing</button>
                            </div>
                        </Link>
                     </div>
 
                 </div>
 
 
                 {/* Footer */}
 
                 <div>
                     <Footer />
                 </div>
 
             </div>
                 
             </Fragment>
        ) : (
           <Loader />
        )}
        </Fragment>
        

    );

}


export default ServicePage;