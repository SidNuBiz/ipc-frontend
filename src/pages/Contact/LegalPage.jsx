import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import LegalSection from "../../components/Contact/LegalPage/LegalSection";
import { legal } from "../../data/siteContent";



const LegalPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);


    const pageContent = legal

    return (

        <div>

            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Component */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto">
                <LegalSection legal={pageContent} />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default LegalPage;