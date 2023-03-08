import React, { useState } from 'react'

const WeatherCards = ({ weather, temperature }) => {

    const [isCelsius, setisCelsius] = useState(false)

    const handleClick = () => setisCelsius(!isCelsius)

  return (
    <article className='card'>
        <h1 className='tittle'>Weather APP <br /> by Luisa Rivas</h1>
        <h2 className='subtittle'>{weather?.name}, {weather?.sys.country}</h2>
        <div className='body'>
            <div className='img_container'>
                <img className='img' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </div>
            <section className='info'>
                <h3 className='info_tittle'>{weather?.weather[0].description}</h3>
                <ul className='info_body'> 
                    <li className='item'><span className='span'>Wind Speed</span>{weather?.wind.speed}m/s</li>
                    <li className='item'><span className='span'>Clouds</span>{weather?.clouds.all}%</li>
                    <li className='item'><span className='span'>Pressuere</span>{weather?.main.pressure}hPa </li>
                </ul>
            </section>
        </div>
        <footer className='footer'>
            <h2 className='temperature'>{isCelsius ? temperature?.celsius +' °C' : temperature?.farenheit + '°F'}</h2>
            <button className='btn' onClick={handleClick}>Change to °{isCelsius ? 'F' : 'C'}</button>
        </footer>
    </article>
  )
}

export default WeatherCards