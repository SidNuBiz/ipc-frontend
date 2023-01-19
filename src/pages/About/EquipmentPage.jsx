import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import EquipmentSection from "../../components/About/EquipmentPage/EquipmentSection";
import { equipmentData } from "../../data/siteContent.js";



const EquipmentPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    var pageContent = equipmentData;

    return (

        <div>

            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Sections */}

            <div>
                <EquipmentSection equipmentData={pageContent} />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default EquipmentPage;