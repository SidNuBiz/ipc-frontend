import React from 'react'
import Loader from "../../../pages/Loader";
import {useDispatch} from "react-redux"
import {useEffect,Fragment,useState} from "react"
import { useAlert } from "react-alert";
import axios from 'axios';
import api from '../../../utils/baseApi';
import Cookies from 'js-cookie'

const AdminOrderList = ({jobWebId}) => {

    const [loading, setLoading] = useState(true)
    const [samples, setSamples] = useState([])

    const alert = useAlert();
    
    async function fetchSamples() {
        try {
            const token = Cookies.get('token')
            const config = {
                headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${token}` 
                },
            };
            const response = await axios.get(`${api}/api/v1/lims/order/samples/${jobWebId}`, config);
            
            setSamples(response.data.data)
            console.log(response.data.data);
            
            setLoading(false)
        } catch (error) {
            alert.error(error.response.data.message)
        }
    
    }

    useEffect(()=>{
        fetchSamples()
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

                    <div>
                        <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Sample Information</h2>
                    </div>

                    <ul>
                        {samples && samples.sort(function(a, b){return JSON.parse(b.ID_NUMERIC) - JSON.parse(a.ID_NUMERIC)}).map((sample, index) => (
                            <li
                                key={index}
                                className="text-gray-600 border-b-[1px] border-b-gray-200 py-5"
                            >
                                {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5"> */}

                                    {/* Sample Name */}
{/* 
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

                                    </div> */}

                                    {/* Sample Date */}

                                    {/* <div className=" italic px-5">
                                        <b className=" not-italic">Date</b> <br />
                                        {new Date(sample.LOGIN_DATE).toLocaleDateString()}
                                    </div>

                                   

                                </div> */}

                                {/* View Details Button */}

                                {/* <div className="w-fit mt-5 ml-auto">
                                    
                                   
                                    <a href={`/IPC-admin-portal/order/sample/${sample.ID_NUMERIC.trim()}`}  className="inline-block">
                                        <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline">View Details &#8594;</button>
                                    </a>
                                   
                                    
                                    
                                </div> */}
                               

                                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-5 mb-10">
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

                                        
                                       <div className="">
                                            <h2 className=" text-md">
                                                <b>Sample Type:  </b>
                                                {sample.SAMPLE_TYPE == '' ? 'N/A' : sample.SAMPLE_TYPE}
                                            </h2>
                                        </div>
                                        
                                    </div>
                                    <div>

                                       {/* Sampled Date */}

                                        <div className="">
                                            <h2 className=" text-md">
                                                <b>Sample Matrix:  </b>
                                                {sample.Z_SAMPLE_MATRIX_FORM == '' ? 'N/A' : sample.Z_SAMPLE_MATRIX_FORM}
                                            </h2>
                                        </div>

                                        <div className="">
                                            <h2 className=" text-md">
                                                <b>Product:  </b>
                                                {sample.PRODUCT == '' ? 'N/A' : sample.PRODUCT}
                                            </h2>
                                        </div>

                                       <div className="">
                                            <h2 className=" text-md">
                                                <b>Batch Name:  </b>
                                                {sample.BATCH_NAME == '' ? 'N/A' : sample.BATCH_NAME}
                                            </h2>
                                        </div>

                                        {/* Sample Name */}

                                        <div className="">
                                            <h2 className=" text-md">
                                                <b>Job Name: </b>
                                                {sample.JOB_NAME}
                                            </h2>
                                        </div>



                                    </div>

                                

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
  
}

export default AdminOrderList