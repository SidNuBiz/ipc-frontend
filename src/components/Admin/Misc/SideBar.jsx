import Logo from "../../../assets/logo-white.png";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {

    const [state, setState] = useState(false);

    const toggle = () => {
        setState(!state);

        console.log(state);
    };

    return (
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
                            <img src={Logo} alt="" className="h-16 w-auto" />
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
                            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                            alt=""
                            className="h-28 w-28 rounded-full"
                        />
                    </div>

                    {/* User Name */}

                    <div className="">
                        <p className=" text-2xl text-center">ADMIN</p>
                    </div>


                    {/* Profile and My Account links */}

                    <div className=" w-full mx-auto py-5 border-b-2 border-white">

                        <div className="w-fit mx-auto">

                            {/* Profile Link */}

                            <Link to="/admin/profile">

                                <div className="inline-block align-middle mr-3 px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                    Profile
                                </div>

                            </Link>

                            {/* Logout Button */}

                            <button className="inline-block align-middle px-5 py-2 text-[#18debb] border-2 border-[#18debb] hover:bg-[#18debb] hover:text-white duration-300 w-fit mx-auto rounded-xl">
                                Logout
                            </button>

                        </div>

                    </div>

                    {/* Navigation Menu */}

                    <div className="mt-10 w-52 mx-auto">
                        {/* Menu */}

                        <div className="border-white">
                            <ul className="text-lg">

                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/IPC-admin-portal">
                                        <img
                                            src="https://img.icons8.com/windows/40/ffffff/home-page.png"
                                            alt="projects-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Home
                                    </NavLink>
                                </li>

                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/">
                                        <img
                                            src="https://img.icons8.com/fluency-systems-regular/40/ffffff/appointment-reminders--v1.png"
                                            alt="activities-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Notifications
                                    </NavLink>
                                </li>

                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/IPC-admin-portal/services">
                                        <img
                                            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/40/ffffff/external-lab-alternative-medicine-flatart-icons-outline-flatarticons.png"
                                            alt="activities-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Services
                                    </NavLink>
                                </li>

                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/IPC-admin-portal/orders">
                                        <img
                                            src="https://img.icons8.com/fluency-systems-regular/40/ffffff/shopping-basket-success.png"
                                            alt="profile-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Orders
                                    </NavLink>
                                </li>
                                
                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/clients">
                                        <img
                                            src="https://img.icons8.com/external-smashingstocks-mixed-smashing-stocks/40/ffffff/external-contents-product-management-smashingstocks-mixed-smashing-stocks.png"
                                            alt="clients-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Site Content
                                    </NavLink>
                                </li>

                                <li className="w-full pb-2 mb-5 hover:border-b-2 duration-100">
                                    <NavLink to="/team-members">
                                        <img
                                            src="https://img.icons8.com/windows/40/ffffff/groups.png"
                                            alt="team-member-icon"
                                            className="inline-block mr-4 w-fit mx-auto"
                                        />
                                        Members
                                    </NavLink>
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
                        <img src={Logo} alt="" className="h-[64px] w-auto my-3" />
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
    );
};

export default SideBar;