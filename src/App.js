// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import axios from 'axios';
// import {Card, CardGroup} from 'react-bootstrap';
// import Button from 'react-bootstrap/button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './Weather';

const API_KEY = process.env.REACT_APP_API_KEY
// console.log(API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // city: '',
      // cityData: {},
      lat: '',
      lon: '',
      name: '',
      searchQuery: '',
      forcast: '',
      error: false,
      errorMessage: '',
    };
  }

  handleCityInput = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  };



  getCityData = async (e) => {
    e.preventDefault();
    // retreiving data from API
    try {
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
      // console.log(cityData.data[0]);
      this.setState({
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        name: cityData.data[0].display_name,
      });
      await this.getForcast(cityData.data[0].display_name);
    } catch (error) {
      console.log('error', error);
      console.log('error.response', error.response);
      this.setState({
        error: true,
        errorMessage: `An error occured: ${error.response.status}`
      })
    }
  };

  getForcast = async () => {
    // e.preventDefault();
    try {
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.searchQuery}`;
      console.log(weatherUrl);
      let forcastData = await axios.get(weatherUrl);
      this.setState({
        forcast: forcastData.data,
      })
      const { lat, lon } = forcastData.data
      console.log(await this.getWeatherFromLocation(lat, lon))
    } catch {

    }
  }

  // getWeatherFromLocation = async (lat, lon) => {
  //   let latLon = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`)
  //   return latLon.data;
  // }

  render() {
    // console.log(this.state);
    // let cityList = this.state.cityData.map(())
    return (
      <>
        <Header />
        <Weather
          weather={this.state.forcast.descriptionOne}
          name={this.state.forcast.cityName}
          date={this.state.forcast.dateOne}
        />
        <Main
          lat={this.state.lat}
          lon={this.state.lon}
          name={this.state.name}
          submit={this.getCityData}
          handleCity={this.handleCityInput}
          errorMessage={this.state.error} />
        <Footer />
      </>
    )
  }
};

export default App;