import TestingService from "./TestingService.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react"
import Loader from "../../../pages/Loader"


const AllTestingServicesSection = () => {

    const {services,loading} = useSelector(
        (state) => state.services
    );
    
    return (
        <Fragment>{loading === false ?
          
            <Fragment>
                <div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                        {
                            services.map((item) => (

                                <Link key={item._id} to={{pathname: `testing-services/${item._id}`}}>
                                
                                    <div className="w-full">
                                        <TestingService service={item} />
                                    </div>
                                
                                </Link>

                            ))
                        }

                    </div>

                </div>
            </Fragment> :
            <Loader /> 
        }</Fragment>

    );

}


export default AllTestingServicesSection;