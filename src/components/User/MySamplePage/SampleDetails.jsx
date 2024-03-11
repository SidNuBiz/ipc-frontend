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
          responseType: 'arraybuffer',
        };
      
        try {
          const response = await axios.get(`${url}/api/v1/cov/report?id_text=${sample.ID_TEXT}&name=${sample.SAMPLE_NAME}`,config);
      
          const blob = new Blob([response.data], { type: 'application/pdf' });
          const report_url = URL.createObjectURL(blob);
          window.open(report_url,"_blank");

        } catch (error) {
            console.log(error)
          alert.error('Error downloading report:', error.message);
        }
      }

    const reportNotAvailable = ()=>{
        alert.error("You can see the report after status is completed or authorized.")
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

                {
                    sample.STATUS === 'C' || sample.STATUS === 'A' ? 
                    <button  id="add-to-cart-btn" onClick={downloadReport} className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">View Report</button>
                    :
                    <button  id="add-to-cart-btn" onClick={reportNotAvailable} className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">View Report</button>
                }

                       
   
                </div>

              

                {/* Sample Details */}

                <div
                    id="result"
                    className="py-10 text-gray-600">

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
                             {/* Client Name */}

                            <div className="">
                                <h2 className=" text-md">
                                    <b>Client Name:  </b>
                                    {user.firstname+' '+user.lastname}
                                </h2>
                            </div>

                            {/* Client Email */}

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
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            {results.map((result) => (
                            <tbody>
                                <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-black-900 whitespace-nowrap dark:text-black">
                                        {result.name}
                                    </th>
                                    
                                   
                                    <td className="px-6 py-4">
                                        {
                                            result.test_status === 'V' ? 'Available' :
                                            result.test_status === 'P' ? 'In Progress' :
                                            result.test_status === 'C' ? 'Complete' :
                                            result.test_status === 'U' ? 'Unavailable' :
                                            result.test_status === 'W' ? 'Waiting for Preparation' :
                                            result.test_status === 'X' ? 'Cancelled' :
                                            result.test_status === 'I' ? 'Inspection' :
                                            result.test_status === 'A' ? 'Authorised' :
                                            result.test_status === 'S' ? 'Suspended' :
                                            result.test_status === 'R' ? 'Rejected' :
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
