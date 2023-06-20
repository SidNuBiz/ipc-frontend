import React, { useEffect } from 'react'
import NavBar from '../components/Misc/NavBar';
import Footer from '../components/Misc/Footer';
import { Link } from 'react-router-dom';

const PaymentSuccessfulPage = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

            {/* NavBar */}

            <div>
                <NavBar />
            </div>

            {/* Page Section */}

            <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-52">
                {/* Payment Success Message*/}

                <h2 className='text-5xl text-gray-600 text-center font-semibold py-40'>Payment Successful</h2>

                {/* Back to home Button */}

                <div className="mb-5 w-fit mx-auto">
                    <Link to="/">
                        <button className="bg-[#397f77] px-20 py-3 text-white hover:bg-[#18debb] duration-500 font-bold rounded-full">Back to Home</button>
                    </Link>
                </div>
            </div>


            {/* Footer */}

            <div>
                <Footer />
            </div>

        </div>

    );
}

export default PaymentSuccessfulPage