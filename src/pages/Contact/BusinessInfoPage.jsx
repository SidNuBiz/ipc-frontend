import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import BusinessInfoSection from "../../components/Contact/BusinessInfoPage/BusinessInfoSection";
import { phoneCodes } from "../../data/siteContent";



const BusinessInfoPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <div>

            {/* NavBar */}

            <div>
                <NavBar />
            </div>


            {/* Page Section */}

            <div className="animate-crossfade w-5/6 mx-auto">
                <BusinessInfoSection phoneCodes={phoneCodes} />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>
        </div>

    );

}


export default BusinessInfoPage;