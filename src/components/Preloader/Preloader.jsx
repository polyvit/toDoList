import React from "react";
import "./preloader.scss";

let Preloader = () => {
    return (
        <>
            <div className="preloader_wrapper"></div>
            <div className='wrapper_preloader'>
            <div className="sk-chasing-dots preloader_absolute">
                <div
                    className="sk-child sk-dot-1"
                ></div>
                <div
                    className="sk-child sk-dot-2"
                >
                    {" "}
                </div>
            </div>
            </div>
        </>
    );
};

export default Preloader;
