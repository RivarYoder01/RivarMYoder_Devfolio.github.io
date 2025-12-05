import { useSelector } from "react-redux";
import React from "react";
import Python_admin from "../components/Python_admin.jsx";
import Python_delete from "../components/Python_delete.jsx";
import Webdev_admin from "../components/Webdev_admin.jsx";
import Webdev_delete from "../components/Webdev_delete.jsx";
import Python_projects from "../components/Python_projects.jsx";
import About from "../components/About.jsx";
import Webdev_projects from "../components/Webdev_projects.jsx";
import User_admin from "../components/User_admin.jsx";

const Profile = () => {

    const user = useSelector((state) => state.auth?.user ?? false)
    return (
        <div className="pt-30">
            <h3 className="pb-6 text-2xl text-center text-white"> Welcome to the Admin Side... We have cookies </h3>
            {user ? <h4 className="text-xl text-center text-white"> Hello again, {user} </h4> : null}
            <div className= "grid grid-cols-3">
                <Python_admin />
                <Webdev_admin />
                <User_admin />
                <Python_delete />
                <Webdev_delete />
            </div>
            <h3 className="pb-6 pt-10 text-2xl text-center text-white"> Live Preview </h3>
            <About />
            <Webdev_projects />
            <Python_projects />
        </div>
    )
}
export default Profile
