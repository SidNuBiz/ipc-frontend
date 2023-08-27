import Logo from "../../../assets/logo-white.png";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect , Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import Loader from "../../../pages/Loader";

const SideBar = () => {

    const [state, setState] = useState(false);
    const [pageContentDropDown,setPageContentDropDown] = useState(false)

    const dispatch = useDispatch()
    const { loading, user } = useSelector(
        (state) => state.user
    );

    const toggle = () => {
        setState(!state);
        console.log(state);
    };

    function logoutUser() {
        dispatch(logout());        
    }

    useEffect(() => {

    }, [loading]);

    return (
    <Fragment>
    {loading ? (
        <Loader />
    ) : (
        <Fragment>
            <div>
                {/* Desktop Side Bar */}

                <div
                    className={
                        "block lg:translate-x-0 bg-gradient-to-t from-gray-900 to-[#032725] text-white min-h-screen h-full z-50 relative" +
                        (state
                            ? "md:translate-x-0 sm:block sm:translate-x-0 lg:w-1/5 md:w-64 sm:w-64 lg:fixed md:fixed sm:fixed duration-300 h-full overflow-y-auto"
                            : "md:-translate-x-full sm:block sm:-translate-x-full lg:w-1/5 md:w-64 sm:w-64 lg:fixed md:fixed sm:fixed duration-300 h-full overflow-y-auto")
                    }
                >
                    <div className="w-5/6 mx-auto">
                        <div className="block pt-5 mb-20 w-full">
                            {/* Organization Logo */}

                            <div className="block w-fit float-left">
                                <NavLink to="/">
                                    <img src={Logo} alt="" className="h-16 w-auto" />
                                </NavLink>
                            </div>

                            {/* Sidebar Close Button */}

                            <div className="lg:hidden md:block sm:block  w-fit float-right">
                                <button onClick={() => toggle()}>
                                    <img src="https://img.icons8.com/ios/50/ffffff/close-window.png" alt="sidebar-close-icon" className="float-right" />
                                </button>
                            </div>
                        </div>

                        {/* Profile Photo */}

                        <div className="block w-fit mx-auto mb-3">
                            <img
                                src={user.avatar.url}
                                alt=""
                                className="h-28 w-28 rounded-full"
                            />
                        </div>

                        {/* User Name */}

                        <div className="">
                            <p className=" text-2xl text-center">{user.firstname}</p>
                        </div>


                        {/* Profile and My Account links */}

                        <div className=" w-full mx-auto py-5 border-b-2 border-white">

                            <div className="w-fit mx-auto">

                                {/* Profile Link */}

                                <Link to="/user/profile">

                                    <div className="inline-block align-middle mr-3 px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                        Profile
                                    </div>

                                </Link>

                                {/* Logout Button */}

                                <button onClick={logoutUser} className="inline-block align-middle px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                    Logout
                                </button>

                            </div>

                        </div>

                        {/* Navigation Menu */}

                        <div className="mt-10 w-52 mx-auto">
                            {/* Menu */}

                            <div className="">
                                <ul className="text-lg">

                                    <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/IPC-admin-portal">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/windows/40/ffffff/home-page.png"
                                                    alt="projects-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Home
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/IPC-admin-portal/notifications">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/fluency-systems-regular/40/ffffff/appointment-reminders--v1.png"
                                                    alt="activities-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Notifications
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/IPC-admin-portal/services">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/40/ffffff/external-lab-alternative-medicine-flatart-icons-outline-flatarticons.png"
                                                    alt="activities-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Services
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/IPC-admin-portal/orders">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/fluency-systems-regular/40/ffffff/shopping-basket-success.png"
                                                    alt="profile-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Orders
                                            </div>
                                        </NavLink>
                                    </li>
                                    
                                    {/* <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/clients">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/40/ffffff/external-contents-product-management-smashingstocks-mixed-smashing-stocks.png"
                                                    alt="clients-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Site Content
                                            </div>
                                        </NavLink>
                                    </li> */}

                                    <li className="w-full mb-5 border-b-2 border-transparent hover:border-white duration-100">
                                        <NavLink to="/IPC-admin-portal/members">
                                            <div className="pb-2">
                                                <img
                                                    src="https://img.icons8.com/windows/40/ffffff/groups.png"
                                                    alt="team-member-icon"
                                                    className="inline-block mr-4 w-fit mx-auto"
                                                />
                                                Members
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="w-full mb-5 ">
                                    
                                        <div className="pb-2 border-b-2 border-transparent hover:border-white duration-100">
                                            <img
                                                src="https://img.icons8.com/material/35/ffffff/cms.png"
                                                alt="team-member-icon"
                                                className="inline-block mr-4 w-fit mx-auto"
                                            />
                                               

                                            <button onClick={() => setPageContentDropDown (!pageContentDropDown)}  >

                                                <span >Page Contents</span>


                                            </button>

                                        </div>

                                        {/* Dropdown */}

                                        <div className={"overflow-hidden my-2 " + ( pageContentDropDown ? " h-full " : "h-0")}>
                                            <ul>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/home/edit"><h2>Home Page</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/about/who-we-are/edit"><h2>Who We Are</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/about/licensing/edit"><h2>Licensing & Accreditations</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/about/equipment/edit"><h2>Equipments</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/faq/edit"><h2>FAQ</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/legal/edit"><h2>Legal</h2></Link>
                                                </li>
                                                <li className="block pl-10 py-2 border-b-2 border-transparent hover:border-white duration-100">
                                                    <Link to="/IPC-admin-portal/service/hoverbox"><h2>Service Hoverbox</h2></Link>
                                                </li>
                                        

                                            </ul>
                                        </div>
                                        
                                    </li>

                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mobile Side Bar */}

                <div className="shadow-lg fixed lg:hidden bg-gradient-to-t from-gray-900 to-[#032725] top-0 left-0 right-0 z-40">
                    <div className="w-full px-5 flex justify-between">

                        {/* Company Logo */}

                        <div className="inline-block w-fit h-fit my-auto ">
                            <NavLink to="/">
                                <img src={Logo} alt="" className="h-[64px] w-auto my-3" />
                            </NavLink>
                        </div>

                        {/* Menu Button */}

                        <div className="inline-block w-fit h-fit my-auto mr-5 ">
                            <button onClick={() => toggle()} className={"h-fit my-auto " + (state ? "rotate-90 duration-300" : " -rotate-180 duration-300")}>
                                <img src="https://img.icons8.com/material-rounded/50/ffffff/menu--v1.png" alt="menu-button" className="h-[50px] w-auto my-3" />
                            </button>
                        </div>

                        

                    </div>
                </div>
            </div>
        </Fragment>
      )}
    </Fragment>
    );
};

export default SideBar;