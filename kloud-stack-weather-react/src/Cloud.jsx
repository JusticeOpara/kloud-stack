import React from "react"
import { useState, useEffect } from "react"

export default function () {
    const [formatedData, setFormatedData] = useState([]);


    useEffect(() => {
        const fetchQuizData = () => {

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=owerri%20&units=metric&appid=bc2c594876e86589cf23ead605dec442`)
                .then(res => res.json())
                .then(data => {
                    // console.log("App - useEffect -- data ->", data);
                    setFormatedData(data)

                })
                .catch(() => {
                    setErrorMessage("Unable to fetch user list");

                })
                ;
        };

        fetchQuizData();
        console.log("I FIRED ONCE");
    }, [])
    // console.log(formatedData, "sfffsssssssssssss")
    return (
<>

        {
            formatedData.map((value) => {
                <div className="container">
                    <nav className="navbar">
                        <div className="top-bar">
                            {/* <a><i class="fa-solid fa-align-justify"></i></a> */}
                        </div>

                        <div className="timer">
                            <p className="timestamp-sunrise"></p>
                            <p className="timestamp-sunset"></p>
                        </div>

                        <div className="area-port">
                            <p className="location">
                                <a className="location-pointer">
                                {/* <i class="fa-solid fa-location-dot"></i> */}
                                </a> 
                                <span className="city">lagos</span>,Nigeria
                            </p>

                        </div>
                        <div className="side-btn">
                            <button className="dark-mode-toggle"  aria-label="toggle dark mode">
                                {/* <a class="toggle-on"><i class="fas fa-toggle-on"></i></a> */}
                            </button>

                        </div>

                    </nav>

                    <div className="weather-report">
                        <img className="cloud" src="images/summer-rain.svg" alt="cloud" />
                        {/* <div className="cloudsss"></div> */}
                        <h2 className="degree">
                            290⁰</h2>
                        <h4 className="weather-description"></h4>

                    </div>



                    <div className="inner-container">

                        <div className="cloud-container">
                            {/* <img className="weather" src="images/rain.svg" alt="rain-svg" /> */}
                            <h3 className="wind">{value.wind}</h3>
                            <p className="climate">Wind</p>
                        </div>

                        <div class="cloud-container">
                            {/* <img className="weather" src="images/water-droplet.svg" alt="water-svg" /> */}
                            <h3 className="humidity">{value.humidity}</h3>
                            <p className="climate">Humidity</p>
                        </div>

                        <div className="cloud-container">
                            {/* <img className="weather" src="images/pressure-svgrepo-com.svg" alt="pressure-svg" /> */}
                            <h3 className="pressure"></h3>
                            <p className="climate">Pressure</p>
                        </div>
                    </div>
                </div>
           })
    }


</>
    )
}