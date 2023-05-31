import { Link } from "react-router-dom";
import Loader from "../../../pages/Loader";
import {mySample} from "../../../actions/limsAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"

const SampleList = () => {
    const dispatch = useDispatch()
    const { samples,loading } = useSelector(
        (state) => state.mySample
    );

    useEffect(()=>{
        dispatch(mySample())
    },[])

    return (

        <Fragment>
        {loading ? (
          <Loader />
        ) : (
            <Fragment>
            <div>
                {/* Order List */}

                <div className="w-full mb-10">
                    {/* Order 1 */}

                    <ul>
                        {samples && samples.map((sample, index) => (
                            <li
                                key={index}
                                className="text-gray-600 border-b-[1px] border-b-gray-200 py-5"
                            >
                                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

                                    {/* OrderId */}

                                    <div className="mb-3 px-5">

                                        <div className="">
                                            <b>Sample</b> <br />
                                            {sample.sample_name}
                                        </div>

                                    </div>

                                    {/* Order Date */}

                                    {/* <div className=" italic px-5">
                                        <b className=" not-italic">Date</b> <br />
                                        {order.created}
                                    </div> */}

                                    {/* Order Status */}
{/* 
                                    <div className=" px-5">
                                        <div className="mb-3">
                                            <b>Status</b> <br />
                                            {order.status}
                                        </div>
                                    </div> */}

                                    {/* Order Total */}

                                    {/* <div className="text-left px-5">
                                        <div className="mb-3">
                                            <b>Total</b> <br />
                                            C${order.totalPrice}
                                        </div>
                                    </div> */}
                                </div>

                                {/* View Details Button */}
{/* 
                                <div className="w-fit mt-5 ml-auto">
                                    <Link to={`orders/${index}`} className="inline-block">
                                        <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                    </Link>
                                </div> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            </Fragment>
        )}
        </Fragment>
    );
};

export default SampleList;
