import './App.css';
import LocationForm from './components/LocationForm';
import WeatherCards from './components/WeatherCards';
import Header from './components/Header';
import {useState} from 'react';
import {Route} from 'react-router-dom'
import About from './components/About';

function App() {

  

  const [location, setLocation] = useState({
		latitude: null,
		longitude: null,
	});
  

  return (
		<div className='App'>
			<Header location={location} setLocation={setLocation} />
			<Route
				path='/'
				exact
				render={() => (
					<LocationForm location={location} setLocation={setLocation} />
				)}
			/>

			<Route
				path='/weather'
				render={() => <WeatherCards location={location} />}
			/>
			<Route path='/' exact render={() => <About />} />
		</div>
	);
}

//20.8862219
//-158.005972

export default App;
