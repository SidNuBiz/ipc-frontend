import React from 'react'
import { Fragment,useEffect } from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AdminAnalysisEditSection from '../../../components/Admin/AdminAnalysisPage/AdminAnalysisEditSection'
import SideBar from '../../../components/Admin/Misc/SideBar'
import Loader from "../../../pages/Loader";

const AdminAnalysisEditPage = () => {

  const analysisId = useParams().id;

  const {analyses,loading} = useSelector(
    (state) => state.analyses
  );

  useEffect(() => {

    
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);

  return (

    <Fragment>{loading ? (
       <Loader />
     ) : (
      <Fragment>
        <div>

            <div className="lg:grid lg:grid-cols-5">

              <div className=" col-span-1 z-50 relative">

                <SideBar />

              </div>

              <div className="col-span-4 md:px-5 sm:px-5 z-30 relative lg:pt-10 md:pt-32 sm:pt-32 animate-crossfade bg-gradient-to-br from-[#eaf8f5] to-transparent min-h-screen pb-20 overflow-y-clip">

              <AdminAnalysisEditSection thisAnalysis = {analyses.filter((analysis) => analysis._id == analysisId)[0]}/>
            

              </div>

            </div>

        </div>
      </Fragment> 
     )}
    </Fragment>
  )
}

export default AdminAnalysisEditPage