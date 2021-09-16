import React from 'react';

function WeatherCard({weather}) {

    if(!weather) {
        return<p>loading...</p>
    }

    return (
        <div>
            <h1></h1>
        </div>
    );
}

export default WeatherCard;