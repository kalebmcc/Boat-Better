import React from 'react';
import WeatherCard from './WeatherCard';
import {useEffect,useState} from 'react'
import data from '../data.json'
import {Route, Link} from 'react-router-dom'
import WeatherCardDaily from './WeatherCardDaily';

function WeatherCards({location}) {

	const [weather, setWeather] = useState([]);


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
				.then((res) => {
					setWeather(res.hours);
				})
				.catch(console.error);
		}, []);



	if (!weather.length) {
		return <p>loading...</p>;
		}
    return (
			<div className='gallery'>
				<div>
					<h5>latitude: {location.latitude} / longitude: {location.longitude}</h5>

					<Route path='/weather' exact>
						<Link to='/'>
							<button>
								<strong>BACK</strong>
							</button>
						</Link>
						<WeatherCard weather={weather} />
					</Route>
					<Route path='/weather/day/:index'>
						<WeatherCardDaily weather={weather} />
					</Route>
				</div>
			</div>
		);
}

export default WeatherCards;