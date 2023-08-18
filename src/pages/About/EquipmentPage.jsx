import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import EquipmentSection from "../../components/About/EquipmentPage/EquipmentSection";


const EquipmentPage = () => {

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

            {/* Page Sections */}

            <div>
                <EquipmentSection />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}


export default EquipmentPage;