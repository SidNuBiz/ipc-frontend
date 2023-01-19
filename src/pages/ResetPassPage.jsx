import Logo from "../assets/header-logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";


const ResetPassPage = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (

        <div className="animate-crossfade bg-gradient-to-r from-[#eaf8f5] to-transparent min-h-screen pb-20">
            
            {/* Company Logo */}

            <div className="mb-10">
                <img src={Logo} alt="Company Logo" className=" w-36 mx-auto pt-10" />
            </div>

            {/* Form */}

            <div className=" bg-white w-fit mx-auto p-10 shadow-xl rounded-2xl">

                <form action="">

                    {/* Heading */}

                    <h2 className=" text-gray-600 text-4xl text-center">Reset Password</h2>


                    {/* Email */}

                    <div className="mt-5">

                        <h2 className="block text-2xl mb-3">Email</h2>

                        <h2 className="block px-3 py-2 text-xl font-semibold w-96 overflow-x-clip">example@example.com</h2>

                    </div>

                    {/* Password */}

                    <div className="mt-5">

                        <label htmlFor="new-password" className="block text-2xl mb-3">New Password</label>

                        <input type="password" name="new-password" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="********" />

                    </div>


                    {/* Confirm Password */}

                    <div className="mt-5">

                        <label htmlFor="re-password" className="block text-2xl mb-3">Confirm Password</label>

                        <input type="password" name="re-password" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="********" />

                    </div>

                    {/* Register Button */}

                    <div className="mt-10 w-fit mx-auto">
                        <button className="px-16 py-2 rounded-2xl border-2 border-[#397f77] text-[#397f77] text-2xl hover:border-white hover:text-white hover:bg-[#18debb] duration-300">Reset</button>
                    </div>

                    {/* Login Page Link */}

                    <h2 className="mt-10 text-center w-full">Go Back to <Link to="/login"><b className=" text-[#397f77] hover:underline duration-300">Login</b></Link></h2>
                    

                </form>
                
                
            </div>

        </div>

    );

}


export default ResetPassPage;