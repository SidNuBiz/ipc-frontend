import HeroSection from "../components/HomePage/HeroSection.jsx";
import OverviewSection from "../components/HomePage/OverviewSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
import ServicesSection from "../components/HomePage/ServicesSection.jsx";
import NavBar from "../components/Misc/NavBar.jsx";
import Footer from "../components/Misc/Footer.jsx";
import { useRef, useEffect ,Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";

const HomePage = () => {
    const dispatch = useDispatch()
    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
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
        {loading ? (
          <Loader />
        ) : (
        <Fragment>
        <div className=" overflow-x-hidden overflow-y-hidden">
            {/* Navbar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div className="animate-crossfade">
                

                {/* Hero Section */}

                <div>
                    <HeroSection scrollToRef={scrollToRef} />
                </div>

                {/* Services Section */}

                <div ref={ref}>
                    <ServicesSection />
                </div>

                {/* Overview Section */}

                <div>
                    <OverviewSection />
                </div>

                {/* Contact Section */}

                <div>
                    <ContactSection />
                </div>

                {/* Footer */}

            </div>

            
            <div>
                <Footer />
            </div>

        </div>

        </Fragment>
      )}
    </Fragment>
    );
};

export default HomePage;
