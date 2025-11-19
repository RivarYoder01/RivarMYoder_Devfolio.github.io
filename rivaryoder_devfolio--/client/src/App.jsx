import React from "react";
import axios from 'axios';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Webdev_projects from "./components/Webdev_projects";
import Python_projects from "./components/Python_projects";
import Contact from "./components/Contact";
 import Footer from "./components/Footer";

const apiCall = () => {
    axios.get('http://localhost:8080').then((data) => {
//this console.log will be in our frontend console
        console.log(data)
    })
}

export default function App() {
    return (
        <main className={"text-gray-400 bg-black body-font"}>
            {/*<button onClick={apiCall}>Make API Call</button>*/}
            {/*<Navbar />*/}
            <About />
            <Webdev_projects />
            <Python_projects />
            <Contact/>
            <Footer />
        </main>
    );
}