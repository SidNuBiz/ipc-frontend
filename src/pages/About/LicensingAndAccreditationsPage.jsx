import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import LicensingAndAccreditationsSection from "../../components/About/LicensingAndAccreditationsPage/LicensingAndAccreditationsSection.jsx";
import { licensing } from "../../data/siteContent.js";

const LicensingAndAccreditationsPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    var pageContent = licensing;

    return (

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">

                {/* Licensing and Accreditations Section */}

                <div>
                    <LicensingAndAccreditationsSection licensing={pageContent} />
                </div>
            </div>

            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default LicensingAndAccreditationsPage;