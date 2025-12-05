import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container bg-emerald-950 px-5 py-10 left:0 right-0 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-emerald-950 rounded-lg overflow-hidden sm:mr-2 p-2 flex items-end justify-start relative">
                    <div className="relative flex flex-wrap py-6">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                1111 Main St. <br />
                                Wayne, NE 68787
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p>
                                rivaryoder@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-yellow-500 tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}