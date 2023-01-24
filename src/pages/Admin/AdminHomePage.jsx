import AdminHomePageSection from "../../components/Admin/AdminHomePage/AdminHomePageSection";
import SideBar from "../../components/Admin/Misc/SideBar";



const AdminHomePage = () => {

  return (

    <div>

        <div className="lg:grid lg:grid-cols-5">

          <div className=" col-span-1 z-50 relative">

            <SideBar />

          </div>

          <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">

            <AdminHomePageSection/>

          </div>

        </div>

    </div>

  );
  
}

export default AdminHomePage;