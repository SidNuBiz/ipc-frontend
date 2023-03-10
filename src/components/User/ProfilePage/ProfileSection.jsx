import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateProfile,loadUser,addImage} from "../../../actions/userAction"
import {UPDATE_PROFILE_RESET} from "../../../constants/userConstatns"

const ProfileSection = ({user}) => {

    const dispatch = useDispatch()

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('')

    const [details,setDetails] = useState('');
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const [zip,setZip] = useState('')

    const { loading } = useSelector(
        (state) => state.user
    );

    const { isUpdated } = useSelector((state) => state.profile);

    const updateProfileSubmit = (e) => {

        e.preventDefault();
        dispatch(updateProfile({firstname,lastname,phone,email},false));

    };

    const updateProfileAddress = (e) => {

        e.preventDefault();
        dispatch(updateProfile({details,country,city,zip},true));

    };

    const addUserImage = (e) =>{
        dispatch(addImage(e.target.files[0]))
    }

    useEffect(()=>{
        if (user) {
            setFirstname(user.firstname);
            setLastname(user.lastname);
            setEmail(user.email);
            setPhone(user.phone);
            setDetails(user.address.details);
            setCity(user.address.city);
            setCountry(user.address.country);
            setZip(user.address.zip);
        }
        if (isUpdated) {
            dispatch(loadUser());
            dispatch({
              type: UPDATE_PROFILE_RESET,
            });
          }
    },[dispatch,loading])
  
    return (
        <div>
            {/* Profile */}

            <div>

                {/* Heading */}

                <div className="w-full mb-10">
                    <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Personal Information</h2>
                </div>

                {/* Form */}

                <form onSubmit={updateProfileSubmit} className="lg:w-2/3 md:w-5/6 sm:w-full mx-auto">
                    {/* Profile Photo */}

                    

                    <div className="w-fit mx-auto mb-10">
                        {/* <img src="https://img.icons8.com/material/200/397f77/user-male-circle--v1.png" alt="" className=" opacity-50" /> */}
                        <div className=" w-[200px] h-[200px] rounded-full mx-auto">

                            <img src={user.avatar.url} alt="" className=" h-full w-full rounded-full object-cover" />

                        </div>
    

                        {/* Upload Button */}

                        <div className="w-fit mx-auto">
                            {/* Custom Button */}

                            <button
                                onClick={() => {document.getElementById('profile-photo-upload').click()}}
                                type="button"
                                className="px-10 py-2 bg-[#397f77] text-white text-lg font-semibold rounded-lg my-5 hover:bg-[#18debb] duration-300"
                            >
                                Upload
                            </button>

                            <input type="file" id="profile-photo-upload" className="hidden" accept="image/*" onChange={addUserImage}/>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5">
                        {/* First Name Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="f-name" className="block text-lg text-gray-600 font-semibold mb-2">
                                First Name*
                            </label>

                            <input
                                type="text"
                                name="f-name"
                                id="f-name"
                                className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]"
                                required
                                value={firstname}
                                onChange={(e)=>setFirstname(e.target.value)}
                            />
                        </div>

                        {/* Last Name Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="l-name" className="block text-lg text-gray-600 font-semibold mb-2">
                                Last Name*
                            </label>

                            <input
                                type="text"
                                name="l-name"
                                id="l-name"
                                className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]"
                                required
                                value={lastname}
                                onChange={(e)=>setLastname(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Email & Phone */}

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5">
                        {/* Email Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="email" className="block text-lg text-gray-600 font-semibold mb-2">
                                Email*
                            </label>

                            <input
                                type="email"
                                name="email"
                                id="email"
                                className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]"
                                required
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                            
                            />
                        </div>

                        {/* Phone Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="phone" className="block text-lg text-gray-600 font-semibold mb-2">
                                Phone
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]"
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Birth Date */}

                    {/* <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">
                        <div>
                            <label htmlFor="birth-date" className="block text-lg text-gray-600 font-semibold mb-2">
                                Birth Date
                            </label>

                            <input
                                type="date"
                                name="birth-date"
                                id="birth-date"
                                className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]"
                            />
                        </div>
                    </div> */}

                    {/* Update Button */}

                    <div className="w-fit ml-auto my-10">

                        <button type="submit" className="px-10 py-2 bg-[#397f77] text-white text-lg font-semibold rounded-lg mb-5 hover:bg-[#18debb] duration-300">Update</button>

                    </div>
                </form>
            </div>

            {/* Billing Address */}

            <div className="my-10">

                {/* Heading */}

                <div className="w-full mb-20">
                    <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Billing Address</h2>
                </div>


                {/* Form */}

                <form onSubmit={updateProfileAddress} className="lg:w-2/3 md:w-5/6 sm:w-full mx-auto">

                    {/* Address Label & Input */}

                    <div className="mb-5">
                        <label htmlFor="address" className="block text-lg text-gray-600 font-semibold mb-2">Address</label>

                        <input type="text" name="address" id="address" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={details} onChange={(e)=>setDetails(e.target.value)} />
                    </div>

                    {/* Country Label & Input */}

                    <div className="mb-5">

                        <label htmlFor="country" className="block text-lg text-gray-600 font-semibold mb-2">Country</label>

                        <input type="text" name="country" id="country" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={country} onChange={(e)=>setCountry(e.target.value)}/>

                    </div>

                    {/* City & Zip Label & Input */}

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                        {/* City Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="city" className="block text-lg text-gray-600 font-semibold mb-2">City</label>

                            <input type="text" name="city" id="city" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={city} onChange={(e)=>setCity(e.target.value)} />
                        </div>

                        {/* Zip Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="zip" className="block text-lg text-gray-600 font-semibold mb-2">Zip</label>

                            <input type="text" name="zip" id="zip" className=" bg-transparent w-full px-3 py-2 border-[1px] border-gray-300 focus:outline-none focus:border-[#397f77]" value={zip} onChange={(e)=>setZip(e.target.value)} />
                        </div>

                    </div>

                    {/* Update Button */}

                    <div className="w-fit ml-auto my-10">

                        <button type="submit" className="px-10 py-2 bg-[#397f77] text-white text-lg font-semibold rounded-lg mb-5 hover:bg-[#18debb] duration-300">Update</button>
                        
                    </div>

                </form>

            </div>
        </div>
    );
};

export default ProfileSection;
