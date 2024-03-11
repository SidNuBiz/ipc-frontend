import React from "react";
import { useEffect,Fragment,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import Loader from "../../../pages/Loader";
import SideBar from "../Misc/SideBar";
import { getOrderDetails,createOrder} from "../../../actions/orderAction";
import { Link } from 'react-router-dom'
import { useAlert } from "react-alert";
import axios from 'axios';
import Cookies from 'js-cookie';
import url from '../../../utils/baseApi';


const AdminOrderView = () => {
    
    const dispatch = useDispatch()
    const alert = useAlert();
    const navigate = useNavigate();
    const orderId = useParams().id;
    const [order,setOrder] = useState(null)
    const [orderStatus,setOrderStatus] = useState("")

    const options = [
        {
          label: "Placed",
          value: "Placed",
        },
        {
          label: "In Progress",
          value: "In Progress",
        },
        {
          label: "On Hold",
          value: "On Hold",
        },
        {
          label: "Complete",
          value: "Complete",
        },
        {
            label: "Cancel",
            value: "Canceled",
          },
       
    ];

    

    const { order:orderDetails,loading } = useSelector(
        (state) => state.orderDetails
    );

 
    const calculatePrice = (e,sampleIndex,testIndex)=>{
        let newOrder = {...order}
        newOrder.products[sampleIndex].testFormData[testIndex].test[order.products[sampleIndex].selectedTurnaround.value] = e.target.value
        setOrder(newOrder)
    }

    // If the order is dynamic means the price is not set for all tests then admin will update the order with the price
    const updateOrder = ()=>{
        let isDynamic = false
        order.products.forEach(sample =>{
            sample.testFormData.forEach(tests=>{
                if(JSON.parse(tests.test[sample.selectedTurnaround.value] == 0)){ isDynamic = true  }
              
            })
          })
        if(isDynamic){
            alert.error("Please Enter Price for all Tests")
            return
        }
        dispatch(createOrder({...order,status:"placed",shipping:order.shippingAddress,billing:order.billingAddress,signatureBlob:order.signature}))
        navigate('/IPC-admin-portal/orders')
        
    }

    const updateOrderStatus = async (e) => {
        
        setOrderStatus(e.target.value)

        try {
            const token = Cookies.get('token')

            const config = {
                headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
            }
           
            const {data} = await axios.put(`${url}/api/v1/admin/order/status/${orderId}`,{status:e.target.value},config)
            
            if(data.success){
              alert.success("Successfully Updated status")
            }
            
        } catch (error) {
            alert.error(error.response.data.error)
        }

        
    }

    useEffect(() => {

        // 👇️ scroll to top on page load
        // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        dispatch(getOrderDetails(orderId))

    }, [dispatch,orderId]);

    useEffect(() => {
       
        setOrder(orderDetails)
        setOrderStatus(orderDetails && orderDetails.status)

    }, [orderDetails]);

    return (
    <Fragment>
        {loading ? (
          <Loader />
        ) : (
        <Fragment>
            <div className="lg:grid lg:grid-cols-5">
                <div className=" col-span-1 z-50 relative">
                    <SideBar />
                </div>

                <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">
                    
                <div>

                    {/* Go Back Button */}

                    <div className="mb-5 flex justify-between">
                        <button
                            onClick={() => {
                                window.history.go(-1);
                            }}
                            className=" text-[#397f77] text-xl font-semibold hover:-translate-x-5 duration-300 p-2"
                        >
                            &#x2190;Back
                        </button>
                    </div>

                    {/* Order Samples Button */}
                    {order && order.status === "Dynamic" ?
                    <div className=" w-fit ml-auto">
                        
                        <button id="add-to-cart-btn" onClick={updateOrder} className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">Update</button>
                        
                    </div>
                    :
                    <div className=" w-fit ml-auto">
                        <Link to={`/IPC-admin-portal/order/samples/${order && order.job_web_id}`}>
                        <button id="add-to-cart-btn" className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">Samples</button>
                        </Link>
                    </div>
                    
                
                }
                    
                    

                    {/* Order Details */}

                    <div id="invoices" className="py-10 text-gray-600">
                        {/* Order Id */}

                        <div className="mb-10">
                            <h2 className=" text-xl">
                                <b>Order #</b>
                                {order && order.job_web_id}
                            </h2>
                        </div>

                        {/* Info */}

                        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10 mb-10">
                            {/* Order Info */}

                            <div>
                                {/* Heading */}

                                <div>
                                    <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Order Information</h2>
                                </div>

                                {/* Order Date */}

                                <div className="mb-3">
                                    <h2 className=" text-md">                                
                                        <b>Order Date:</b> {`${new Date(order && order.created).getDate()}-${new Date(order && order.created).getMonth()+1}-${new Date(order && order.created).getFullYear()}`}
                                    </h2>
                                </div>

                                {/* Order Status */}

                                <div>
                                    <h2 className=" text-md">
                                        <b>Order Status: </b> 
                                        {
                                            order && order.status == "Dynamic" ?
                                            order.status
                                            :
                                            <select className=" border-[2px]" value={orderStatus} onChange={(e)=>updateOrderStatus(e)}>
                                            {options.map((option) => (
                                            <option value={option.value}>{option.label}</option>
                                            ))}
                                            </select>
                                        }
                                        
                                    </h2>
                                </div>
                            </div>

                            {/* Client Info */}

                            <div>
                                {/* Heading */}

                                <div>
                                    <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Account Information</h2>
                                </div>

                                {/* Client Name */}

                                <div className="mb-3">
                                    <h2 className=" text-md">
                                        <b>Client Name: </b>
                                        {order && order.firstname}
                                    </h2>
                                </div>

                                {/* Client Email */}

                                <div>
                                    <h2 className=" text-md">
                                        <b>Client Email: </b>
                                        {order && order.email}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Shipping Info */}

                        <div className=" mb-10">
                            {/* Heading */}

                            <div>
                                <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Shipping Information</h2>
                            </div>

                            {/* Details */}

                            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                                {/* Address */}

                                <div className="">
                                    <div className="">
                                        <b>Address</b> <br />
                                        {order  && order.shippingAddress.shippingDetails}
                                    </div>
                                </div>

                                {/* Country */}

                                <div className="">
                                    <div className="">
                                        <b>Country</b> <br />
                                        {order && order.shippingAddress.shippingCountry}
                                    </div>
                                </div>

                                {/* City */}

                                <div className="">
                                    <div className="">
                                        <b>City</b> <br />
                                        {order && order.shippingAddress.shippingCity}
                                    </div>
                                </div>

                                {/* Zip */}

                                <div className="">
                                    <div className="">
                                        <b>Zip</b> <br />
                                        {order && order.shippingAddress.shippingZip}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Items */}

                        <div>
                            {/* Heading */}

                            <div>
                                <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-5">Items</h2>
                            </div>

                            {/* Items */}

                            <div className="">

                                {
                                order && order.products.map ((item, sampleIndex) => (

                                    <div key={sampleIndex} className="mb-5 pb-5 border-b-[1px] border-b-black-900" >

                                    {/* Item Name */}

                                    <div className="grid grid-cols-2 gap-5 mb-3">

                                        {/* Name */}

                                        <div>
                                        <h2 className=" text-md"><b>Name:</b> <br /> {item.sampleName}</h2>
                                        </div>

                                    </div>

                                    {/* Item turnaround Type */}

                                    <div className="grid grid-cols-2 gap-5 mb-3">

                                        {/* Title */}

                                        <div>
                                        <h2 className=" text-md"><b>Turnaround Type:</b> <br /> {item.selectedTurnaround.label}</h2>
                                        </div>

                                    </div>

                                    <div className="mb-3">

                                        {/* Heading */}

                                        <h2 className=" text-md font-bold">Tests</h2>

                                        {/* Tests */}

                                        <div>

                                        {
                                            item.testFormData.map((test, testIndex) => (

                                            <div key={testIndex} className="grid grid-cols-2 gap-5">

                                                {/* Name */}

                                                <div>
                                                <h2 className=" text-md">{test.test.name}
                                                    
                                                    <p className="text-red-600" >
                                                    {test.addOn.length > 0 && <>[</>}  {/* If there is any addon then show them for the test} */}
                                                    {test.addOn.map((addon)=>(
                                                    
                                                    <span >{addon.value ? addon.name+",":null} </span>
                                                
                                                
                                                    ))}
                                                    {test.addOn.length > 0 && <>]</>}
                                                    </p>
                                                    
                                                </h2>
                                            
                                                </div>

                                                {/* Price */}
                                                
                                                {/* If the order is dynamic then let the admin set an price in the input field*/}
                                                <div className="text-right h-fit my-auto"> 
                                                {order && order.status === "Dynamic" ? 
                                                    <input type="number" className="border-gray-300 border-[1px] focus:outline-none" min={0} defaultValue={test.test[item.selectedTurnaround.value]} onChange={(e)=>calculatePrice(e,sampleIndex,testIndex)}  />
                                                    :
                                                    <h2 className=" text-md font-bold">C$ {test.test[item.selectedTurnaround.value]}</h2>
                                                }
                                                
                                                </div>

                                            </div>

                                            ))
                                        }

                                        </div>

                                    </div>

                                    </div>

                                ))
                                }

                            </div>


                       

                            <div className="mb-5">
                                {/* Heading */}

                                <div className="mb-5">
                                    <p className="text-xl font-bold text-gray-600">Additional Testing Information</p>
                                </div>

                                {/* Input */}

                                <textarea
                                    name=""
                                    id=""
                                    rows="3"
                                    className="w-full border border-gray-300 rounded-md p-2 py-[9px] text-sm focus:outline-none"
                                    disabled
                                    value={order && order.additionalInfo}
                                    >

                                </textarea>
                            </div>

                             {/* Total */}

                            {order && order.status !== "Dynamic" ?
                                <div className="">
                                   {/* Subtotal */}
   
                                   <div className="grid grid-cols-2 gap-5">
                                       <h2 className=" text-md font-bold">Subtotal:</h2>
   
                                       <h2 className=" text-md text-right font-bold">C${order && order.subTotalPrice}</h2>
                                   </div>
   
                                   {/* Shipping */}
   
                                   <div className="grid grid-cols-2 gap-5">
                                       <h2 className=" text-md font-bold">Shipping:</h2>
   
                                       <h2 className=" text-md text-right font-bold">C${order && order.shippingPrice}</h2>
                                   </div>
   
                                   {/* TAX */}
   
                                   <div className="grid grid-cols-2 gap-5 mb-5 pb-5 border-b-[1px] border-b-gray-200">
                                       <h2 className=" text-md font-bold">Tax:</h2>
   
                                       <h2 className=" text-md text-right font-bold">C${order && order.taxPrice}</h2>
                                   </div>
   
                                   {/* Total */}
   
                                   <div className="grid grid-cols-2 gap-5 mt-5">
                                       <h2 className=" text-xl font-bold">Total:</h2>
   
                                       <h2 className=" text-xl text-right font-bold">C${order && order.totalPrice}</h2>
                                   </div>
                               </div>
                            :
                            <></>}

                            <div>

                                <div>
                                    <p className="font-semibold text-xl mb-5 text-gray-600">Signature</p>
                                </div>
                                <img className="border border-gray-300 p-5" src={order && order.signature} alt="" />

                            </div>
                        </div>
                    </div>

                </div>
                        
                </div>
            </div>
        </Fragment>
      )}
    </Fragment>
    );
};

export default AdminOrderView;
