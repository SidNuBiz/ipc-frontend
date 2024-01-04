import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import Package from "./Package";
import { useSelector } from "react-redux";
import Loader from "../../../pages/Loader";

const PackageListSection = () => {
    const {loading,packages} = useSelector(state => state.packages)
    
    return (


        <Fragment>{loading === false ?
                
            <Fragment>
                <div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        {packages.map((item) => (
                            <Link
                                key={item._id}
                                to={{ pathname: `package/${item._id}` }}>
                                <div className="w-full">
                                    <Package pkg={item} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Fragment> :
            <Loader /> 
        }</Fragment>

        
    );
};

export default PackageListSection;
