import NavLogo from "../../assets/nav-logo.png";
import SectionBottomCurve from "../../assets/section-bottom-curve.png";
import { Link } from "react-router-dom";
import { useState, useEffect , Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userAction";
import Loader from "../../pages/Loader";

const NavBar = () => {
    const dispatch = useDispatch()
    const { loading, isAuthenticated,user } = useSelector(
        (state) => state.user
    );

    const {services,loading:sLoading} = useSelector(
        (state) => state.services
    );
    
    const isLoggedIn = isAuthenticated;

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const [aboutDropDown, setAboutDropDown] = useState(false);

    const [servicesDropDown, setServicesDropDown] = useState(false);

    const [storeDropDown, setStoreDropDown] = useState(false);

    const [careerDropDown, setCareerDropDown] = useState(false);

    const [contactDropDown, setContactDropDown] = useState(false);


    function logoutUser() {
        dispatch(logout());        
    }

    useEffect(() => {

    }, [loading]);

    return (
        <Fragment>
        {loading || sLoading ? (
          <Loader />
        ) : (
        <Fragment>
            <nav className="mt-8 lg:mx-10 md:mx-10 sm:mx-2 py-3 fixed z-40 bg-white min-w-screen left-0 right-0 top-2 rounded-2xl shadow-lg text-gray-600">
                <div className="flex flex-cols-8 w-11/12 mx-auto justify-between">
                    {/* Brand */}

                    <div className=" lg:col-span-2 md:col-span-3 sm:col-span-3 h-fit my-auto">
                        <Link to="/"> <img src={NavLogo} alt="" className="w-25 " /> </Link>
                    </div>

                    {/* Menu */}

                    <div className=" flex lg:col-span-4 lg:block md:hidden sm:hidden h-fit my-auto w-fit mx-auto">
                        <ul className="block font-medium">

    

                            {/* Home */}
                            <li className=" inline-block mr-8">
                                <Link to="/">
                                    <button className="text-xl">Home</button>
                                </Link>
                            </li>


                            {/* About */}


                            <li className=" inline-block mr-8">
                                
                                <button className="relative peer text-xl">About</button>

                                {/* Dropdown */}

                                <div className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                    <ul>
                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link  to="/about/who-we-are"><h2 className="px-5 py-3">Who we are</h2></Link>
                                        </li>
                                        <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/about/licensing"><h2 className="px-5 py-3">Licensing & Accreditations</h2></Link>
                                        </li>
                                        <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/about/equipment"><h2 className="px-5 py-3">Equipments</h2></Link>
                                        </li>
                                    </ul>
                      
                                </div>
                                
                            </li>


                            {/* Services */}


                            <li className=" inline-block mr-8">
                                
                                <button className="relative peer text-xl">Services</button>

                                {/* Dropdown */}

                            
                                <div  className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                    <ul>
                                    <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                        <Link to="/services/overview"><h2 className="px-5 py-3">Overview</h2></Link>
                                    </li>
                                    {services && services.map((service,idx) => (
                                        <li key={idx} className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to={`/services/${idx}`} ><h2 className="px-5 py-3">{service.title}</h2></Link>
                                        </li>
                                        
                                    ))}
                                    </ul>
                                </div>
                                
                            </li>


                            {/* Store */}

                            <li className=" inline-block mr-8">
                                
                                <h2 className="relative peer text-xl">Store</h2>

                                {/* Dropdown */}

                                <div className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                    <ul>
                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/all"><h2 className="px-5 py-3">All Testing Services</h2></Link>
                                        </li>

                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/packages"><h2 className="px-5 py-3">Package Pricing</h2></Link>
                                        </li>

                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/tests/pricing"><h2 className="px-5 py-3">Tests Pricing</h2></Link>
                                        </li>

                                        <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/faq"><h2 className="px-5 py-3">FAQ</h2></Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </li>



                            {/* Career */}


                            <li className=" inline-block mr-8">
                                
                                <h2 className="relative peer text-xl">Career</h2>

                                {/* Dropdown */}

                                
                                <div className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                    <ul>
                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/career/now-opening"><h2 className="px-5 py-3">Now Opening</h2></Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </li>


                            {/* Contact */}


                            <li className=" inline-block">
                                
                                <h2 className="relative peer text-xl">Contact</h2>

                                {/* Dropdown */}

                               
                                <div className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                    <ul>
                                        <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/contact/business-information"><h2 className="px-5 py-3">Business Information</h2></Link>
                                        </li>
                                        <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/contact/legal"><h2 className="px-5 py-3">Legal</h2></Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </li>
                            
                        </ul>
                    </div>

                    {/* Cart & Mobile Menu Button */}
                <div className="flex lg:col-span-3 md:col-span-5 sm:col-span-5">
                    {/* Cart */}
                    {/* <div className=" inline-block align-middle  lg:mr-0 lg:ml-auto md:mr-10 md:ml-auto sm:mr-10 sm:ml-auto h-fit my-auto w-fit">
                        <Link to="/cart"><img src="https://img.icons8.com/material/40/397f77/move-by-trolley--v1.png" alt=""/></Link>
                    </div> */}

                    {/* Account */}

                    <div className=" h-fit my-auto lg:block md:hidden sm:hidden">
                        <span className=" inline-block align-middle w-full ml-10 mr-auto">
                            {isLoggedIn ? (

                                <div className="w-fit">
                                    <div className=" relative peer">

                                        {/* User icon */}

                                        <div className="inline-block align-middle w-[40px] h-[40px] mx-auto rounded-full">
                                            <img src={user.avatar.url} alt="" className=" h-full w-full rounded-full object-cover"/>
                                        </div>

                                    </div>

                                    {/* Dropdown */}

                                    <div className="absolute hidden peer-hover:block hover:block bg-white drop-shadow-lg text-lg py-2 rounded-2xl">
                                            <ul>
                                            {isAuthenticated && user.role === 'admin' &&
                                                <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                                    <Link to="/IPC-admin-portal"><h2 className="px-5 py-3">Dashboard</h2></Link>
                                                </li>
                                            }
                                            <li className="block hover:bg-[#18debb] hover:bg-opacity-30">
                                                <Link to="/user/profile"><h2 className="px-5 py-3">Profile</h2></Link>
                                            </li>
                                            <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                                <Link to="/user/account"><h2 className="px-5 py-3">Account</h2></Link>
                                            </li>
                                            <li className=" block hover:bg-[#18debb] hover:bg-opacity-30">
                                                <Link to="/user/samples"><h2 className="px-5 py-3">Samples</h2></Link>
                                            </li>
                                            <li className=" block  hover:bg-[#18debb] hover:bg-opacity-30">
                                                <button className="px-5 py-3" onClick={logoutUser} >Logout</button>
                                            </li>

                                        </ul>
                                    </div>
                                </div>

                                

                            ) : (

                                <div className="text-lg text-[#397f77] w-fit mx-auto">

                                    <span className=" inline-block">
                                        <Link to="/login"><h2 className="hover:bg-[#18debb] hover:text-white duration-300 p-1 rounded-xl">Login</h2></Link>
                                    </span>

                                    <span className=" inline-block mx-1">/</span>

                                    <span className=" inline-block">
                                        <Link to="/signup"><h2 className="hover:bg-[#18debb] hover:text-white duration-300 p-1 rounded-xl">Sign Up</h2></Link>
                                    </span>

                                </div>
                            )}
                        </span>

                    </div>


                    {/* Mobile Menu Button */}
                    <button onClick={() => setSideBarOpen(!sideBarOpen)} className={"inline-block align-middle lg:hidden md:block sm:block mr-0 h-fit my-auto w-fit  " + (sideBarOpen ? "rotate-180 duration-300" : " rotate-0 duration-300")}>
                        <img src="https://img.icons8.com/material/50/397f77/menu--v1.png" alt=""/>
                    </button>
                    </div>
                </div>


                {/* Sidebar Menu */}

                <div className={ " lg:hidden md:block sm:block bg-white min-h-screen h-full no-scrollbar overflow-y-auto w-[300px] left-0 top-0 fixed drop-shadow-2xl duration-300 " + ( sideBarOpen ? " translate-x-0 duration-300 " : " -translate-x-[300px] duration-300 " )}>
                    
                    {/* Profile */}

                    <div className="bg-gradient-to-t from-gray-900 to-[#032725] text-white">
                        
                        {/* Close Button */}

                        <div onClick={() => setSideBarOpen(!sideBarOpen)} className="block right-0 w-full">
                            <button className=" text-5xl font-medium w-fit ml-[250px] mt-[15px]">x</button>
                        </div>

                        {/* Account */}

                        <div>
                            {isLoggedIn ? (
                                
                                <div>

                                    {/* User icon */}

                                    <div className="w-[100px] h-[100px] mx-auto mb-5">
                                        <img src={ user.avatar.url } alt="" className=" h-full w-full rounded-full object-cover"/>
                                    </div>

                                    {/* User Name */}

                                    <div className=" w-fit mx-auto mt-2">
                                        <h2 className="text-white text-center text-2xl">{user.firstname}</h2>
                                    </div>

                                    {/* Profile and My Account links */}

                                    <div className=" w-fit mx-auto py-5 border-b-2 border-white">

                                        {/* Profile Link */}

                                        <Link to="/user/profile">

                                            <div className="inline-block align-middle mr-3 px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                                Profile
                                            </div>

                                        </Link>

                                        {/* My Account Link */}

                                        <Link to="/user/account">

                                            <div className="inline-block align-middle px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                                Account
                                            </div>

                                        </Link>

                                       
                     
                                    </div>

                                    {/* Logout Button */}

                                    <div className=" w-fit mx-auto pt-5 ">
                                        <button onClick={logoutUser} className="text-white text-xl text-center hover:underline hover:text-[#18debb] duration-300">Logout</button>
                                    </div>

                                    

                                </div>

                            ) : (

                                <div>

                                    {/* User icon */}

                                    <div className=" w-[100px] h-[100px] mx-auto mb-5">
                                        <img src="https://img.icons8.com/material/100/ffffff/user-male-circle--v1.png" className=" h-full w-full rounded-full object-cover" alt=""/>
                                    </div>

                                    {/* Login / Sign up */}

                                    <div className=" w-fit mx-auto py-5 border-t-2 border-white">

                                        {/* Profile Link */}

                                        <Link to="/login">

                                            <div className="inline-block align-middle mr-3 px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                                Login
                                            </div>
                                        </Link>

                                        {/* My Account Link */}

                                        <Link to="/signup">

                                            <div className="inline-block align-middle px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                                Sign up
                                            </div>

                                        </Link>
                                    </div>

                                </div>

                            )}

                            {/* Bottom Curve */}

                            <div className="">
                                <img src={SectionBottomCurve} alt="" className=""/>
                            </div>
                        </div>

                    </div>


                    {/* Menu */}

                    <div className="mt-10 ">

                        <ul>
                            {/* Dashboard */}

                            {isAuthenticated && user.role === 'admin' &&
                            <li className=" block mb-10">
                                <Link to="/IPC-admin-portal">
                                    <button className="text-2xl font-semibold ml-20">Dashboard</button>
                                </Link>
                            </li>
                            
                            }
                            {/* Home */}

                            <li className="block mb-10">
                                <Link to="/">
                                    <button className="text-2xl font-semibold ml-20">Home</button>
                                </Link>
                            </li>


                            {/* About */}


                            <li className="block w-full">
                                

                                <button onClick={() => setAboutDropDown (!aboutDropDown)} className="relative text-left w-full text-2xl font-semibold ">

                                    <span className="relative inline-block align-middle ml-20">About</span>

                                    {/* Down Arrow Icon */}

                                    <span className={"absolute right-[80px] top-[6px]" + ( aboutDropDown ? " inline-block align-middle transition-transform duration-300 rotate-180" : " inline-block align-middle transition-transform duration-300 rotate-0" )}>
                                        <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" alt=""  className=""/>
                                    </span>

                                </button>


                                {/* Dropdown */}

                                <div className={"overflow-hidden bg-white my-5 " + ( aboutDropDown ? " h-full " : "h-0 ")}>
                                    <ul>
                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/about/who-we-are"><h2>Who we are</h2></Link>
                                        </li>

                                        <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/about/licensing"><h2>Licensing & Accreditations</h2></Link>
                                        </li>

                                        <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/about/equipment"><h2>Equipments</h2></Link>
                                        </li>
                                    </ul>
                                </div>
                                
                            </li>


                            {/* Services */}

                            <li className="block w-full">
                                

                                <button onClick={() => setServicesDropDown (!servicesDropDown)} className="relative text-left w-full text-2xl font-semibold ">

                                    <span className=" relative inline-block align-middle ml-20">Services</span>

                                    {/* Down Arrow Icon */}

                                    <span className={"absolute right-[80px] top-[6px]" + ( servicesDropDown ? " inline-block align-middle transition-transform duration-300 rotate-180" : " inline-block align-middle transition-transform duration-300 rotate-0" )}>
                                        <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" alt=""  className=""/>
                                    </span>

                                </button>


                                {/* Dropdown */}

                                <div className={"overflow-hidden bg-white my-5 " + ( servicesDropDown ? " h-full " : "h-0 ")}>
                                    <ul>
                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/services/overview"><h2>Overview</h2></Link>
                                        </li>
                                        {services && services.map((service,idx) => (
                                            <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                                <Link to={`/services/${idx}`} ><h2>{service.title}</h2></Link>
                                            </li>
                                        ))}

                                      
                                    </ul>
                                </div>
                                
                            </li>

                            
                            {/* Store */}

                            <li className="block w-full">
                                

                                <button onClick={() => setStoreDropDown (!storeDropDown)} className="relative text-left w-full text-2xl font-semibold ">

                                    <span className="relative inline-block align-middle ml-20">Store</span>

                                    {/* Down Arrow Icon */}

                                    <span className={"absolute right-[80px] top-[6px]" + ( storeDropDown ? " inline-block align-middle transition-transform duration-300 rotate-180" : " inline-block align-middle transition-transform duration-300 rotate-0" )}>
                                        <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" alt=""  className=""/>
                                    </span>

                                </button>


                                {/* Dropdown */}

                                <div className={"overflow-hidden bg-white my-5 " + ( storeDropDown ? " h-full " : "h-0 ")}>
                                    <ul>
                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/all"><h2>All Testing Services</h2></Link>
                                        </li>

                                        <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/packages"><h2>Package Pricing</h2></Link>
                                        </li>

                                        <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/tests/pricing"><h2>Tests Pricing</h2></Link>
                                        </li>

                                        <li className=" block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/store/faq"><h2>FAQ</h2></Link>
                                        </li>

                                

                                    </ul>
                                </div>
                                
                            </li>


                            {/* Career */}


                            <li className="block w-full">
                                

                                <button onClick={() => setCareerDropDown (!careerDropDown)} className="relative text-left w-full text-2xl font-semibold ">

                                    <span className="relative inline-block align-middle ml-20">Career</span>

                                    {/* Down Arrow Icon */}

                                    <span className={"absolute right-[80px] top-[6px]" + ( careerDropDown ? " inline-block align-middle transition-transform duration-300 rotate-180" : " inline-block align-middle transition-transform duration-300 rotate-0" )}>
                                        <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" alt=""  className=""/>
                                    </span>

                                </button>


                                {/* Dropdown */}

                                <div className={"overflow-hidden bg-white my-5 " + ( careerDropDown ? " h-full " : "h-0 ")}>
                                    <ul>
                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/career/now-opening"><h2>Now Opening</h2></Link>
                                        </li>

                                    </ul>
                                </div>
                                
                            </li>


                            {/* Contact */}


                            <li className="block w-full">
                                

                                <button onClick={() => setContactDropDown (!contactDropDown)} className="relative text-left w-full text-2xl font-semibold ">

                                    <span className="relative inline-block align-middle ml-20">Contact</span>

                                    {/* Down Arrow Icon */}

                                    <span className={"absolute right-[80px] top-[6px]" + ( contactDropDown ? " inline-block align-middle transition-transform duration-300 rotate-180" : " inline-block align-middle transition-transform duration-300 rotate-0" )}>
                                        <img src="https://img.icons8.com/material/24/000000/expand-arrow--v1.png" alt=""  className=""/>
                                    </span>

                                </button>


                                {/* Dropdown */}

                                <div className={"overflow-hidden bg-white my-5 " + ( contactDropDown ? " h-full " : "h-0 ")}>
                                    <ul>
                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/contact/business-information"><h2>Business Information</h2></Link>
                                        </li>

                                        <li className="block pl-10 py-3 hover:bg-[#18debb] hover:bg-opacity-30">
                                            <Link to="/contact/legal"><h2>Legal</h2></Link>
                                        </li>

                                    </ul>
                                </div>
                                
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
        </Fragment>
      )}
    </Fragment>
       
    );
};

export default NavBar;
