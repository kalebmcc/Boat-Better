import React from 'react';
import WeatherCard from './WeatherCard';
import {useEffect,useState} from 'react'
import data from '../data.json'
import {Route, Link} from 'react-router-dom'
import WeatherCardDaily from './WeatherCardDaily';
// import GoogleMap from './GoogleMap';

function WeatherCards({location}) {

	const [weather, setWeather] = useState(data.hours);

    // useEffect(() => {

    //             const lat = 20.886119;
	// 			const lng = -158.005972;
	// 			const params = 'airTemperature,cloudCover,windDirection,windSpeed ';


	// 		const url =
	// 			`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`;

	// 		fetch(url,{
    //             headers: {
    //                 'Authorization': `${process.env.REACT_APP_STORMGLASS_KEY}`
    //             }
    //             })
	// 			.then((res) => res.json())
	// 			.then((res) => {
	// 				console.log(res);
	// 				setWeather(res.hours);
	// 			})
	// 			.catch(console.error);
	// 	}, []);



	if (!weather.length) {
		return <p>loading...</p>;
		}
    return (
			<div>
				{/* <GoogleMap location={location}/> */}
				<h5>latitude: 20.886119 / longitude: -158.005972</h5>

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
		);
}

export default WeatherCards;