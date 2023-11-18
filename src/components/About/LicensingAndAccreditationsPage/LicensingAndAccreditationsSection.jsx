import GrayLogo from "../../../assets/logo-gray.png";
import { useEffect,useState } from 'react';
import axios from 'axios';
// import Loader from '../../../Loader.jsx';
import url from "../../../utils/baseApi";

const LicensingAndAccreditationsSection = () => {

    const [licenses,setLicenses] = useState([])
    const [licenseDetails,setLicenseDetails] = useState([])
    const [date,setDate] = useState('')

    async function fetchData(){
        const {data} =  await axios.get(`${url}/api/v1/license-details/all`)
        setLicenseDetails(data.details)
        const {data:license} = await axios.get(`${url}/api/v1//license/all`)
        setLicenses(license.licenses)
        const {data:updated} =  await axios.get(`${url}/api/v1/updated/all`)
        setDate(new Date(updated.updated.license).getDate()+"/"+(new Date(updated.updated.license).getMonth()+1)+"/"+new Date(updated.updated.license).getFullYear()) 
       
       
    }

    useEffect(() => {

        fetchData()
       
    }, []);


    return (

        <div>

            {/* Heading */}

            <div className="text-center pt-40">

                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -mr-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold ">Licensing and Accreditations</h2>

            </div>

            {/* Update Date */}

            <div className="text-center mt-5">
                <h2 className="text-gray-600 text-xl italic">Updated - {date}</h2>
            </div>


            {/* License Table */}

            <div className="mt-20">

                <table className=" bg-white border-collapse border border-slate-500 w-full text-center">

                    <thead>

                        <tr className=" bg-gray-700 border-b-2 border-gray-600">

                            <th className=" text-white text-xl font-semibold p-5 border border-slate-500">LICENSE NAME</th>

                            <th className=" text-white text-xl font-semibold p-5 border border-slate-500">LICENSE NUMBER</th>

                        </tr>

                    </thead>

                    <tbody>

                        {
                            licenses.map((item, index) => (

                                <tr key={index} className="even:bg-gray-100">
                                    <td className=" text-gray-600 text-lg font-semibold p-3 border border-slate-500">{item.name}</td>
                                    <td className=" text-gray-600 text-lg font-semibold p-3 border border-slate-500">{item.number}</td>
                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

            {/* License Types With Details */}

            <div className="my-10 text-gray-600">

                {

                    licenseDetails.map((licenseType, index) => (

                        <div key={index} className="mb-20 w-full">

                            {/* Heading */}

                            <div className="mb-5">
                                <h2 className=" text-2xl font font-semibold">{licenseType.name}</h2>
                            </div>

                            {/* Details */}

                            <div className="text-xl mb-10">

                                {/* Initial Description */}

                                {                   //if there is an initial description

                                    licenseType.description && (

                                        <div className="mb-5">

                                            <p>{licenseType.description}</p>

                                        </div>

                                    )

                                }

                                {                       //if there is a list

                                    licenseType.points && (

                                        <div className="mb-5">

                                            <ul className=" list-disc">

                                                {
                                                    licenseType.points.map((bulletPoint, index) => (

                                                        <li key={index} className=" ml-10">{bulletPoint.point}</li>

                                                    ))
                                                }

                                            </ul>

                                        </div>

                                    )

                                }


                                {/* {             

                                    licenseType.description && (

                                        <div>
                                            <p>{licenseType.description}</p>
                                        </div>

                                    )
                                } */}

                            </div>

                            {/* Image */}

                            {               //if there is an image

                                licenseType.img && (

                                    <div className="w-full">
                                        <img src={licenseType.img} alt="" className="w-full"/>
                                    </div>

                                )

                            }

                        </div>

                    ))

                }
                
            </div>
        </div>

    );

}


export default LicensingAndAccreditationsSection;