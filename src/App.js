import React, {useEffect, useRef} from 'react';
import './App.css';
import useWeatherApi from './hooks/useWeatherApi';
import usePosition from './hooks/usePosition';
import CitySearch from './CitySearch';
import CityData from './CityData';

export default () => {
  const {weather, loading, execute, location} = useWeatherApi();
  const {latitude, longitude, error} = usePosition();
  const isInitialLocation = useRef(false);

  useEffect(() => {
      if(!isInitialLocation.current && latitude) {
        location(latitude,longitude);
        isInitialLocation.current = true;
      }
  }, [location, latitude, longitude]);

  return (
    <div className="App">
      <div id="form-main">
        <div id="form-div">
          <h3>WEATHER WITH REACT</h3>
          <div className='link' onClick={() => location(-27.5966702, -48.5491714)}>Florianopolis</div>
          <div className='link' onClick={() => location(40.730610, -73.935242)}>New York</div>
          <div className='link' onClick={() => location(60.472023, 8.4689465)}>Åsberg</div>
          <div className='link' onClick={() => location(49.246292, -123.116226)}>Vancouver</div>
          <div className='link' onClick={() => location(-34.9474716, -54.9338188)}>Punta Del Este</div>
          <CitySearch getWeather={execute} />
          {loading 
            ? <div className="spinner"></div>
            : <CityData
                city={weather.city}
                country={weather.country}
                forecast={weather.forecast}
                error={weather.error || (!weather.city ? error : null) }
              />
          }
        </div>
      </div>
    </div>
  );
}