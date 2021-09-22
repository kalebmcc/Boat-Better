import React from 'react';
import {useEffect} from 'react'
import {Link} from 'react-router-dom'

function WeatherCard({weather}) {
	let indexes = [12, 36, 60, 84, 108, 132, 156];

	let daysArr = indexes.map((i) => weather[i]);
	//Found this from the second example on this url: https://stackoverflow.com/questions/69250631/how-to-filter-an-array-by-index-which-is-given-as-an-array



	return (
		<div className='display-cards'>
			{daysArr.map((hour,index) => (
				<Link
					to={'/weather/day/' + index}
					style={{ textDecoration: 'none' }}>
					<div className='days'>
						<p>Air Temp: {hour.airTemperature.noaa}&deg; Celcius </p>
						<p>Cloud Cover: {hour.cloudCover.noaa}%</p>
						<p>Wind Direction: {hour.windDirection.noaa}&deg;</p>
						<p>Wind Speed: {hour.windSpeed.noaa} mps</p>
						<p>{hour.time}</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export default WeatherCard;