import React from 'react'
import NavBar from "../../components/Misc/NavBar";
import Footer from "../../components/Misc/Footer";
import { useEffect,Fragment } from "react";
import {useSelector,useDispatch} from "react-redux"
import TestingSubmissionFormPageSection from '../../components/Store/TestingSubmissionFormPage/TestingSubmissionFormPageSection';
import Loader from "../Loader"
import {clearErrors} from "../../actions/limsAction"
import { useAlert } from "react-alert";
const TestingSubmissionFormPage = () => {

    const alert = useAlert()
    const dispatch = useDispatch()
    
    const {error,message,loading} = useSelector((state)=>state.sampleSubmit)

    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors)
        }
        if(message){
            alert.success(message)
            dispatch({ type:'SAMPLE_SUBMIT_SUCCESS', payload: null });
        
        }
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [dispatch,error,message]);

    return (
        <Fragment>{loading ? <Loader /> : 
            <Fragment>
                <div className="bg-gradient-to-b from-white via-[#eaf8f5] to-white min-h-screen">

                    {/* NavBar */}

                    <div>
                        <NavBar />
                    </div>

                    {/* Page Section */}

                    <div className="animate-crossfade lg:w-2/3 md:w-5/6 sm:w-5/6 mx-auto pt-40">
                        <TestingSubmissionFormPageSection />
                    </div>


                    {/* Footer */}

                    <div>
                        <Footer />
                    </div>

                </div>
            </Fragment> 
        }</Fragment>

    );
}

export default TestingSubmissionFormPage