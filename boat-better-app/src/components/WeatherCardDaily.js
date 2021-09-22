import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {useEffect} from 'react'
import '../App.css'

function WeatherCardDaily({weather}) {

const { index } = useParams();

let indexNumber = (parseInt(index) + 1) * 24;


let indexes = [];

let daysArr = [];

let currentDay = weather[indexNumber-1].time

let today = currentDay.split('').splice(0,10).join('')
    

    function printIndex() {
    for(let i=indexNumber; i>=(indexNumber-24); i--) {
        indexes.push(i)
    }
    }

       printIndex(indexNumber);
       indexes.sort((a, b) => a - b);
       daysArr = indexes.map((i) => weather[i]);
    


	
   


    return (
			<div>
				<h2>{today}</h2>
				<Link to='/weather'>
					<button>
						<strong>BACK</strong>
					</button>
				</Link>
				<div className='display-cards'>
					{daysArr.map((hour) => (
						<div className='days'>
							<h4>Time: {hour.time.split('').splice(11, 5).join('')}</h4>
							<p><strong>Date:</strong> {hour.time.split('').splice(0, 10).join('')}</p>
							<p><strong>Air Temp:</strong> {hour.airTemperature.noaa}&deg; Celcius </p>
							<p><strong>Cloud Cover:</strong> {hour.cloudCover.noaa}%</p>
							<p><strong>Wind Direction:</strong> {hour.windDirection.noaa}&deg;</p>
							<p><strong>Wind Speed:</strong> {hour.windSpeed.noaa} mps</p>
						</div>
					))}
				</div>
			</div>
		);
}

export default WeatherCardDaily;