import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AdminAnalysisList from "./AdminAnalysisList"
import { useSelector, useDispatch } from "react-redux";
import { getAnalyses } from "../../../actions/analysisAction";
import Loader from "../../../pages/Loader";
import { useAlert } from "react-alert";


const AdminAnalysesSection = () => {
  const dispatch = useDispatch()
  const alert = useAlert()  

  const[searchKey,setSearchKey] = useState('')

  const {loading} = useSelector(
    (state) => state.analyses
  );

  const {error,success,loading:newAnalysisLoading} = useSelector(
    (state) => state.newAnalysis
  );

  const {loading:updateAnalysisLoading} = useSelector(
    (state) => state.analysis
  )

  useEffect(()=>{
    dispatch(getAnalyses())
    if(success){
      alert.success("Analysis created successfully")
      dispatch({type:'NEW_ANALYSIS_RESET'})
    }
    if(error){
      alert.error(error)
      dispatch({type:'CLEAR_ERRORS'})
    }
  },[dispatch,newAnalysisLoading])


  return (

    <Fragment>{loading || newAnalysisLoading || updateAnalysisLoading? <Loader /> : 
        <Fragment>
          <div>

            {/* Heading */}

            <div className="mb-10 pb-5 border-b-[1px] border-b-slate-300">
                <h2 className=" text-4xl font-semibold text-gray-600">Tests</h2>
            </div>

            {/* search & create analysis */}

            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 lg:gap-10 md:gap-10 sm:gap-5 mb-20">

              {/* Search Box */}

              <div className="col-span-3 sm:order-2">

                <input type="text" placeholder="Search Tests" className="bg-white shadow-lg rounded-2xl p-3 w-full focus:outline-none" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} />

              </div>

              {/* Create analysis Button */}

              <div className="lg:col-span-1 md:col-span-1 sm:col-span-3 ">

                <Link to="/IPC-admin-portal/analyses/create">

                  <button className="bg-[#397f77] hover:bg-[#18debb] text-white shadow-lg rounded-2xl p-3 w-full duration-300">Create Test</button>

                </Link>

              </div>

            </div>

            {/* Analyses */}

            <div className="">
              <AdminAnalysisList  searchKey = {searchKey} />
            </div>
          </div>

        </Fragment> 
    }</Fragment>
  )

}

export default AdminAnalysesSection