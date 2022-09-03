import React from "react"
import { useState, useEffect } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//  import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//  <FontAwesomeIcon icon={solid('user-secret')} />



export default function (props) {
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
    console.log(formatedData, "sfffsssssssssssss")

    return (

        <div className={props.darkMode ? "dark" : ""} >

            <div className="weather-report">
                <img className="cloud" src="images/images/summer-rain.svg" alt="cloud" />
                {/* <div className="cloudsss"></div>  */}
                <h2 className="degree">
                    290⁰</h2>
                <h4 className="weather-description"></h4>

            </div>


            <div className="lex">
                <div className="inner-container">

                    <div className="cloud-container">
                        <img className="weather" src="images/images/rain.svg" alt="rain-svg" />
                        <h3 className="wind"></h3>
                        <p className="climate">Wind</p>
                    </div>

                    <div class="cloud-container">
                        <img className="weather" src="images/images/water-droplet.svg" alt="water-svg" />
                        <h3 className="humidity"></h3>
                        <p className="climate">Humidity</p>
                    </div>

                    <div className="cloud-container">
                        <img className="weather" src="images/images/pressure-svgrepo-com.svg" alt="pressure-svg" />
                        <h3 className="pressure"></h3>
                        <p className="climate">Pressure</p>
                    </div>
                </div>
            </div>
        </div>

    )
}