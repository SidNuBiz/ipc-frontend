import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar.jsx";
import FaqSection from "../../components/Store/FaqPage/FaqSection.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import { faq } from "../../data/siteContent.js";



const FaqPage = () => {

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

            <div className="animate-crossfade">
                <FaqSection faq={faq}/>
            </div>

            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default FaqPage;