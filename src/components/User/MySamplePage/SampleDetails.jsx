import Loader from "../../../pages/Loader";
import {mySampleResult} from "../../../actions/limsAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"
import { useAlert } from "react-alert";
import axios from "axios";
import Cookies from "js-cookie";
import url from "../../../utils/baseApi";

const SampleDetails = ({ sample }) => {

    const dispatch = useDispatch()
    const alert = useAlert();

    const { results,loading } = useSelector(
        (state) => state.mySampleResult
    );
    
    const { user } = useSelector(
        (state) => state.user
    );

    async function downloadReport() {
        const token = Cookies.get('token');
        const config = {
          headers: {
            'Content-Type': 'application/pdf',
            'Authorization': `Bearer ${token}`,
          },
          responseType: 'arraybuffer', // Specify responseType as 'arraybuffer'
        };
      
        try {
          const response = await axios.get(`${url}/api/v1/cov/report`, config);
      
          const blob = new Blob([response.data], { type: 'application/pdf' });
          const report_url = URL.createObjectURL(blob);
      
          window.open(report_url, '_blank');
        } catch (error) {
          console.error('Error downloading report:', error.message);
        }
      }


    useEffect(()=>{
        dispatch(mySampleResult(sample.ID_NUMERIC))
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

                {/* Print Report Button */}

                <div className=" w-fit ml-auto">

                    {/* {
                        sample.STATUS === 'C' ?
                        <button  id="add-to-cart-btn" className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">Download Report</button> : 
                        <button  id="add-to-cart-btn" onClick={ (event) => {event.preventDefault(); alert.error("Report can not be downloaded unless status is complete") }}  className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">Download Report</button>
                    } */}

                    <button  id="add-to-cart-btn" onClick={downloadReport} className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">View Report</button>
                    
   
                </div>

              

                {/* Order Details */}

                <div
                    id="result"
                    className="py-10 text-gray-600">
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
                                    {sample.ID_TEXT}
                                </h2>
                            </div>

                            {/* Sample Name */}

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Sample Name: </b>
                                    {sample.SAMPLE_NAME}
                                </h2>
                            </div>

                            {/* Sample Status */}

                            <div>
                                <h2 className=" text-md">
                                    <b>Sample Status: </b>
                                    {sample.STATUS}
                                </h2>
                            </div>

                            {/* Sample Description */}

                            <div className="lg:col-span-2">
                                <h2 className=" text-md">
                                    <b>Sample Description: </b>
                                    {sample.DESCRIPTION}
                                </h2>
                            </div>


                        </div>

                       

                    </div>

                    <div>
                        <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Sample Test List</h2>
                       
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
                                    {/* <th scope="col" className="px-6 py-3">
                                        Result
                                    </th> */}
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
                                        {
                                            result.TEST_STATUS === 'V' ? 'Available' :
                                            result.TEST_STATUS === 'P' ? 'In Progress' :
                                            result.TEST_STATUS === 'C' ? 'Complete' :
                                            result.TEST_STATUS === 'U' ? 'Unavailable' :
                                            result.TEST_STATUS === 'W' ? 'Waiting for Preparation' :
                                            result.TEST_STATUS === 'X' ? 'Cancelled' :
                                            result.TEST_STATUS === 'I' ? 'Inspection' :
                                            result.TEST_STATUS === 'A' ? 'Authorised' :
                                            result.TEST_STATUS === 'S' ? 'Suspended' :
                                            result.TEST_STATUS === 'R' ? 'Rejected' :
                                            "Status Unavailable "
                                         
                                            
                                            
                                        }
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
