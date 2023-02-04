import React from "react";
import { useEffect,Fragment } from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import { orders } from "../../../data/siteContent";
import Loader from "../../../pages/Loader";
import SideBar from "../Misc/SideBar";
import AdminOrderDetails from "./AdminOrderDetails";

const AdminOrderView = () => {

    const { orders,loading } = useSelector(
        (state) => state.allOrders
    );

    const orderId = useParams().id;

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    }, []);

    return (
    <Fragment>
        {loading ? (
          <Loader />
        ) : (
        <Fragment>
            <div className="lg:grid lg:grid-cols-5">
                <div className=" col-span-1 z-50 relative">
                    <SideBar />
                </div>

                <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">
                    <AdminOrderDetails order = {orders[orderId]} />
                </div>
            </div>
        </Fragment>
      )}
    </Fragment>
    );
};

export default AdminOrderView;
