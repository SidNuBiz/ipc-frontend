const OrderDetails = ({ sample }) => {
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
                    onClick={() => printInvoice("invoice")}
                    id="add-to-cart-btn"
                    className="bg-[#397f77] px-10 py-3 text-white rounded-lg hover:bg-[#18debb] duration-500  ">
                    Print
                </button>
            </div>

            {/* Order Details */}

            <div
                id="invoice"
                className="py-10 mt-10 text-gray-600">
                {/* Order Id */}

                <div className="mb-10">
                    <h2 className=" text-xl">
                        <b>Sample #</b>
                        {sample.id_text}
                    </h2>
                </div>

                {/* Info */}

                {/* Heading */}

                <div>
                    <h2 className=" text-xl pb-3 border-b-[2px] border-b-gray-200 mb-3">Sample Information</h2>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5 mb-10">
                    {/* Order Info */}

                    {/* Sampled Date */}

                    <div className="">
                        <h2 className=" text-md">
                            <b>Sampled Date: </b>
                            {sample.sampled_date}
                        </h2>
                    </div>

                    {/* Client Id */}

                    <div>
                        <h2 className=" text-md">
                            <b>Client Id: </b>
                            {sample.external_id}
                        </h2>
                    </div>

                    {/* Sample Name */}

                    <div className="">
                        <h2 className=" text-md">
                            <b>Sample Name: </b>
                            {sample.sample_name}
                        </h2>
                    </div>

                    {/* Sample Status */}

                    <div>
                        <h2 className=" text-md">
                            <b>Sample Status: </b>
                            {sample.status}
                        </h2>
                    </div>

                    {/* Sample Description */}

                    <div className="lg:col-span-2">
                        <h2 className=" text-md">
                            <b>Sample Description: </b>
                            {sample.description}
                        </h2>
                    </div>

                    {/* Tests to do */}

                    <div>
                        <h2 className=" text-md">
                            <b>Tests to do: </b>
                            {sample.tests_to_do}
                        </h2>
                    </div>

                    {/* Total Elements */}

                    <div>
                        <h2 className=" text-md">
                            <b>Total Elements: </b>
                            {sample.total_elements}
                        </h2>
                    </div>

                    {/* Workflow Node */}

                    <div>
                        <h2 className=" text-md">
                            <b> Workflow Node: </b>
                            {sample.workflow_node}
                        </h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OrderDetails;
