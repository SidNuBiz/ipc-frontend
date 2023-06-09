import OrderList from "./OrderList.jsx";
import Loader from "../../../pages/Loader";
import {myOrders} from "../../../actions/orderAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"
import { Link } from "react-router-dom";

const MyAccountSection = () => {

  const dispatch = useDispatch()

  const { loading } = useSelector(
      (state) => state.allOrders
  );

  useEffect(()=>{
      dispatch(myOrders())
  },[dispatch])

  return (

    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>

          <div>
            
            {/* Heading */}

            <div className="w-full mb-10 border-b-2 border-b-gray-200">
              <div className="flex flex-row">
                <h2 className="w-full  text-2xl text-gray-600 font-semibold pb-3">Orders</h2>
                <Link to="/user/samples">

                  <div className="px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                    Sample
                  </div>

                </Link>
              </div>
            
            </div>
            
      


            {/* Orders */}

            <div>
              <OrderList />
            </div>

          </div>
        </Fragment>
      )}
    </Fragment>

  );
}

export default MyAccountSection;