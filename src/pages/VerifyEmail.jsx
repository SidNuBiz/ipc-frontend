import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import { useAlert } from "react-alert";
import { register } from "../actions/userAction";
import { clearErrors } from "../actions/userAction";
import Loader from "./Loader";

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const alert = useAlert()

    const { error, loading, isAuthenticated } = useSelector(
        (state) => state.user
    );

    const { token } = useParams()

    const verifyUser = () => {
        dispatch(register(token))  
    }

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
      
        if (isAuthenticated) {
            navigate(`/`);
        }
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, [dispatch, error, navigate, isAuthenticated]);

    return (
        <Fragment>
        {loading ? (
            <Loader />
        ) : (
            <Fragment>
                <div className="flex items-center justify-center h-screen">
                    <div className="bg-white shadow-lg p-6 rounded-md w-full sm:w-96">
                        <form className="text-center" onSubmit={verifyUser}>
                        <h1 className="mb-6 text-2xl font-bold">Verify Email</h1>
                        <button
                            id="verify_button"
                            type="submit"
                            className="bg-blue-500 text-white rounded-md py-3 px-6 w-full focus:outline-none hover:bg-blue-700"
                            disabled={loading ? true : false}
                        >
                            Verify Email
                        </button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )}
    </Fragment>
    );
}

export default VerifyEmail;