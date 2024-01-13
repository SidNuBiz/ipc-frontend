import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import LegalSection from "../../components/Contact/LegalPage/LegalSection";

const LegalPage = () => {

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

            {/* Page Component */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">
                <LegalSection />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default LegalPage;