import React from 'react';
import {useParams} from 'react-router-dom'
import {useEffect} from 'react'

function WeatherCardDaily({weather}) {

const { index } = useParams();

console.log(index);

let indexNumber = (parseInt(index) + 1) * 24;


let indexes = [];

let daysArr = [];
    

    function printIndex() {
    for(let i=indexNumber; i>=(indexNumber-24); i--) {
        indexes.push(i)
    }
    }

       printIndex(indexNumber);
       indexes.sort((a, b) => a - b);
       console.log(indexes);
       daysArr = indexes.map((i) => weather[i]);
    


	
   


    return (
			<div>
                <h2></h2>
				<div className='display-cards'>
					{daysArr.map((hour) => (
						<div className='days'>
							<p>Air Temp: {hour.airTemperature.noaa}&deg; Celcius </p>
							<p>Cloud Cover: {hour.cloudCover.noaa}%</p>
							<p>Wind Direction: {hour.windDirection.noaa}&deg;</p>
							<p>Wind Speed: {hour.windSpeed.noaa} mps</p>
							<p>{hour.time}</p>
						</div>
					))}
				</div>
			</div>
		);
}

export default WeatherCardDaily;