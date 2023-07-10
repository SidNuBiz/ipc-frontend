import React from "react";


const AdminOrderDetails = ({ order }) => {
    function printInvoice(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;

        window.print();

        document.body.innerHTML = originalContents;
    }

    return (
        <div>
            {/* Print Invoice Button */}

            <div className=" w-fit ml-auto">
                <button
                    onClick={() => printInvoice("invoices")}
                    id="add-to-cart-btn"
                    className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  "
                >
                    Print Invoice
                </button>
            </div>

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

            {/* Order Details */}

            <div id="invoices" className="py-10 text-gray-600">
                {/* Order Id */}

                <div className="mb-10">
                    <h2 className=" text-xl">
                        <b>Order #</b>
                        {order._id}
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
                                <b>Order Date:</b> {`${new Date(order.created).getDate()}-${new Date(order.created).getMonth()+1}-${new Date(order.created).getFullYear()}`}
                            </h2>
                        </div>

                        {/* Order Status */}

                        <div>
                            <h2 className=" text-md">
                                <b>Order Status:</b> {order.status}
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
                                {order.firstname}
                            </h2>
                        </div>

                        {/* Client Email */}

                        <div>
                            <h2 className=" text-md">
                                <b>Client Email: </b>
                                {order.email}
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
                                {order.shippingAddress.shippingDetails}
                            </div>
                        </div>

                        {/* Country */}

                        <div className="">
                            <div className="">
                                <b>Country</b> <br />
                                {order.shippingAddress.shippingCountry}
                            </div>
                        </div>

                        {/* City */}

                        <div className="">
                            <div className="">
                                <b>City</b> <br />
                                {order.shippingAddress.shippingCity}
                            </div>
                        </div>

                        {/* Zip */}

                        <div className="">
                            <div className="">
                                <b>Zip</b> <br />
                                {order.shippingAddress.shippingZip}
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
                        order.products.map ((item, index) => (

                            <div key={index} className="mb-5 pb-5 border-b-[1px] border-b-black-900" >

                            {/* Item Name */}

                            <div className="grid grid-cols-2 gap-5 mb-3">

                                {/* Name */}

                                <div>
                                <h2 className=" text-md"><b>Name:</b> <br /> {item.sampleName}</h2>
                                </div>

                                {/* Price */}

                                {/* <div className="text-right h-fit my-auto">
                                <h2 className=" text-md font-bold">C${item.price}</h2>
                                </div> */}

                            </div>

                            {/* Item turnaround Type */}

                            <div className="grid grid-cols-2 gap-5 mb-3">

                                {/* Title */}

                                <div>
                                <h2 className=" text-md"><b>Turnaround Type:</b> <br /> {item.selectedTurnaround.label}</h2>
                                </div>

                                {/* Price

                                <div className="text-right h-fit my-auto">
                                <h2 className=" text-md font-bold">C${item.turnaroundType.addOnPrice}</h2>
                                </div> */}

                            </div>

                            {/* Item Ordered Strains */}

                            <div className="mb-3">

                                {/* Heading */}

                                <h2 className=" text-md font-bold">Tests</h2>

                                {/* Tests */}

                                <div>

                                {
                                    item.testFormData.map((test, index) => (

                                    <div key={index} className="grid grid-cols-2 gap-5">

                                        {/* Name */}

                                        <div>
                                        <h2 className=" text-md">{test.test.Name}</h2>
                                        </div>

                                        {/* Price */}

                                        <div className="text-right h-fit my-auto">
                                        <h2 className=" text-md font-bold">C$ {item.selectedTurnaround.value == 'rushed' ? test.test.RushedPricing:test.test.StandardPricing}</h2>
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


                    {/* Total */}

                    <div className="">
                        {/* Subtotal */}

                        <div className="grid grid-cols-2 gap-5">
                            <h2 className=" text-md font-bold">Subtotal:</h2>

                            <h2 className=" text-md text-right font-bold">C${order.subTotalPrice}</h2>
                        </div>

                        {/* Shipping */}

                        <div className="grid grid-cols-2 gap-5">
                            <h2 className=" text-md font-bold">Shipping:</h2>

                            <h2 className=" text-md text-right font-bold">C${order.shippingPrice}</h2>
                        </div>

                        {/* TAX */}

                        <div className="grid grid-cols-2 gap-5 mb-5 pb-5 border-b-[1px] border-b-gray-200">
                            <h2 className=" text-md font-bold">Tax:</h2>

                            <h2 className=" text-md text-right font-bold">C${order.taxPrice}</h2>
                        </div>

                        {/* Total */}

                        <div className="grid grid-cols-2 gap-5 mt-5">
                            <h2 className=" text-xl font-bold">Total:</h2>

                            <h2 className=" text-xl text-right font-bold">C${order.totalPrice}</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* Result */}

            <div className="">
                {/* Heading */}

                <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-5">Test Result</h2>

                {/* Result */}
                <div className="w-full">

                    <h2 className="text-xl text-gray-600 font-semibold w-full text-center">[ Result not published ]</h2>

                </div>

            </div>
        </div>
    );
};

export default AdminOrderDetails;
