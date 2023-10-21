import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateProfile,loadUser,addImage,clearErrors} from "../../../actions/userAction"
import {UPDATE_PROFILE_RESET} from "../../../constants/userConstatns"
import {useAlert} from "react-alert"
import Select from 'react-select'
import { Country, State, City }  from 'country-state-city';

const ProfileSection = ({user}) => {
    
    
    const selectCustomStyles = {

        control: (provided, state) => ({

            ...provided,

            backgroundColor: 'white',

            outline: 'none',

            outlineOffset: state.isFocused ? 'none' : 'none',

            border: 0,

            boxShadow: 'none',

            borderRadius: '6px',

            innerWidth: '100%',

        }),

    }

    const dispatch = useDispatch()
    const alert = useAlert()

    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const [details,setDetails] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');
    const [zip,setZip] = useState('');

    const [countries,setCountries] = useState(Country.getAllCountries())
    const [states,setStates] = useState([])
    const [cities,setCitites] = useState([])
    const filterStateCity = (isCountry,country,state=null)=> {
        
        if(isCountry){
            setStates(State.getStatesOfCountry(countries.filter((c)=>c.name === country)[0].isoCode))
        }else{
            setCitites(City.getCitiesOfState(countries.filter((c)=>c.name === country.value)[0].isoCode,states.filter((c)=>c.name === state)[0].isoCode))
        }
    }
  
    const { loading } = useSelector(
        (state) => state.user
    );

    const { isUpdated,error, } = useSelector((state) => state.profile);

    const updateProfileSubmit = (e) => {

        e.preventDefault();
        dispatch(updateProfile({firstname,lastname,phone,email},false));

    };

    const updateProfileAddress = (e) => {

        e.preventDefault();
        dispatch(updateProfile({details,country:country.value,city:city.value,state:state.value,zip},true));

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
            setCity({label:user.address.city,value:user.address.city});
            setCountry({label:user.address.country,value:user.address.country});
            setState({label:user.address.state,value:user.address.state})
            setZip(user.address.zip);
        }
        if (isUpdated) {
            dispatch(loadUser());
            dispatch({
              type: UPDATE_PROFILE_RESET,
            });
            alert.success("Profile updated successfully")
        }
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
    },[dispatch,loading,isUpdated,error])
  
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
            {user.role === 'admin' && 
            <div className="my-10">

                {/* Heading */}

                <div className="w-full mb-20">
                    <h2 className="w-full border-b-2 border-b-gray-200 text-2xl text-gray-600 font-semibold pb-3">Billing Address</h2>
                </div>


                {/* Form */}

                <form onSubmit={updateProfileAddress} className="lg:w-2/3 md:w-5/6 sm:w-full mx-auto">

                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                        {/* Country Label & Input */}

                        <div className="mb-5">
                            <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>Country<span className='text-red-500'>*</span></label>
                            <Select options={countries.map(country => {return {label:country.name,value:country.name}})} onChange={(e)=>{setCountry(e); filterStateCity(true,e.value)}} value={country}  className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />   
                        </div>


                        {/* State Label & Input */}

                        <div className="mb-5">
                        <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>State<span className='text-red-500'>*</span></label>
                            <Select options={states.map(state => {return {label:state.name,value:state.name}})} onChange={(e)=>{setState(e); filterStateCity(false,country,e.value)}} value={state}  className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />   
                        </div>

                    </div>
                    
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5">

                        {/* City Label & Input */}

                        <div className="mb-5">
                            <label htmlFor='testType' className='block mb-2 text-sm font-semibold'>City<span className='text-red-500'>*</span></label>
                            <Select options={cities.map(city => {return {label:city.name,value:city.name}})} onChange={(e)=>setCity(e)} value={city}  className=" rounded-md border border-gray-300 text-gray-600 w-full" styles={selectCustomStyles}  classNamePrefix />   
                        </div>

                        {/* Zip Label & Input */}

                        <div className="mb-5">
                            <label htmlFor="address" className='block mb-2 text-sm font-semibold'>Zip<span className='text-red-500'>*</span></label>

                            <input type="text" name="address" id="address" style={{backgroundColor: 'white',outline: 'none',border: '1px solid #cccccc',boxShadow: 'none',borderRadius: '6px',height:'40px',paddingLeft:'10px',paddingRight:'10px', width: '100%',}} value={zip} onChange={(e)=>setZip(e.target.value)} />
                        </div>

                    </div>

                    {/* Address Label & Input */}

                    <div className="mb-5">
                        <label htmlFor="address" className='block mb-2 text-sm font-semibold'>Address<span className='text-red-500'>*</span></label>

                        <input type="text" name="address" id="address" style={{backgroundColor: 'white',outline: 'none',border: '1px solid #cccccc',boxShadow: 'none',borderRadius: '6px',height:'40px',paddingLeft:'10px',paddingRight:'10px', width: '100%',}} value={details} onChange={(e)=>setDetails(e.target.value)} />
                    </div>

                    {/* Update Button */}

                    <div className="w-fit ml-auto my-10">

                        <button type="submit" className="px-10 py-2 bg-[#397f77] text-white text-lg font-semibold rounded-lg mb-5 hover:bg-[#18debb] duration-300">Update</button>
                        
                    </div>

                </form>

            </div>
            }
            
        </div>
    );
};

export default ProfileSection;
