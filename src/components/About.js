import React from 'react';
import '../App.css'

function About(props) {
    return (
			<div>
				<p className='info'>
					<strong>
						This application utilizes the Stormglass.io API to display weather
						information on the provided Latitude and Longitude.
					</strong>
				</p>
			</div>
		);
}

export default About;