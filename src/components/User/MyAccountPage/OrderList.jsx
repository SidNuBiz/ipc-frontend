import { Link } from "react-router-dom";
import {useSelector} from "react-redux"

const OrderList = () => {

    const { orders } = useSelector(
        (state) => state.myOrders
    );


    return (
        <div>
            {/* Order List */}

            <div className="w-full mb-10">
                {/* Order 1 */}

                <ul>
                    {orders && orders.slice(0).reverse().map((order, index) => (
                        <li
                            key={order._id}
                            className="text-gray-600 border-b-[1px] border-b-gray-200 py-5"
                        >
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

                                {/* OrderId */}

                                <div className="mb-3 px-5">

                                    <div className="">
                                        <b>Order ID</b> <br />
                                        {order.job_web_id}
                                    </div>

                                </div>

                                {/* Order Date */}

                                <div className=" italic px-5">
                                    <b className=" not-italic">Date</b> <br />
                                    {new Date(order.created).toLocaleDateString()}
                                </div>

                                {/* Order Status */}

                                <div className=" px-5">
                                    <div className="mb-3">
                                        <b>Status</b> <br />
                                        {order.status}
                                    </div>
                                </div>

                                {/* Order Total */}

                                <div className="text-left px-5">
                                    <div className="mb-3">
                                        <b>Total</b> <br />
                                        {order.status === "Dynamic" ? 
                                        <>Dynamic Price</>
                                        :
                                        <>C${order.totalPrice}</>
                                        }
                                        
                                    </div>
                                </div>
                            </div>

                            {/* View Details Button */}

                            <div className="w-fit mt-5 ml-auto">
                                <Link to={`orders/${(orders.length-1)-index}`} className="inline-block">
                                    <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OrderList;
