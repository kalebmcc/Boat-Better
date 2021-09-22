import React from 'react';
import {Link} from 'react-router-dom'

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
			</div>
		);
}

export default Header;