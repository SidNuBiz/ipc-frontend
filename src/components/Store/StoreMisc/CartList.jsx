import { useDispatch, useSelector } from "react-redux";
import { testingServices } from "../../../data/siteContent";
import {removeItemsFromCart} from "../../../actions/cartAction"
import { useState } from "react";
import { Link } from "react-router-dom";

const CartList = () => {
    const dispatch = useDispatch()

    const [subTotalPrice,setSubTotalPrice] =  useState(0)
    const [shippingPrice,setShippingPrice] = useState(0)
    const [taxPrice,setTaxPrice] = useState(0)
 
    const { cartItems } = useSelector(
        (state) => state.cart
    );
    let totalPrice = 0
    cartItems.map(item =>{
        totalPrice = totalPrice + item.price
    })
    

 
    const removeCartItem = (id) =>{
        dispatch(removeItemsFromCart(id))
    }

    return (
        <div className="grid grid-cols-3 gap-10">

            <div className="lg:col-span-2 md:col-span-3 sm:col-span-3">
                <div>
                    <div>
                        {/* Heading */}

                        <div className="w-full mb-5">
                            <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">My Cart</h2>
                        </div>

                        {/* Cart Items */}

                        <div className=" max-h-[500px] overflow-auto no-scrollbar">
                            {cartItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-5 mb-5 text-gray-600 relative border-b-[1px] border-b-gray-200 pb-2"
                                >
                                    {/* Item image */}

                                    <div className=" col-span-1">
                                        <img src={item.image} alt="" className=" h-[100px] w-full object-cover" />
                                    </div>

                                    {/* Item details */}

                                    <div className=" col-span-2">
                                        {/* Item name */}

                                        <div className="text-xl font-bold">{item.name}</div>

                                        {/* Type */}

                                        <p>{item.turnaroundType.title}</p>

                                        {/* Strains */}

                                        <p>
                                            {item.strainsType.map((strain, index) => (
                                                <span key={index} className="text-sm text-gray-500">
                                                    {strain.title},{" "}
                                                </span>
                                            ))}
                                        </p>
                                    </div>

                                    {/* Item price */}

                                    <div className=" lg:col-span-1 md:col-span-1 sm:col-span-4 text-right h-fit my-auto">
                                        {/* Price */}

                                        <p className=" font-semibold py-3 text-xl">C${item.price}</p>
                                    </div>

                                    {/* Delete Button */}

                                    <button onClick={()=>removeCartItem(item.product)} className=" float-right text-2xl absolute right-0 top-0">x</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" lg:col-span-1 md:col-span-3 sm:col-span-3">
                
                <div>
                    <div>

                        {/* Heading */}

                        <div className="w-full mb-5">
                            <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Order Summary</h2>
                        </div>

                        {/* Order Summary */}

                        <div>

                            <table className="w-full text-lg">

                                <tbody>

                                    <tr className=" border-b-8 border-transparent">
                                        <td className="text-gray-600 ">Subtotal</td>
                                        
                                        <td className="text-gray-600 text-right ">C${totalPrice}</td>
                                    </tr>

                                    <tr className="border-b-8 border-transparent">
                                        <td className="text-gray-600 ">Shipping</td>

                                        <td className="text-gray-600 text-right ">C$0.00</td>
                                    </tr>

                                    <tr className="border-b-8 border-transparent">

                                        <td className="text-gray-600 ">Tax</td>

                                        <td className="text-gray-600 text-right ">C$0.00</td>

                                    </tr>

                                    {/* Divider */}

                                    <tr className="border-b-2 border-gray-200 h-5"></tr>
                                    <tr className="h-5"></tr>

                                    <tr>

                                        <td className="text-gray-600 text-2xl font-semibold">Total</td>

                                        <td className="text-gray-600 text-right font-semibold text-2xl">C${totalPrice+shippingPrice+taxPrice}</td>

                                    </tr>

                                </tbody>

                            </table>

                            

                        </div>

                    </div>
                </div>

                {/* Checkout Button */}

                <div>
                    <Link to="/checkout">
                        <button className="w-full bg-[#397f77] text-white text-lg font-semibold py-3 rounded-lg mt-10 hover:bg-[#18debb] duration-300">Checkout</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default CartList;
