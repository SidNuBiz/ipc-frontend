import { useEffect ,Fragment} from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import NavBar from "../../Misc/NavBar.jsx";
import Footer from "../../Misc/Footer.jsx";
import OrderDetails from "./OrderDetails.jsx";
import Loader from "../../../pages/Loader";

const OrderView = () => {

    const { orders,loading } = useSelector(
        (state) => state.myOrders
    );

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    const {orderId} = useParams();

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>
            <div>

                {/* NavBar */}

                <div>
                    <NavBar/>
                </div>

                {/* Page Section */}

                <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-40">
                    <OrderDetails order={orders[orderId]} oId={orderId} />
                </div>

                {/* Footer */}

                <div>
                    <Footer/>
                </div>

            </div>
        </Fragment>
      )}
    </Fragment>

  );
}

export default OrderView;