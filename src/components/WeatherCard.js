import React from 'react';
import {Link} from 'react-router-dom'

function WeatherCard({weather}) {
	let indexes = [12, 36, 60, 84, 108, 132, 156];

	let daysArr = indexes.map((i) => weather[i]);
	//Found this from the second example on this url: https://stackoverflow.com/questions/69250631/how-to-filter-an-array-by-index-which-is-given-as-an-array



	return (
		<div className='display-cards'>
			{daysArr.map((hour, index) => (
				<Link to={'/weather/day/' + index} style={{ textDecoration: 'none' }}>
					<div className='days'>
						<h4>Date: {hour.time.split('').splice(0, 10).join('')}</h4>
						<p><strong>Time:</strong> {hour.time.split('').splice(11, 5).join('')}</p>
						<p><strong>Air Temp:</strong> {hour.airTemperature.noaa}&deg; Celcius </p>
						<p><strong>Cloud Cover:</strong> {hour.cloudCover.noaa}%</p>
						<p><strong>Wind Direction:</strong> {hour.windDirection.noaa}&deg;</p>
						<p><strong>Wind Speed:</strong> {hour.windSpeed.noaa} mps</p>
						<p>**Click for Hourly Info**</p>
					</div>
				</Link>
			))}
		</div>
	);
}

export default WeatherCard;