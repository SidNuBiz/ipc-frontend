import OrderList from "./OrderList.jsx";
import Loader from "../../../pages/Loader";
import {myOrders} from "../../../actions/orderAction"
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment} from "react"


const MyAccountSection = () => {

  
  const dispatch = useDispatch()

  const { loading } = useSelector(
      (state) => state.myOrders
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

            <div className="w-full mb-10">
              <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Orders</h2>
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