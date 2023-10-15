import HeroSection from "../components/HomePage/HeroSection.jsx";
import OverviewSection from "../components/HomePage/OverviewSection.jsx";
import ContactSection from "../components/HomePage/ContactSection.jsx";
import ServicesSection from "../components/HomePage/ServicesSection.jsx";
import NavBar from "../components/Misc/NavBar.jsx";
import Footer from "../components/Misc/Footer.jsx";
import { useRef, useEffect ,Fragment, useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import Loader from "./Loader";
import axios from "axios";
import { useAlert } from "react-alert";
import {clearErrors} from "../actions/orderAction.js"

const HomePage = () => {
    const dispatch = useDispatch()
    const alert = useAlert()
    
    const { loading } = useSelector(
        (state) => state.user
    );

    const {services} = useSelector(
        (state) => state.services
    );

    const {loading:orderLoading,error,success} = useSelector(
        (state) => state.newOrder
    )
    const [homePageDetails,setHomePageDetails] = useState([])

    async function fetchData(){
        const {data} =  await axios.get('http://34.202.67.106:8080/api/v1/home-page-details')
        setHomePageDetails(data.details)
       
    }

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if(success){
            alert.success("Please go to account page for the order details")
            dispatch({type:'CREATE_ORDER_RESET'})
        }

        fetchData()
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [error,success]);
    
    // Scroll fuctions

    const ref = useRef(null);

    const scrollToRef = () => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    return (
    <Fragment>
        {loading || homePageDetails.length === 0 || services.length === 0 || orderLoading  ? (
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
                    <ServicesSection services={services} />
                </div>

                {/* Overview Section */}

                <div>
                    <OverviewSection details={homePageDetails[1].overviewSection} />
                </div>

                {/* Contact Section */}

                <div>
                    <ContactSection details={homePageDetails[0].contactSection} />
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
