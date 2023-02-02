import React from 'react'
import { members } from '../../../data/siteContent.js'
import AdminMemberList from './AdminMemberList.jsx'

const AdminMembersPageSection = () => {
  return (
    <div>

        {/* Heading */}

        <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
            <h2 className=" text-4xl font-semibold text-gray-600">Members</h2>
        </div>

        {/* search */}

        <div className=" mb-10">

            {/* Search Box */}

            <div className="">

                <input type="text" placeholder="Search Members" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" />

            </div>

        </div>

        {/* Members */}

        <div className="">

            <AdminMemberList members = {members} />

        </div>

    </div>
  )
}

export default AdminMembersPageSection