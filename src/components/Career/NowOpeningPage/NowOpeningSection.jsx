import GrayLogo from "../../../assets/logo-gray.png";



const NowOpeningSection = ({nowOpening}) => {

    return (

        <div className="bg-stone-100 pt-40">

            {/* Heading */}

            <div data-aos="fade-in" className=" text-center lg:-ml-10 md:-ml-10 sm:-ml-0">
                <img src={GrayLogo} alt="" className="inline-block align-top mb-5 opacity-50 -ml-10 lg:w-32 md:w-32 sm:w-20" />
                <h2
                    data-aos="fade-in"
                    className="inline-block align-bottom mb-5 text-gray-600 lg:text-7xl md:text-7xl sm:text-4xl text-center font-semibold -ml-10"
                >
                    Careers
                </h2>
            </div>

            {/* Sub Heading */}

            <div className="mb-10">
                <h2 className="text-center text-[#397f77] font-semibold lg:text-2xl md:text-2xl sm:text-xl">We’re Hiring!</h2>
            </div>

            {/* Info */}

            <div className="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-center text-xl mb-20">{nowOpening.info}</div>


            {/* Jobs */}

            <div className="lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto text-center">

                {
                    nowOpening.jobs.map((job, index) => (

                        <div key={index} className="my-10">

                            {/* Image */}

                            <div className="w-full ">
                                <img src={job.img} alt="" className="w-full h-[500px] object-cover" />
                            </div>

                            {/* Details */}

                            <div className="py-10 ">

                                {/* Title */}

                                <div className="mb-3">
                                    <h2 className="text-[#397f77] text-3xl font-semibold">{job.title}</h2>
                                </div>

                                {/* Type */}

                                <div className="mb-5">
                                    <h2 className=" text-gray-600 text-2xl font-semibold">{job.type}</h2>
                                </div>

                                {/* Details */}

                                <div className="mb-10">
                                    <p className=" text-xl">{job.details}</p>
                                </div>

                                {/* Learn More Button */}

                                <div>
                                    <button className=' bg-[#397f77] text-white text-xl px-10 py-2 hover:bg-[#18debb] duration-300'>Learn More</button>
                                </div>
                            </div>

                        </div>

                    ))
                }

            </div>

            {/* Application Form */}

            <div className="bg-[#397f77]">

                <div className="lg:grid lg:grid-cols-2 gap-10">

                    {/* Application */}

                    <div className="text-white py-20 h-fit my-auto">

                        {/* Title */}

                        <div className="mb-5">
                            <h2 className=" text-6xl font-semibold text-center">{nowOpening.formTitle}</h2>
                        </div>

                        {/* Sub Title */}

                        <div className="mb-5">
                            <h2 className="font-semibold text-center text-lg">{nowOpening.formSubTitle}</h2>
                        </div>

                        {/* Paragraph */}

                        <div className="lg:w-5/6 md:w-2/3 sm:w-5/6 mx-auto">
                            <p className=" text-center text-lg">{nowOpening.formParagraph}</p>
                        </div>

                        {/* Form */}

                        <div className="lg:w-5/6 md:w-2/3 sm:w-5/6 mx-auto mt-10">

                            <form action="">

                                {/* Names */}

                                <div className="grid grid-cols-2 gap-5 mb-5">

                                    {/* First Name */}

                                    <div>
                                        <input type="text" className=" bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" placeholder="First Name" />
                                    </div>

                                    {/* Last Name */}

                                    <div>
                                        <input type="text" className=" bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" placeholder="Last Name" />
                                    </div>

                                </div>

                                {/* Email & Phone */}

                                <div className="grid grid-cols-2 gap-5 mb-5">

                                    {/* Email */}

                                    <div>
                                        <input type="email" className=" bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" placeholder="Email" />
                                    </div>

                                    {/* Phone */}

                                    <div>
                                        <input type="tel" className=" bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" placeholder="Phone" />
                                    </div>

                                </div>

                                {/* Position and Apply Date */}

                                <div className="grid grid-cols-2 gap-5 mb-5">

                                    {/* Position Select */}

                                    <div>
                                        <select name="" id="" className=" bg-transparent w-full px-3 py-4 border-2 border-white focus:outline-none placeholder:text-white" defaultValue="Position I'm Applying" >

                                            <option value="Position I'm Applying"  defaultChecked disabled >Position I'm Applying</option>

                                            {
                                                nowOpening.jobs.map((job, index) => (

                                                    <option key={index} value={job.title} className=" text-gray-600">{job.title}</option>

                                                ))
                                            }

                                        </select>
                                    </div>

                                    {/* Date Select */}

                                    <div>
                                        <input type="date" min={new Date().toISOString().split('T')[0]} className=" light-calender-picker bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" />
                                    </div>

                                </div>

                                {/* Resume Link */}

                                <div>
                                    <input type="text" className=" bg-transparent w-full px-3 py-3 border-2 border-white focus:outline-none placeholder:text-white" placeholder="Link to Your Resume" />
                                </div>

                                {/* Submit Button */}

                                <div className="mt-10 w-fit mx-auto">
                                    <button type="submit" className="px-10 py-3 bg-white text-gray-600 text-xl font-semibold hover:text-[#18debb] duration-300">Apply Now</button>
                                </div>

                            </form>

                        </div>

                    </div>

                    {/* Form Image */}

                    <div>
                        <img src={nowOpening.formImg} alt="" className="lg:max-h-full md:max-h-[500px] sm:max-h-[500px] w-full object-cover" />
                    </div>

                </div>

            </div>

        </div>

    );

}


export default NowOpeningSection;