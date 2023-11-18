import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { deleteService } from "../../../actions/serviceAction";
import { useAlert } from 'react-alert';
import url from "../../../utils/baseApi";


const AdminServiceList = ({searchKey}) => {
    const dispatch = useDispatch()

    const alert = useAlert()

    const {services} = useSelector(
        (state) => state.services
    );
    const {isUpdated,isDeleted} = useSelector(
        (state) => state.service
    );

    const [servicesList,setServicesList] = useState([])

    const deleteThisService = (serviceId,idx) => {
        setServicesList(services)
        dispatch(deleteService(serviceId))
        servicesList.splice(idx, 1)
        setServicesList(servicesList)
        dispatch({type:'ALL_SERVICE_SUCCESS',payload:servicesList})
    }

    useEffect(()=>{
       
        if(isUpdated){
          alert.success("service updated successfully")
          dispatch({
            type: 'UPDATE_SERVICE_SUCCESS',
            payload: false,
          });
        }
    },[isUpdated,isDeleted])

    return (

        <div>
            {services && services.filter( service => service.title.toLowerCase().includes(searchKey.toLowerCase())).map((service,idx) => (
                <div key={service._id}>

                    <div className="grid grid-cols-8 mb-5 pb-3 border-b-[1px] border-b-slate-200">

                        {/* Service Image */}

                        <div className=" lg:col-span-1 md:col-span-2 sm:col-span-3">
                            <div className=" lg:h-32 md:h-32 sm:h-full w-full">
                                <img src={service.mainImage} alt="" className="h-full w-full object-cover" />
                            </div>
                        </div>

                        {/* Service Info */}

                        <div className=" lg:col-span-7 md:col-span-6 sm:col-span-5 grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-5 ml-5">
                            <div className="col-span-2">
                                <h2 className="text-xl text-[#397f77]">{service.title}</h2>
                            </div>

                            {/* <div className="col-span-2">
                                <h2 className="text-xl text-[#397f77] font-semibold">C${service._id}</h2>
                            </div> */}

                            {/* Service Actions */}

                            <div className=" col-span-2">
                                {/* Edit Button */}

                                <div className="inline-block align-middle mr-3 mb-3">
                                    <Link to={`/IPC-admin-portal/services/${idx}`}><button className="bg-[#397f77] text-white px-5 py-2 rounded-lg hover:bg-[#18debb] duration-300"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/28/ffffff/external-edit-social-media-ui-tanah-basah-basic-outline-tanah-basah.png" alt=""/></button></Link>
                                </div>

                                {/* Delete Button */}

                                <div className="inline-block align-middle mr-3 mb-3">
                                    <button onClick={() => deleteThisService(service._id,idx)} className="bg-[#397f77] text-white px-5 py-2 rounded-lg hover:bg-[#18debb] duration-300"><img src="https://img.icons8.com/windows/28/ffffff/trash.png" alt=""/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default AdminServiceList;