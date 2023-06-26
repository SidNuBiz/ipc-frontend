import Loader from "../../../pages/Loader";
import {mySampleResult} from "../../../actions/limsAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"

const SampleDetails = ({ sample }) => {

    const dispatch = useDispatch()
    const { results,loading } = useSelector(
        (state) => state.mySampleResult
    );
    
    const { user } = useSelector(
        (state) => state.user
    );

    useEffect(()=>{
        dispatch(mySampleResult(sample.id_numeric))
    },[dispatch])

    function printInvoice(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }

    return (
        <Fragment>
        {loading ? (
          <Loader />
        ) : (
            <Fragment>
            <div>
                {/* Print Invoice Button */}

                <div className=" w-fit ml-auto">
                    <button
                        onClick={() => printInvoice("invoice")}
                        id="add-to-cart-btn"
                        className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">
                        Print
                    </button>
                </div>

                {/* Order Details */}

                <div
                    id="invoice"
                    className="py-10 mt-10 text-gray-600">
                    {/* Order Id */}

                    <div className="mb-10">
                        <h2 className=" text-xl">
                            <b>Sample Report</b>
                            
                        </h2>
                    </div>

                  

                    {/* Info */}

                    {/* Heading */}

                    <div>
                        <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Sample Information</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-10">
                        <div>
                             {/* Sampled Date */}

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Client Name:  </b>
                                    {user.firstname+' '+user.lastname}
                                </h2>
                            </div>

                            {/* Sample Name */}

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Email: </b>
                                    {user.email}
                                </h2>
                            </div>

                        </div>
                        <div>

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Sampled Id: </b>
                                    {sample.id_text}
                                </h2>
                            </div>

                            {/* Sample Name */}

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Sample Name: </b>
                                    {sample.sample_name}
                                </h2>
                            </div>

                            {/* Sample Status */}

                            <div>
                                <h2 className=" text-md">
                                    <b>Sample Status: </b>
                                    {sample.status}
                                </h2>
                            </div>

                            {/* Sample Description */}

                            <div className="lg:col-span-2">
                                <h2 className=" text-md">
                                    <b>Sample Description: </b>
                                    {sample.description}
                                </h2>
                            </div>


                        </div>

                       

                    </div>

                    <div>
                        <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Sample Result List <br/> <span className="text-red-500 text-sm">Result space empty means its not provided yet</span></h2>
                       
                    </div>

                    <div className="relative overflow-x-auto">
                        <table className="table-auto w-full text-md text-left text-black-500 dark:text-black-400">
                            <thead className="text-md border-b dark:border-gray-700 text-black-700 uppercase bg-white-50 dark:bg-white-700 dark:text-black-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Analysis
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Component Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Result
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {results.map((result) => (
                            <tbody>
                                <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                        {result.analysis_id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {result.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {result.result ? 'X':sample.result}
                                    </td>
                                    <td className="px-6 py-4">
                                        {result.result_type}
                                    </td>
                                </tr>
                  
                            </tbody>
                            ))}
                        </table>
                    </div>

                </div>
            </div>

        
            </Fragment>
        )}
        </Fragment>
    );
};

export default SampleDetails;
