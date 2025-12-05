import React from "react";
import { python_projects } from "../python_data.js";

export default function Python_projects() {

    return (
        <section id="python_projects" className="text-gray-400 bg-black body-font">
            <div className="container pt-20 pb-3 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-5">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Python Scripts
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        All projects are coded in PyCharm with various libraries Psutil, Tkinter, and BeautifulSoup.
                        Primarily comprised of task based scripts meant to solve a problem.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 mb-10">
                    {python_projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            target="_blank"
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="rounded-lg absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg bg-linear-to-t from-emerald-950 to-emerald-900 border-emerald-900 opacity-0 trasition delay-100 duration-300 ease-in-out hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-large text-yellow-500 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}