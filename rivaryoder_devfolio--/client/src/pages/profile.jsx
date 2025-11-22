import { useSelector } from "react-redux";
// import PythonInsert from "../components/Python_insert.jsx";
import React from "react";

const Profile = () => {

    const user = useSelector((state) => state.auth?.user ?? false)
    return (
        <div className="pt-40">
            <h3 className="pb-6 text-2xl text-center text-white"> Welcome to the Admin Side... We have cookies </h3>
            {user ? <h4 className="text-xl text-center text-white"> Hello again, {user} </h4> : null}
            {/*<PythonInsert />*/}
        </div>
    )
}
export default Profile
