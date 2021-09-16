import React from 'react';
import {Link, Reroute} from 'react-router-dom'

function LocationForm({location, setLocation}) {

    let lat = null
    let lng = null

    function handleSubmit(event) {
        event.preventDefault();
        setLocation({latitude: lat, longitude: lng})

    }

    function changeLat(event) {
        event.preventDefault();
        lat = event.target.value
    }

    function changeLng(event) {
        event.preventDefault();
        lng = event.target.value
    }


    return (
			<div className='location-form'>
				<h3>Enter Location:</h3>
				<form onSubmit={handleSubmit}>
					<p>Latitude:</p>
					<input type='text' onChange={changeLat} placeholder='20.886119' />
					<p>Longitude:</p>
					<input type='text' onChange={changeLng} placeholder='-158.005972' />
					<br />

					<button type='submit'>Submit</button>
				</form>
				<Link to='/week_weather'>
                    <button>See Results</button>
                </Link>
			</div>
		);
}

export default LocationForm;