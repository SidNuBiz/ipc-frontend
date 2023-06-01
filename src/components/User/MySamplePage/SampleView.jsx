import { useEffect ,Fragment} from "react";
import { useParams } from "react-router-dom";
import {useSelector} from "react-redux"
import NavBar from "../../Misc/NavBar.jsx";
import Footer from "../../Misc/Footer.jsx";
import SampleDetails from "./SampleDetails.jsx";
import Loader from "../../../pages/Loader";
import {samples} from "../../../data/sampleResult.js"

const OrderView = () => {

    // const { orders,loading } = useSelector(
    //     (state) => state.myOrders
    // );

    const loading = false

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

        console.log(sampleId)
    }, []);

    const {sampleId} = useParams();

    const sample = samples.find(sample => sample.id_text === sampleId);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>
            <div>

                {/* NavBar */}

                <div>
                    <NavBar/>
                </div>

                {/* Page Section */}

                <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-40">
                    <SampleDetails sample={sample} />
                </div>

                {/* Footer */}

                <div>
                    <Footer/>
                </div>

            </div>
        </Fragment>
      )}
    </Fragment>

  );
}

export default OrderView;