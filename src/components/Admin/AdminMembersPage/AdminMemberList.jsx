import React from "react";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { updateStatus } from "../../../actions/userAction";
import axios from "axios";

const AdminMemberList = ({ searchKey }) => {

    const dispatch = useDispatch()

    const { users } = useSelector(
        (state) => state.allUsers
    );

    var [showModal, setShowModal] = useState(false);
    const [userStatus,setUserStatus] = useState("")

    var [thisMember, setThisMember] = useState({

        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        status: "",
        avatar:{
            url:""
        },
        address: {

            details: "",
            city: "",
            country: "",
            zip: "",

        }
    });

    const changeUserStatus = (e) =>{
        setUserStatus(e.target.value)
        dispatch(updateStatus(e.target.value,thisMember._id))
        
    }

    const options = [
        {
          label: "Inactive",
          value: "inactive",
        },
        {
          label: "Active",
          value: "active",
        },
       
      ];

    return (
        <div className="h-full">
            <div className="">
                <ul className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10">
                    {users && users.filter( member => member.firstname.toLowerCase().includes(searchKey.toLowerCase()) || member.lastname.toLowerCase().includes(searchKey.toLowerCase())).map((member, index) => (
                        <li key={index} onClick={() => {setThisMember(member); setShowModal(true); setUserStatus(member.status)}} className="bg-[#397f77] rounded-xl shadow-lg hover:scale-110 duration-300">
                            <div className="p-5 text-center text-white" >

                                {/* Member Image */}

                                <div className="w-fit mx-auto mb-3">
                                    <img src={member.avatar.url} alt="" className="h-24 w-24 rounded-full object-cover" />
                                </div>

                                {/* Member Name */}

                                <div>
                                    <p className=" font-semibold mb-2 " >{`${member.firstname} ${member.lastname}`}</p>
                                </div>

                                {/* Member Email */}

                                <div>
                                    <p>{member.email}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Member details Modal */}

            <div className={"absolute bg-black bg-opacity-50 h-full w-full bottom-0 top-0 left-0 right-0 overflow-y-auto " + (showModal ? "" : "hidden")}>

                <div className="bg-[#397f77] pb-10 pt-5 rounded-xl mx-5 mb-20 mt-32 ">
                    
                    {/* Close Button */}

                    <div className=" w-fit ml-auto mr-5">
                        <button onClick={() => setShowModal(false)} className="text-white text-3xl font-semibold py-2 pxmember-transparent border-2 hover:border-white duration-300 ">X</button>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10 mx-5 ">
                        {/* Member Image */}

                        {/* <div className="lg:col-span-1 w-fit mx-auto h-fit my-auto">
                            <img src={thisMember.avatar.url} alt="" className="h-52 w-52 mx-auto rounded-full object-cover" />
                        </div> */}

                        <div className=" lg:col-span-2 md:col-span-1 sm:col-span-1 ">
                            {/* Heading */}

                            <h2 className="text-white text-xl font-semibold mb-5 border-b-[2px] border-b-slate-100 pb-2">Basic Info</h2>

                            <select value={userStatus} onChange={(e)=>changeUserStatus(e)}>
                                {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                                ))}
                            </select>

                            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 text-lg">
                                {/* First Name */}

                                <div className="col-span-1">
                                    {/* Heading */}

                                    <h2 className="text-white font-semibold mb-2">First Name</h2>

                                    {/* Name */}

                                    <p className="text-white">{thisMember.firstname}</p>
                                </div>

                                {/* Last Name */}

                                <div className="col-span-1">
                                    {/* Heading */}

                                    <h2 className="text-white font-semibold mb-2">Last Name</h2>

                                    {/* Name */}

                                    <p className="text-white">{thisMember.lastname}</p>
                                </div>

                                {/* Email */}

                                <div className="col-span-1">
                                    {/* Heading */}

                                    <h2 className="text-white font-semibold mb-2">Email</h2>

                                    {/* Email */}

                                    <p className="text-white">{thisMember.email}</p>
                                </div>

                                {/* Phone */}

                                <div className="col-span-1">
                                    {/* Heading */}

                                    <h2 className="text-white font-semibold mb-2">Phone</h2>

                                    {/* Email */}

                                    <p className="text-white">{thisMember.phone == ""? "Not Provided" : thisMember.phone }</p>
                                </div>
                            </div>

                            {/* Address Info */}

                            <div className="mt-10">
                                {/* Heading */}

                                <h2 className="text-white text-xl font-semibold mb-5 border-b-[2px] border-b-slate-100 pb-2">Address Info</h2>

                                {/* Address */}

                                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 text-lg">
                                    {/* Address */}

                                    <div className="col-span-1">
                                        {/* Heading */}

                                        <h2 className="text-white font-semibold mb-2">Address</h2>

                                        {/* Address */}

                                        <p className="text-white">{thisMember.address.details == ""? "Not Provided" : thisMember.address.details}</p>
                                    </div>

                                    {/* Country */}

                                    <div className="col-span-1">
                                        {/* Heading */}

                                        <h2 className="text-white font-semibold mb-2">Country</h2>

                                        {/* Country */}

                                        <p className="text-white">{thisMember.address.country == ""? "Not Provided" : thisMember.address.details}</p>
                                    </div>

                                    {/* City */}

                                    <div className="col-span-1">
                                        {/* Heading */}

                                        <h2 className="text-white font-semibold mb-2">City</h2>

                                        {/* Address */}

                                        <p className="text-white">{thisMember.address.city == ""? "Not Provided" : thisMember.address.city}</p>
                                    </div>

                                    {/* Zip */}

                                    <div className="col-span-1">
                                        {/* Heading */}

                                        <h2 className="text-white font-semibold mb-2">Zip</h2>

                                        {/* Country */}

                                        <p className="text-white">{thisMember.address.zip == ""? "Not Provided" : thisMember.address.zip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMemberList;
