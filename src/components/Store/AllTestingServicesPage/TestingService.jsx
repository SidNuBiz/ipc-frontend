import { useDispatch } from "react-redux";
import {addItemsToCart} from "../../../actions/cartAction"

const TestingService = ({ service }) => {

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(addItemsToCart({thisService:service,calculatedPrice:service.price,turnaroundType:{title:"Standard (7 buisness days)",addOnPrice:0},strainsType:[]}))
    }

    return (

        <div className="group">

            {/* Image */}

            <div className="h-[400px] w-full overflow-hidden">
                <img src={service.image.url} alt="" className="h-full w-full object-cover group-hover:scale-110 duration-500 " />
            </div>

            {/* Name */}

            <div className="mt-5 pb-2">
                <h2 className="text-xl text-gray-600">{service.name}</h2>
            </div>

            {/* Border */}

            <div className="h-[2px] w-[40px] bg-gray-600"></div>

            {/* Add to cart Button */}

            <div className="mt-5">
                <button onClick={addToCart} className="bg-[#397f77] px-10 py-3 w-full text-white hover:bg-[#18debb] duration-500 lg:opacity-0 md:opacity-0 sm:opacity-100 group-hover:opacity-100">Add to Cart</button>
            </div>

        </div>

    );

}


export default TestingService;