import React from 'react'
import CityForecast from './CityForecast';

const CityData = ({city, country, forecast, error}) => {
    return (
        <div className="city-data">
            {city && country && <h3>{city}, {country}</h3>}
            {forecast && forecast.map((data) => <CityForecast data={data} key={data.dt} />)}
            {error && <p>{error}</p>}
        </div>
    )
}

export default CityData; 