import { useEffect } from "react";
import NavBar from "../../components/Misc/NavBar.jsx";
import Footer from "../../components/Misc/Footer.jsx";
import PackageListSection from "../../components/Store/PackagesPage/PackageListSection.jsx";



const AllTestingServicesPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Section */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-52">
                <PackageListSection />
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );

}



export default AllTestingServicesPage;