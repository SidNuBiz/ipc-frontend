import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import { deletePackage } from "../../../actions/packageAction";
import { useAlert } from 'react-alert';

const AdminPackageList = ({searchKey}) => {
    const dispatch = useDispatch()

    const alert = useAlert()

    const {packages} = useSelector(
        (state) => state.packages
    );
    const {isUpdated,isDeleted} = useSelector(
        (state) => state.package
    );

    const [packagesList,setPackagesList] = useState(packages)

    const deleteThisPackage = (packageId,idx) => {
       
        dispatch(deletePackage(packageId))
      
        packagesList.splice(idx, 1)
        console.log(packagesList)
        setPackagesList(packagesList)
        dispatch({type:'ALL_PACKAGE_SUCCESS',payload:{packages:packagesList}})
    }

    useEffect(()=>{
       
        if(isUpdated){
          alert.success("Package updated successfully")
          dispatch({
            type: 'UPDATE_PACKAGE_SUCCESS',
            payload: false,
          });
        }
    },[isUpdated,isDeleted,packagesList])

    return (

        <div>
            {packagesList && packagesList.filter( pack => pack.name.toLowerCase().includes(searchKey.toLowerCase())).map((pack,idx) => (
                <div key={pack._id}>

                    <div className="grid grid-cols-8 mb-5 pb-3 border-b-[1px] border-b-slate-200">

                    
                        {/* Service Info */}

                        <div className=" lg:col-span-7 md:col-span-6 sm:col-span-5 grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-2 gap-5 ml-5">
                            <div className="col-span-2">
                                <h2 className="text-xl text-[#397f77]">{pack.name}</h2>
                            </div>

                            <div className="col-span-2">
                                <h2 className="text-xl text-[#397f77]">{pack.testingCode}</h2>
                            </div>

                            <div className="col-span-2">
                                <h2 className="text-xl text-[#397f77]">{pack.type}</h2>
                            </div>

                          
                            {/* Service Actions */}

                            <div className=" col-span-2">
                                {/* Edit Button */}

                                <div className="inline-block align-middle mr-3 mb-3">
                                    <Link to={`/IPC-admin-portal/packages/${pack._id}`}><button className="bg-[#397f77] text-white px-5 py-2 rounded-lg hover:bg-[#18debb] duration-300"><img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/28/ffffff/external-edit-social-media-ui-tanah-basah-basic-outline-tanah-basah.png" alt=""/></button></Link>
                                </div>

                                {/* Delete Button */}

                                <div className="inline-block align-middle mr-3 mb-3">
                                    <button onClick={() => deleteThisPackage(pack._id,idx)} className="bg-[#397f77] text-white px-5 py-2 rounded-lg hover:bg-[#18debb] duration-300"><img src="https://img.icons8.com/windows/28/ffffff/trash.png" alt=""/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default AdminPackageList;