import React from 'react';
import {Link} from 'react-router-dom'
// import GoogleMap from './GoogleMap'

function Header(props) {
    return (
			<div>
				<Link to='/' style={{textDecoration: 'none'}}>
					<div className='header'>
						<span>&#9875;</span>
						<h1>BOAT BETTER </h1>
						<span>&#9875;</span>
					</div>
				</Link>
				{/* <GoogleMap/> */}
			</div>
		);
}

export default Header;