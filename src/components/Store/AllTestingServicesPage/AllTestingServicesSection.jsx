import { testingServices } from "../../../data/siteContent";
import TestingService from "./TestingService.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Fragment } from "react"
import Loader from "../../../pages/Loader"



const AllTestingServicesSection = () => {

 

    const {products,loading} = useSelector(
        (state) => state.products
    );

    return (
        <Fragment>{loading ? <Loader /> : 
            <Fragment>
                <div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                        {
                            products.map((item) => (

                                <Link key={item._id} to={{pathname: `testing-services/${item._id}`}}>
                                
                                    <div className="w-full">
                                        <TestingService service={item} />
                                    </div>
                                
                                </Link>

                                

                            ))
                        }

                    </div>

                </div>
            </Fragment> 
        }</Fragment>

    );

}


export default AllTestingServicesSection;