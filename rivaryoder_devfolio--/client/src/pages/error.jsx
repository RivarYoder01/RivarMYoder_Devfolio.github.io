import {Link} from "react-router-dom";
import React from "react";

export default function Error(){
    return (
        <div className="text-center p-40">
            <h1 className="text-2xl text-center text-white">Hm, couldn't find what you're looking for...</h1>
            <div className="flex m-auto justify-center gap-10 mt-10">
                <div className="w-50">
                    <img src="/turtle.png" alt="Dead Turtle"></img>
                </div>
                {/*<Link to='/' className='text-2xl mt-auto mb-auto font-medium text-white'>*/}
                {/*    <span className='text-purple-100 hover:text-purple-100'>Back to Home</span>*/}
                {/*</Link>*/}
                <a
                    href="/"
                    className="mt-auto mb-auto inline-flex text-white bg-emerald-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg">
                    Back to Home
                </a>
            </div>
        </div>
    )
}
