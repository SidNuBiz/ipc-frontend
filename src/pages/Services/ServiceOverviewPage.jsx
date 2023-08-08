import NavBar from "../../components/Misc/NavBar.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import ServiceOverviewSection from "../../components/Services/ServiceOverviewPage/ServiceOverviewSection.jsx";
import TestimonialSection from "../../components/Services/ServiceOverviewPage/TestimonialSection.jsx";
import { useEffect , Fragment} from "react";
import { useSelector} from "react-redux";
import Loader from "../Loader.jsx";


const ServiceOverviewPage = () => {

    const {services,loading} = useSelector(
        (state) => state.services
    );

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <Fragment>
        {loading == false ? (
             <Fragment>

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-transparent">

            {/* Navbar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div className="animate-crossfade"> 

                {/* Overview Section */}
                
                <div>
                    <ServiceOverviewSection services={services} />
                </div>

                {/* Testimonial Section */}

                <div>
                    <TestimonialSection />
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



export default ServiceOverviewPage;