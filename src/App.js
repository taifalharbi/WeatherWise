// App.js
import React, { Component } from 'react';
import './App.scss';
import Form from './component/Form';
import Weather from './component/Weather';

const ApiKey = "bd4b11692b741db4494630360479251a";

class App extends Component {
  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: '',
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);
    const data = await api.json();
console.log(data);
    if (data.cod === 200) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature:data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
      });
    } else {
      this.setState({
        city: '',
        country: '',
        temperature: '',
        humidity: '',
        description: '',
        error: 'Please enter valid data',
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className='form-container'>
          <Form Weather={this.getWeather} />
          <Weather
            city={this.state.city}
            country={this.state.country}
            temperature={this.state.temperature}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
        </div>

        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
