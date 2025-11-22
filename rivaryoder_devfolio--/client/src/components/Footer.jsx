import React from "react";

export default function Footer() {
    return (
        <footer className="bg-emerald-600 top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-yellow-300    flex flex-wrap items-center text-base justify-center">
                    <a href="#" className="mr-5 text-white hover:text-yellow-300">
                        Home
                    </a>
                    <a href="/signin" className="mr-5 text-white hover:text-yellow-300">
                        Admin
                    </a>
                    <p></p>
                </nav>
            </div>
        </footer>
    );
}