import { useSelector } from "react-redux";
import { useState } from "react";

const OrderSummary = () => {

    const [shippingPrice,setShippingPrice] = useState(0)
    const [taxPrice,setTaxPrice] = useState(0)
 
    const { cartItems } = useSelector(
        (state) => state.cart
    );

    let totalPrice = 0

    cartItems.map(item =>{
        totalPrice = totalPrice + item.price
    })

    return (

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

    );

}


export default OrderSummary;