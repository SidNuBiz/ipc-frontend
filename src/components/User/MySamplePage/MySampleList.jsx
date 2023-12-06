import { Link } from "react-router-dom";
// import {samples} from "../../../data/sampleResult"
import Loader from "../../../pages/Loader";
import {mySample} from "../../../actions/limsAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"
import { useAlert } from "react-alert";

const SampleList = () => {
    // const loading = false
    const dispatch = useDispatch()
    const alert = useAlert();
    const { samples,loading } = useSelector(
        (state) => state.mySample
    );

    useEffect(()=>{
        dispatch(mySample())
    },[dispatch])

    return (

        <Fragment>
        {loading ? (
          <Loader />
        ) : (
            <Fragment>
            <div>
                <div className="mb-5 flex justify-between">
                    <button
                        onClick={() => {
                            window.history.go(-1);
                        }}
                        className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2"
                    >
                        &#x2190;Back
                    </button>
                </div>
                {/* Order List */}

                <div className="w-full mb-10">
                    {/* Order 1 */}

                    <ul>
                        {samples && samples.sort(function(a, b){return JSON.parse(b.ID_NUMERIC) - JSON.parse(a.ID_NUMERIC)}).map((sample, index) => (
                            <li
                                key={index}
                                className="text-gray-600 border-b-[1px] border-b-gray-200 py-5"
                            >
                                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">

                                    {/* Sample Name */}

                                    <div className="mb-3 px-5">

                                        <div className="">
                                            <b>Sample</b> <br />
                                            {sample.SAMPLE_NAME}
                                        </div>

                                    </div>

                                    <div className="mb-3 px-5">

                                        <div className="">
                                            <b>Statue</b> <br />
                                            {
                                                sample.STATUS === 'V' ? 'Available' :
                                                sample.STATUS === 'P' ? 'In Progress' :
                                                sample.STATUS === 'C' ? 'Complete' :
                                                sample.STATUS === 'U' ? 'Unavailable' :
                                                sample.STATUS === 'W' ? 'Waiting for Preparation' :
                                                sample.STATUS === 'X' ? 'Cancelled' :
                                                sample.STATUS === 'I' ? 'Inspection' :
                                                sample.STATUS === 'A' ? 'Authorised' :
                                                sample.STATUS === 'S' ? 'Suspended' :
                                                sample.STATUS === 'R' ? 'Rejected' :
                                                "Status Unavailable "
                                            }
                                        </div>

                                    </div>

                                    {/* Sample Date */}

                                    <div className=" italic px-5">
                                        <b className=" not-italic">Date</b> <br />
                                        {new Date(sample.LOGIN_DATE).toLocaleDateString()}
                                    </div>

                                   

                                </div>

                                {/* View Details Button */}

                                <div className="w-fit mt-5 ml-auto">
                                    {
                                        sample.STATUS === 'C' ?
                                        (<Link to={`sample/${index}`}  className="inline-block">
                                        <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                        </Link>) :
                                        (<Link to={`sample/${index}`} onClick={ (event) => {event.preventDefault(); alert.error("Report can not be seen unless status is complete") }  } className="inline-block">
                                        <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                        </Link>)
                                    }
                                    
                                </div>
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
