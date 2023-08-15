import { Link } from "react-router-dom";
import Logo from "../assets/header-logo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, forgotPasswordRecover } from "../actions/userAction";
import {useNavigate} from "react-router-dom"
import { useAlert } from "react-alert";


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const alert = useAlert()

    const { error, isAuthenticated } = useSelector(
        (state) => state.user
    );
    const {error:FPerror,message} = useSelector((state)=>state.forgotPassword)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [forgetEmail, setForgetEmail] = useState("")

    const loginUser = (e) => {
        e.preventDefault()
        dispatch(login({email,password}));
    }

    const forgetPassword = (e)=>{
        e.preventDefault()
        dispatch(forgotPasswordRecover(forgetEmail))
    }

    const [forgotPassword, setForgotPassword] = useState(false);

    useEffect(() => {
        if (error) {
      
            alert.error(error);
            dispatch(clearErrors());
        }

        if(FPerror){
            alert.error(FPerror);
            dispatch(clearErrors());
        }

        if(message){
            alert.success(message);
            dispatch({ type: 'FORGOT_PASSWORD_SUCCESS', payload: null });
        }
      
        if (isAuthenticated) {
            navigate(`/`);
        }
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [dispatch, error, navigate, isAuthenticated,FPerror,message]);

    return (

        <div className="animate-crossfade bg-gradient-to-r from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">
            
            {/* Company Logo */}

            <div className="mb-10">
                <img src={Logo} alt="Company Logo" className=" w-36 mx-auto pt-10" />
            </div>

            {/* Login Form */}

            <div className={"bg-white w-fit mx-auto p-10 shadow-xl rounded-2xl " + (forgotPassword ? "translate-x-[2000px] duration-500 h-0 " : " translate-x-0 duration-500 ")}>

                <form onSubmit={loginUser} >

                    {/* Heading */}

                    <h2 className=" text-gray-600 text-4xl text-center">Login to Your Account</h2>

                    {/* Email */}

                    <div className="mt-10">

                        <label htmlFor="email" className="block text-2xl mb-3">Email</label>

                        <input type="email" name="email" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="example@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} />

                    </div>

                    {/* Password */}

                    <div className="mt-5">

                        <label htmlFor="password" className="block text-2xl mb-3">Password</label>

                        <input type="password" name="password" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    </div>

                    {/* Login Button */}

                    <div className="mt-10 w-fit mx-auto">
                        <button type="submit" className="px-16 py-2 rounded-2xl border-2 border-[#397f77] text-[#397f77] text-2xl hover:border-white hover:text-white hover:bg-[#18debb] duration-300">Login</button>
                    </div>

                    {/* Forgot Password Button */}

                    <div className="w-fit mx-auto">
                        <button type="button" className="text-[#397f77] text-lg mt-5 hover:text-[#18debb] duration-300" onClick={() => setForgotPassword(true)}>Forgot Password?</button>
                    </div>

                    {/* Sign Up Page Link */}

                    <h2 className="mt-10 text-center w-full">Don't have any account? <Link to="/signup"><b className=" text-[#397f77] hover:underline duration-300">Sign Up</b></Link></h2>

                    {/* Back Button */}

                    <button onClick={() => {window.history.go(-1)}} type="button" className="mt-10 text-[#397f77] font-semibold w-full text-center text-xl hover:-translate-x-5 duration-300">&#x2190; Go Back</button>

                    


                </form>
                
                
            </div>


            {/* Forgot Password Form */}

            <div className={"bg-white w-fit mx-auto p-10 shadow-xl rounded-2xl " + (forgotPassword ? " translate-x-0 duration-500 " : " -translate-x-[2000px] duration-500 h-0 ")}>

                <form onSubmit={forgetPassword} >

                    {/* Heading */}

                    <h2 className=" text-gray-600 text-4xl text-center mb-3">Forgot Password?</h2>

                    <h2 className=" text-gray-600 text-lg text-center">Enter Email Associated With Your Account</h2>

                    {/* Email */}

                    <div className="mt-10">

                        <label htmlFor="email" className="block text-2xl mb-3">Email</label>

                        <input type="email" name="email" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="example@example.com" value={forgetEmail} onChange={(e)=>{setForgetEmail(e.target.value)}} />

                    </div>

                    {/* Submit Button */}

                    <div className="mt-10 w-fit mx-auto">
                        <button type="submit" className="px-16 py-2 rounded-2xl border-2 border-[#397f77] text-[#397f77] text-2xl hover:border-white hover:text-white hover:bg-[#18debb] duration-300"  >Submit</button>
                    </div>

                    {/* Return Button */}

                    <button onClick={() => {setForgotPassword(false)}} type="button" className="mt-10 text-[#397f77] font-semibold w-full text-center text-xl hover:-translate-x-5 duration-300">&#x2190; Go Back</button>

                </form>
                
                
            </div>

        </div>

    );

}


export default LoginPage;