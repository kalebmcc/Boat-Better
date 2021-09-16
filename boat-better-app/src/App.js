import './App.css';
import LocationForm from './components/LocationForm';
import WeatherCards from './components/WeatherCards';
import Header from './components/Header';
import {useState} from 'react';
import {Route} from 'react-router-dom'

function App() {

  const [weather, setWeather] = useState()

  const [location, setLocation] = useState({latitude: null, longitude: null})

  console.log(process.env.REACT_APP_STORMGLASS_KEY);
  

  return (
    <div className="App">
      
      <Header location={location} setLocation={setLocation}/>
      <Route path='/' exact render={() => <LocationForm location={location} setLocation={setLocation}/>}/>
      <Route path='/week_weather' render={() =>
      <WeatherCards location={location}/>}/>
    </div>
  );
}

//20.8862219
//-158.005972

export default App;
