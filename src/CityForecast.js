import React from 'react'
import { Celsius, UnixToDate } from "./components/Common";

const CityForecast = ({data}) => {
    return (
        <div className='city-forecast-wrapper'>
            <div className='city-forecast-tmp'>
                <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                    alt={data.weather[0].icon} />
                <strong>
                    <Celsius temp={data.temp.max} />
                </strong>
                |<Celsius temp={data.temp.min} />
            </div>
            <div className='city-forecast-day'>
                <UnixToDate unix={data.dt} />
            </div>
        </div>
    )
}

export default CityForecast;