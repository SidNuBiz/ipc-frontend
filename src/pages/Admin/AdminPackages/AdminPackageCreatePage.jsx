import React from "react";
import SideBar from "../../../components/Admin/Misc/SideBar";
import { useEffect } from "react";
import AdminPackageCreateSection from "../../../components/Admin/AdminPackagePage/AdminPackageCreateSection";

const AdminPackageCreatePage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <div>
            <div className="lg:grid lg:grid-cols-5">
                <div className=" col-span-1 z-50 relative">
                    <SideBar />
                </div>

                <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">
                    <AdminPackageCreateSection  />
                </div>
            </div>
        </div>
    );
};

export default AdminPackageCreatePage;
