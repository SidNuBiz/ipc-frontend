import React from 'react'
import { members } from '../../../data/siteContent.js'
import AdminMemberList from './AdminMemberList.jsx'
import {getAllUsers} from "../../../actions/userAction"
import Loader from "../../../pages/Loader";
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment,useState} from "react"


const AdminMembersPageSection = () => {

    const dispatch = useDispatch()

    const[searchKey,setSearchKey] = useState('')
  
    const {loading } = useSelector(
        (state) => state.allUsers
    );

    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])


  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
        <Fragment>
            <div>

                {/* Heading */}

                <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
                    <h2 className=" text-4xl font-semibold text-gray-600">Members</h2>
                </div>

                {/* search */}

                <div className=" mb-10">

                    {/* Search Box */}

                    <div className="">

                        <input type="text" placeholder="Search Members" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}/>

                    </div>

                </div>

                {/* Members */}

                <div className="">

                    <AdminMemberList searchKey = {searchKey}/>

                </div>

            </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default AdminMembersPageSection