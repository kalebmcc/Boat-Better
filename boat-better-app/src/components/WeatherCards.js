import React from 'react';
import WeatherCard from './WeatherCard';
import {useEffect} from 'react'

function WeatherCards({location,weather,setWeather}) {

    

    useEffect(() => {

                const lat = location.latitude;
				const lng = location.longitude;
				const params = 'airTemperature,cloudCover,windDirection,windSpeed ';


			const url =
				`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;

			fetch(url,{
                headers: {
                    'Authorization': `${process.env.REACT_APP_STORMGLASS_KEY}`
                }
                })
				.then((res) => res.json())
				.then((json) => {
					console.log(json);
					setWeather([json]);
				})
				.catch(console.error);
		}, []);
    return (
        <div>
            <WeatherCard weather={weather}/>
        </div>
    );
}

export default WeatherCards;