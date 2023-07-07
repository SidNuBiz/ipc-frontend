import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect} from "react";
import {createOrder} from "../../../actions/orderAction"
import {useNavigate} from "react-router-dom"


const CheckoutSection = ({user}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [shippingPrice,setShippingPrice] = useState(0)
  const [taxPrice,setTaxPrice] = useState(0)

  const [details,setDetails] = useState(user.address.details);
  const [country,setCountry] = useState(user.address.country);
  const [city,setCity] = useState(user.address.city);
  const [zip,setZip] = useState(user.address.zip)

  const [shippingDetails,setShippingDetails] = useState('');
  const [shippingCountry,setShippingCountry] = useState('');
  const [shippingCity,setShippingCity] = useState('');
  const [shippingZip,setShippingZip] = useState('')

  const {mainFormData} = useSelector(state=>state.sampleFormSubmit)

//   const { cartItems } = useSelector(
//       (state) => state.cart
//   );

  let subTotalPrice = 0
  mainFormData.sampleFormData.forEach(sample =>{
    sample.testFormData.forEach(tests=>{
        if(sample.selectedTurnaround.value == 'rushed'){
            subTotalPrice = subTotalPrice + parseInt(tests.test.RushedPricing)
        }else if(sample.selectedTurnaround.value == 'standard'){
            subTotalPrice = subTotalPrice + parseInt(tests.test.StandardPricing)
        }
    })
  })
//   cartItems.map(item =>{
//       subTotalPrice = subTotalPrice + item.price
//   })


  const setShipping = () => {

    if (document.getElementById('same-address').checked) {

        setShippingDetails(document.getElementById('billing-address').value)
        setShippingCountry(document.getElementById('billing-country').value)
        setShippingCity(document.getElementById('billing-city').value)
        setShippingZip(document.getElementById('billing-zip').value)

        // document.getElementById('shipping-address').value = document.getElementById('billing-address').value;
        // document.getElementById('shipping-country').value = document.getElementById('billing-country').value;
        // document.getElementById('shipping-city').value = document.getElementById('billing-city').value;
        // document.getElementById('shipping-zip').value = document.getElementById('billing-zip').value;

    }

    else {

      setShippingDetails('')
      setShippingCountry('')
      setShippingCity('')
      setShippingZip('')

        // document.getElementById('shipping-address').value = '';
        // document.getElementById('shipping-country').value = '';
        // document.getElementById('shipping-city').value = '';
        // document.getElementById('shipping-zip').value = '';

    }

  }

  const createOrderSubmit = (e) => {
    e.preventDefault();
    dispatch(createOrder({shipping:{shippingDetails,shippingCity,shippingCountry,shippingZip},billing:{details,country,city,zip},shippingPrice,taxPrice,subTotalPrice,totalPrice:(shippingPrice+taxPrice+subTotalPrice),products:mainFormData.sampleFormData}))
    dispatch({type:'MAIN_FORM_DATA',payload:{}})
    dispatch({type:'SAMPLE_FORM_DATA',payload:[]})
    navigate('/')

  }

//   useEffect(()=>{
//     if(cartItems.length == 0){
//       navigate('/store/all')
//     }
//   },[])

  return (

    <div className="grid grid-cols-3 gap-10">

            {/* Cart List */}

            <div className="lg:col-span-2 md:col-span-3 sm:col-span-3">
                <div>

                  {/* Payment Form */}

                  <div className="mb-10">

                      {/* Heading */}

                      <div className="w-full mb-5">
                          <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Payment</h2>
                      </div>

                      {/* Form */}

                      <div>

                          {/* Payment Form Goes Here..... */}

                      </div>

                  </div>

                  {/* Billing Address */}

                  <div className="mt-20">

                      {/* Heading */}

                      <div className="w-full mb-10">
                          <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Billing Address</h2>
                      </div>

                      {/* Form */}

                      <form onSubmit={createOrderSubmit} >

                          {/* First Name Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-f-name" className="block text-lg text-gray-600 font-semibold mb-2">First Name*</label>
                              <input type="text" name="billing-f-name" id="billing-f-name" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={user.firstname} required/>

                          </div>


                          {/* Last Name Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-l-name" className="block text-lg text-gray-600 font-semibold mb-2">Last Name*</label>
                              <input type="text" name="billing-l-name" id="billing-l-name" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={user.lastname} required/>

                          </div>

                          {/* Email Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-email" className="block text-lg text-gray-600 font-semibold mb-2">Email*</label>
                              <input type="email" name="billing-email" id="billing-email" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={user.email} required/>

                          </div>

                          {/* Address Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-address" className="block text-lg text-gray-600 font-semibold mb-2">Address*</label>
                              <input type="text" name="billing-address" id="billing-address" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={details} onChange={(e)=>{setDetails(e.target.value)}} required/>

                          </div>

                          {/* Country Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-country" className="block text-lg text-gray-600 font-semibold mb-2">Country*</label>
                              <input type="text" name="billing-country" id="billing-country" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={country} onChange={(e)=>{setCountry(e.target.value)}} required/>

                          </div>

                          {/* City Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-city" className="block text-lg text-gray-600 font-semibold mb-2">City*</label>
                              <input type="text" name="billing-city" id="billing-city" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={city} onChange={(e)=>{setCity(e.target.value)}} required/>

                          </div>

                          {/* zip Label & Input */}

                          <div className="mb-5">

                              <label htmlFor="billing-zip" className="block text-lg text-gray-600 font-semibold mb-2">Zip / Postal Code*</label>
                              <input type="number" name="billing-zip" id="billing-zip" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={zip} onChange={(e)=>{setZip(e.target.value)}} required/>

                          </div>



                          <div className="mt-20">

                            {/* Heading */}

                            <div className="w-full mb-10">
                                <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Shipping Address</h2>
                            </div>

                            {/* Same Address Checkbox */}

                          <div className="mb-10">

                          <input onChange={() => setShipping()} type="checkbox" name="same-address" id="same-address" className="mr-2"/>

                          <label htmlFor="same-address" className="text-lg text-gray-600 font-semibold">Same as billing address</label>

                          </div>

                          {/* Address Label & Input */}

                          <div className="mb-5">

                          <label htmlFor="shipping-address" className="block text-lg text-gray-600 font-semibold mb-2">Address*</label>
                          <input type="text" name="shipping-address" id="shipping-address" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={shippingDetails} onChange={(e)=>{setShippingDetails(e.target.value)}}  required/>

                          </div>

                          {/* Country Label & Input */}

                          <div className="mb-5">

                          <label htmlFor="shipping-country" className="block text-lg text-gray-600 font-semibold mb-2">Country*</label>
                          <input type="text" name="shipping-country" id="shipping-country" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={shippingCountry} onChange={(e)=>{setShippingCountry(e.target.value)}} required/>

                          </div>

                          {/* City Label & Input */}

                          <div className="mb-5">

                          <label htmlFor="shipping-city" className="block text-lg text-gray-600 font-semibold mb-2">City*</label>
                          <input type="text" name="shipping-city" id="shipping-city" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={shippingCity} onChange={(e)=>{setShippingCity(e.target.value)}} required/>

                          </div>

                          {/* zip Label & Input */}

                          <div className="mb-5">

                          <label htmlFor="shipping-zip" className="block text-lg text-gray-600 font-semibold mb-2">Zip / Postal Code*</label>
                          <input type="number" name="shipping-zip" id="shipping-zip" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={shippingZip} onChange={(e)=>{setShippingZip(e.target.value)}} required/>

                          </div>

                          </div>

                          <div>
                            <button type="submit" className="w-full bg-[#397f77] text-white text-lg font-semibold py-3 rounded-lg mt-10 hover:bg-[#18debb] duration-300">Place Order</button>
                          </div>
                      </form>

                  </div>

                </div>
            </div>


            {/* Order Summary */}

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
                                    
                                    <td className="text-gray-600 text-right ">C${subTotalPrice}</td>
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

                                    <td className="text-gray-600 text-right font-semibold text-2xl">C${subTotalPrice+shippingPrice+taxPrice}</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                  </div>
                </div>

                {/* pay now Button */}

            </div>

        </div>

  )

}



export default CheckoutSection