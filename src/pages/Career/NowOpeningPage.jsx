import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import NowOpeningSection from "../../components/Career/NowOpeningPage/NowOpeningSection.jsx";
// import { nowOpening } from "../../data/siteContent.js";



const NowOpeningPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    // var pageContent = nowOpening;

    return (

        <div>

            {/* NavBar */}

            <div>
                <NavBar />
            </div>


            {/* Page Sections */}

            <div className="animate-crossfade">
                <NowOpeningSection />
            </div>


            {/* Footer */}


            <div>
                <Footer />
            </div>




        </div>

    );

}


export default NowOpeningPage;