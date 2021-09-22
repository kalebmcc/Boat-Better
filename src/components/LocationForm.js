import React from 'react';
import {useHistory} from 'react-router-dom'
import '../App.css'

function LocationForm({location, setLocation}) {

    const history = useHistory();

    let lat = null
    let lng = null

    function handleSubmit(event) {
        event.preventDefault();
        setLocation({latitude: lat, longitude: lng})

        history.push('/weather');

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
				<div>
					<h3>Enter Location:</h3>
					<form onSubmit={handleSubmit}>
						<p>
							<strong>Latitude:</strong>
						</p>
						<input type='text' onChange={changeLat} placeholder='20.886119' />
						<p>
							<strong>Longitude:</strong>
						</p>
						<input type='text' onChange={changeLng} placeholder='-158.005972' />
						<br />

						<button type='submit'>
							<strong>SUBMIT</strong>
						</button>
					</form>
				</div>
			</div>
		);
}

export default LocationForm;