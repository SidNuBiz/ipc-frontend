



const CheckoutForm = () => {

    const setShipping = () => {

        if (document.getElementById('same-address').checked) {

            document.getElementById('shipping-address').value = document.getElementById('billing-address').value;
            document.getElementById('shipping-country').value = document.getElementById('billing-country').value;
            document.getElementById('shipping-city').value = document.getElementById('billing-city').value;
            document.getElementById('shipping-zip').value = document.getElementById('billing-zip').value;

        }

        else {

            document.getElementById('shipping-address').value = '';
            document.getElementById('shipping-country').value = '';
            document.getElementById('shipping-city').value = '';
            document.getElementById('shipping-zip').value = '';

        }

    }

  return (
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

            <form action="">

                {/* First Name Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-f-name" className="block text-lg text-gray-600 font-semibold mb-2">First Name*</label>
                    <input type="text" name="billing-f-name" id="billing-f-name" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>


                {/* Last Name Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-l-name" className="block text-lg text-gray-600 font-semibold mb-2">Last Name*</label>
                    <input type="text" name="billing-l-name" id="billing-l-name" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* Email Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-email" className="block text-lg text-gray-600 font-semibold mb-2">Email*</label>
                    <input type="email" name="billing-email" id="billing-email" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* Address Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-address" className="block text-lg text-gray-600 font-semibold mb-2">Address*</label>
                    <input type="text" name="billing-address" id="billing-address" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* Country Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-country" className="block text-lg text-gray-600 font-semibold mb-2">Country*</label>
                    <input type="text" name="billing-country" id="billing-country" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* City Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-city" className="block text-lg text-gray-600 font-semibold mb-2">City*</label>
                    <input type="text" name="billing-city" id="billing-city" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* zip Label & Input */}

                <div className="mb-5">

                    <label htmlFor="billing-zip" className="block text-lg text-gray-600 font-semibold mb-2">Zip / Postal Code*</label>
                    <input type="text" name="billing-zip" id="billing-zip" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

            </form>

        </div>


        {/* Shipping Address */}

        <div className="mt-20">

            {/* Heading */}

            <div className="w-full mb-10">
                <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Shipping Address</h2>
            </div>

            {/* Form */}

            <form action="">

                {/* Same Address Checkbox */}

                <div className="mb-10">

                    <input onChange={() => setShipping()} type="checkbox" name="same-address" id="same-address" className="mr-2"/>

                    <label htmlFor="same-address" className="text-lg text-gray-600 font-semibold">Same as billing address</label>

                </div>

                {/* Address Label & Input */}

                <div className="mb-5">

                    <label htmlFor="shipping-address" className="block text-lg text-gray-600 font-semibold mb-2">Address*</label>
                    <input type="text" name="shipping-address" id="shipping-address" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* Country Label & Input */}

                <div className="mb-5">

                    <label htmlFor="shipping-country" className="block text-lg text-gray-600 font-semibold mb-2">Country*</label>
                    <input type="text" name="shipping-country" id="shipping-country" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* City Label & Input */}

                <div className="mb-5">

                    <label htmlFor="shipping-city" className="block text-lg text-gray-600 font-semibold mb-2">City*</label>
                    <input type="text" name="shipping-city" id="shipping-city" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

                {/* zip Label & Input */}

                <div className="mb-5">

                    <label htmlFor="shipping-zip" className="block text-lg text-gray-600 font-semibold mb-2">Zip / Postal Code*</label>
                    <input type="text" name="shipping-zip" id="shipping-zip" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" required/>

                </div>

            </form>

        </div>

    </div>
  );
}

export default CheckoutForm;