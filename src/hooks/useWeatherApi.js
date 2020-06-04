import {useState} from 'react';

export default () => {
  const [weather,setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const APIKEY = '093c63d1d6dd2f0f77c6f14d91a19042';

  async function fetchCityByForm(e) {
    setLoading(true);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();

    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      .catch(err => {
        setLoading(false)
      });

    await fetchForecast(apiData.id)
  }

  async function fetchCityByPosition(lat, lon) {
    setLoading(true);
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        setLoading(false)
      });

    await fetchForecast(apiData.id);
  }

  async function fetchForecast(cityId) {
    const forecastData = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&appid=${APIKEY}&units=metric&id=${cityId}`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => {
        setLoading(false)
      });
      
    if(forecastData.city){
      setWeather({
        city: forecastData.city.name,
        country: forecastData.city.country,
        forecast: forecastData.list,
        error:""
      })
    } else {
      setWeather({
        city: '',
        country: '',
        forecast: '',
        error: "Verify your City and Country name is correct!"
      })
    }

    setLoading(false)
  }

  return {
    weather,
    loading,
    execute: (e) => fetchCityByForm(e),
    location: (lat, lon) => fetchCityByPosition(lat, lon)
  };
}