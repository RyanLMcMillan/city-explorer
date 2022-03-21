// import logo from './logo.svg';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import axios from 'axios';
import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY
// console.log(API_KEY);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // city: '',
      cityData: {},
      error: false,
      errorMessage: '',
    };
  }

  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    // retreiving data from API
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.city}&format=json`);
    // console.log(cityData.data[0]);
    this.setState({
      cityData: cityData.data[0]
    });
    console.log(this.state.cityData)
  }

  render() {
    // console.log(this.state);
    return (
      <>
        <Header />
        <Main />
        <main>
          <form onSubmit={this.getCityData}>
            <label>Pick a city
              <input type="text" onInput={this.handleCityInput} name="city" />
            </label>
            <button type="submit">Explore!</button>
          </form>
        </main>
        <p>City Name: {this.state.cityData.display_name}</p>
        <p>lon: {this.state.cityData.lon}</p>
        <p>Lat: {this.state.cityData.lat}</p>
        <Footer />
      </>
    )
  }
};

export default App;