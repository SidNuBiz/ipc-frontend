import Footer from "../../components/Misc/Footer";
import NavBar from "../../components/Misc/NavBar.jsx";
import CheckoutSection from "../../components/Store/CheckoutPage/CheckoutSection.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {

  const { user } = useSelector(
    (state) => state.user
  );


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
          <CheckoutSection user={user} />
        </div>

        {/* Footer */}

        <div>
            <Footer />
        </div>

    </div>

  );

}


export default CheckoutPage;