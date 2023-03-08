import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCards from './components/WeatherCards';

function App() {

  const [coords, setcoords] = useState()
  const [weather, setweather] = useState()
  const [temperature, settemperature] = useState()
  const [isLoading, setisLoading] = useState(true)

  useEffect( () => {
    const success = pos => {
        const  obj = {
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        }

      setcoords(obj);
    }

    navigator.geolocation.getCurrentPosition(success) 
  }, [] )

  useEffect( () => {
    if (coords) {
      const APIKey = 'db81d5d604f196b119545cca7c8e6dd9'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`
      
      axios.get(url)
        .then(res => {
          setweather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(0),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(0)
          }
          settemperature(obj)
        })
        .catch(err => console.log(err))
        .finally(() => setisLoading(false))
    }
  }, [coords])

  console.log(weather);

   return (
    <div className="App">
        { 
        isLoading ?
        <h1>Loading...</h1>
        :
          <WeatherCards 
              weather={weather} 
              temperature={temperature}
          />
        }
        
    </div>
  )
}

export default App
