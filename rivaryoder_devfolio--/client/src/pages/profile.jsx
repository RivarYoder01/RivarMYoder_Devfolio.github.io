import { useSelector } from "react-redux";
import React from "react";
import Python_admin from "../components/Python_admin.jsx";

const Profile = () => {

    const user = useSelector((state) => state.auth?.user ?? false)
    return (
        <div className="pt-40">
            <h3 className="pb-6 text-2xl text-center text-white"> Welcome to the Admin Side... We have cookies </h3>
            {user ? <h4 className="text-xl text-center text-white"> Hello again, {user} </h4> : null}
            <Python_admin />
        </div>
    )
}
export default Profile
