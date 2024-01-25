import GrayLogo from "../../../assets/logo-gray.png";


const MeetTheTeamSection = ({teamMembers}) => {


    return (

        <div className="mt-24">

            {/* Heading */}

            <div className="mb-20 w-fit mx-auto">
                <img src={GrayLogo} alt=""  className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20"/>
                <h2 data-aos="fade-in" className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10">Meet The Team</h2>

                {/* Underline */}

                <div className="block h-1 w-10 mx-auto mt-5">

                    <div className="bg-gray-600 h-1 w-10 lg:ml-[15px] md:ml-[15px] sm:ml-[5px] mt-5"></div>

                </div>
            </div>

            {/* Team Member Hover Boxes */}

            <div className="lg:w-1/2 md:w-5/6 sm:w-5/6 mx-auto ">

                {
                    teamMembers.map((member, index) => (

                        <div key={index} className="group block relative lg:flex lg:w-5/6 mx-auto text-gray-600 text-lg lg:hover:scale-110 lg:hover:text-white duration-300 min-h-[500px] min-w-full mb-20 overflow-hidden lg:rounded-2xl lg:shadow-2xl">

                            {/* Background Image */}

                            {/* <div className="lg:absolute lg:bottom-14"> */}
                            <img src={member.img} alt="" className="border-solid border-4 border-[#53b2a7] rounded-full z-10 lg:mt-6 lg:absolute lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto md:m-auto  md:block sm:block object-cover object-fit "/>
                            {/* </div> */}

                            

                            {/* Content */}

                            <div className="animate-crossfade  lg:top-0 lg:bottom-0 z-30 lg:max-w-2/3 lg:p-10 lg:my-0 md:my-10 sm:my-10 lg:group-hover:hidden duration-300 ">

                                {/* Member Name */}

                                

                                {/* Member Designation */}

                                <div className=" lg:absolute lg:bottom-8 lg:text-3xl font-bold">

                                    <h2 className=" text-2xl font-semibold  lg:italic">{member.name}</h2>

                                    {
                                        member.designations.map((item, index) => (

                                            <p key={index} className="mb-3">{item.designation}</p>

                                        ))
                                    }

                                </div>

                                

                            </div>


                            {/* Hover Box Bullet Points */}

                            <div className="animate-crossfade lg:bg-black lg:bg-opacity-60 z-20 lg:p-10 lg:max-w-full lg:hidden lg:group-hover:block duration-300 h-auto lg:text-[14px]">

                                <p>{member.about}</p>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>

    );

}


export default MeetTheTeamSection;