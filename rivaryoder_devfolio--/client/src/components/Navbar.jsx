import React from "react";

export default function Navbar() {
    return (
        <header className="bg-emerald-950 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
                    <a href="#" className="mr-5 text-yellow-500 hover:text-white">
                        Home
                    </a>
                    <a href="#" className="mr-5 text-yellow-500 hover:text-white">
                        Admin
                    </a>
                </nav>
            </div>
        </header>
    );
}