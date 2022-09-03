import React from "react";

export default function (props) {
    return (

        <nav className={props.darkMode ? "dark" : ""} >


            <div className="top-bar">
                {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
            </div>

            <div className="timer">
                <p className="timestamp-sunrise"></p>
                <p className="timestamp-sunset"></p>
            </div>

            <div className="area-port">
                <p className="location">
                    <a className="location-pointer">
                        {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                    </a>
                    <span className="city">lagos</span>,Nigeria
                </p>

            </div>
            <div className="toggler">

                <div
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>

            </div>

        </nav>

    )
}