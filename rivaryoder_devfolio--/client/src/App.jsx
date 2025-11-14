import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Webdev_projects from "./components/Webdev_projects";
import Python_projects from "./components/Python_projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return (
        <main className={"text-gray-400 bg-gray-900 body-font"}>
            <Navbar />
            <About />
            <Webdev_projects />
            <Python_projects />
            <Contact />
            <Footer />
        </main>
    );
}