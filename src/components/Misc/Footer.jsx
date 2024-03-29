import { Link } from "react-router-dom";
import Logo from '../../assets/header-logo.png';


const Footer = () => {

    return (

        <footer>

            <div className="pt-32 pb-10">

                <div className="grid lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-2 gap-20 w-fit mx-auto border-b-2 border-b-gray-200 pb-20">

                    {/* Block 1 */}


                    <div className=" col-span-2 ">
                        <img src={Logo}alt="" className=" w-44" />
                    </div>


                    {/* Block 2 */}

                    <div className=" col-span-2 text-gray-600 lg:w-fit lg:mx-auto">

                        {/* Heading */}

                        <h2 className="block text-2xl font-semibold mb-7">Contact</h2>

                        {/* Phone */}

                        <h2 className="block mb-3 text-xl">Phone: (778) 484-5483</h2>

                        {/* Phone */}

                        <h2 className="block mb-5 text-xl">Email: info@invp-lab.com</h2>

                        {/* Social */}

                        <button className=" bg-[#00acee] px-3 pb-1 rounded-full hover:bg-[#168ab8] duration-300 w-fit mx-auto">

                            <a  href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fjocelynlee8.wixsite.com%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5Einvp_lab&screen_name=invp_lab" target="_blank" rel="noreferrer">

                                <span className=" inline-block align-middle mr-2">
                                    <img src="https://img.icons8.com/ios-filled/20/ffffff/twitter.png" alt=""/>
                                </span>

                                <span className=" inline-block align-middle text-white">Follow</span>
                            </a>

                        </button>
                        
                    </div>


                    {/* Block 3 */}

                    <div className=" col-span-2 text-gray-600 lg:w-fit lg:mx-auto">

                        <h2 className="block text-2xl font-semibold mb-7">The Lab</h2>

                        <ul>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">About</Link>
                            </li>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">Services</Link>
                            </li>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">Licensing</Link>
                            </li>

                        </ul>

                    </div>


                    {/* Block 4 */}


                    <div className=" col-span-2 text-gray-600 lg:w-fit lg:mx-auto">

                        <h2 className="block text-2xl font-semibold mb-7">Information</h2>

                        <ul>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">FAQs</Link>
                            </li>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">Career</Link>
                            </li>

                            <li className="block text-xl hover:underline mb-3">
                                <Link to="/">Legal</Link>
                            </li>

                        </ul>

                    </div>

                </div>

                {/* Copyright Block */}


                <div>
                    <h2 className=" text-gray-400 w-fit mx-auto mt-3">©2022 by Innovate Phytoceuticals.</h2>
                </div>

            </div>

        </footer>

    );

}

export default Footer;