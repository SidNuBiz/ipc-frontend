import React from 'react'
import AdminMemberList from './AdminMemberList.jsx'
import {getAllUsers} from "../../../actions/userAction"
import Loader from "../../../pages/Loader";
import {useDispatch,useSelector} from "react-redux"
import {useEffect,Fragment,useState} from "react"


const AdminMembersPageSection = () => {

    const dispatch = useDispatch()

    const[searchKey,setSearchKey] = useState('')
    const [page, setPage] = useState(1);

    const {loading, totalUser } = useSelector(
      (state) => state.allUsers
    );

    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
          search();
      }
    };

    function search(){
      dispatch(getAllUsers(page,searchKey))
    }

    function setNextPage(){
      if(page*20 < totalUser){
        setPage(page+1)
      }
    }
    
    function setPrevPage(){
      if(page>1){
        setPage(page-1) 
      }
    }

    useEffect(()=>{
        dispatch(getAllUsers(page))
    },[dispatch,page])


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

                        <input type="text" placeholder="Search Members" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)}  onKeyDown={handleKeyDown}/>
                        <button
                            className="text-[#397f77] text-md font-bold px-5 hover:underline rounded-full bg-[#397f77] text-white"
                            onClick={search}
                        >
                            Search
                        </button>
                    </div>

                </div>

                {/* Members */}

                <div className="">

                    <AdminMemberList searchKey = {searchKey}/>

                    <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline" onClick={setNextPage}>Next</button>
                    <h1>{page}</h1>
                    <button className=" text-[#397f77]  text-md font-bold px-5 hover:underline" onClick={setPrevPage}>Prev</button>

                </div>

            </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default AdminMembersPageSection