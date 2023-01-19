import { useState, useEffect , Fragment } from "react";
import NavBar from "../../components/Misc/NavBar.jsx"
import Footer from "../../components/Misc/Footer.jsx"
import ProfileSection from "../../components/User/ProfilePage/ProfileSection.jsx";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";


const ProfilePage = () => {
  const dispatch = useDispatch()
  const { error, loading, isAuthenticated,user } = useSelector(
      (state) => state.user
  );
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
    <Fragment>
    <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

        {/* NavBar */}

        <div>
            <NavBar />
        </div>


        {/* Page Section */}

        <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-52">
          <ProfileSection user={user}/>
        </div>
        

        {/* Footer */}

        <div>
            <Footer />
        </div>


    </div>
    </Fragment>
      )}
    </Fragment>
  );
}

export default ProfilePage;