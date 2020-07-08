import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import WeatherInfo from './component/weatherInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Weather from './component/weather';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/weather' component={Weather}></Route>
          <Route path="/">
            <WeatherInfo />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;