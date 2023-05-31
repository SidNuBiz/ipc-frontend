import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import { useEffect } from "react";
import MySampleList from "../../components/User/MySamplePage/MySampleList";



const MySamplePage = () => {

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
            <MySampleList />
        </div>

        {/* Footer */}

        <div>
            <Footer />
        </div>

    </div>

  );
}

export default MySamplePage;