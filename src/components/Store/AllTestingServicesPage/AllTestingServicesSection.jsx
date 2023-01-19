import { testingServices } from "../../../data/siteContent";
import TestingService from "./TestingService.jsx";
import { Link } from "react-router-dom";



const AllTestingServicesSection = () => {

    const items = testingServices;

    return (

        <div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">

                {
                    items.map((item) => (

                        <Link key={item.id} to={{pathname: `testing-services/${item.id}`}}>
                        
                            <div className="w-full">
                                <TestingService service={item} />
                            </div>
                        
                        </Link>

                        

                    ))
                }

            </div>

        </div>

    );

}


export default AllTestingServicesSection;