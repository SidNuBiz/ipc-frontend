import { Link } from "react-router-dom";
import Logo from "../assets/header-logo.png";
import Loader from "./Loader";
import { useEffect , Fragment, useState, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../actions/userAction";
import {useNavigate} from "react-router-dom"
import { useAlert } from "react-alert";
import axios from "axios";
import url from "../utils/baseApi";


const SignUpPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const alert = useAlert()

    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPasswword,setConfirmPassword] = useState("")

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const registerUser = async (e) => {
        e.preventDefault()
        if(password === confirmPasswword){
            // dispatch(register({firstname,lastname,email,password}));
            try{
               
                const config = { headers: { "Content-Type": "multipart/form-data" } };
    
                const { data } = await axios.post(`${url}/api/v1/verify`, {firstname,lastname,email,password}, config);
                if(data.success){
                    alert.success(data.message)
                }

            }catch(error){
                console.log(error)
                alert.error(error.message)
            }

        }else{
            alert.error("Password and confirm password did not match")  
        }
        
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
      
        if (isAuthenticated) {
            navigate(`/`);
        }
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [dispatch, error, navigate, isAuthenticated]);

    return (
        <Fragment>
        {loading ? (
          <Loader />
        ) : (
        <Fragment>
            <div className="animate-crossfade bg-gradient-to-r from-[#eaf8f5] to-transparent min-h-screen pb-20">
                
                {/* Company Logo */}

                <div className="mb-10">
                    <img src={Logo} alt="Company Logo" className=" w-36 mx-auto pt-10" />
                </div>

                {/* Form */}

                <div className=" bg-white w-fit mx-auto p-10 shadow-xl rounded-2xl">

                    <form onSubmit={registerUser}>

                        {/* Heading */}

                        <h2 className=" text-gray-600 text-4xl text-center">Create New Account</h2>

                        {/* First Name */}

                        <div className="mt-10">

                            <label htmlFor="f-name" className="block text-2xl mb-3">First Name</label>

                            <input type="text" name="f-name" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="ex: John" value={firstname} onChange={(e)=>setFirstName(e.target.value)} />

                        </div>

                        {/* Last Name */}

                        <div className="mt-5">

                            <label htmlFor="l-name" className="block text-2xl mb-3">Last Name</label>

                            <input type="text" name="l-name" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="ex: Doe" value={lastname} onChange={(e)=>setLastName(e.target.value)}/>

                        </div>

                        {/* Email */}

                        <div className="mt-5">

                            <label htmlFor="email" className="block text-2xl mb-3">Email</label>

                            <input type="email" name="email" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="example@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                        </div>

                        {/* Password */}

                        <div className="mt-5">

                            <label htmlFor="password" className="block text-2xl mb-3">Password</label>

                            <input type="password" name="password" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="********" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                        </div>


                        {/* Confirm Password */}

                        <div className="mt-5">

                            <label htmlFor="re-password" className="block text-2xl mb-3">Confirm Password</label>

                            <input type="password" name="re-password" className="block bg-[#18debb] bg-opacity-20 w-96 rounded-xl px-3 py-2 focus:outline-none placeholder:text-gray-400" placeholder="********" value={confirmPasswword} onChange={(e)=>setConfirmPassword(e.target.value)}/>

                        </div>

                        {/* Register Button */}

                        <div className="mt-10 w-fit mx-auto">
                            <button type="submit" className="px-16 py-2 rounded-2xl border-2 border-[#397f77] text-[#397f77] text-2xl hover:border-white hover:text-white hover:bg-[#18debb] duration-300">Register</button>
                        </div>

                        {/* Login Page Link */}

                        <h2 className="mt-10 text-center w-full">Already have an account? <Link to="/login"><b className=" text-[#397f77] hover:underline duration-300">Login</b></Link></h2>

                        {/* Back Button */}

                        <button onClick={() => {window.history.go(-1)}} type="button" className="mt-10 text-[#397f77] font-semibold w-full text-center text-xl hover:-translate-x-5 duration-300">&#x2190; Go Back</button>

                        


                    </form>
                    
                    
                </div>

            </div>
        </Fragment>
      )}
    </Fragment>
        

    );

}


export default SignUpPage;