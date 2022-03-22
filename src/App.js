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
      // cityData: {},
      lat: '',
      lon: '',
      name: '',
      searchQuery: '',
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
    } catch (error) {
      console.log('error', error);
      console.log('error.response', error.response);
      this.setState({
        error: true,
        errorMessage: `An error occured: ${error.response.status}`
      })
    }
  };

  render() {
    // console.log(this.state);
    // let cityList = this.state.cityData.map(())
    return (
      <>
        <Header />
        <Main
          lat={this.state.lat}
          lon={this.state.lon}
          name={this.state.name}
          submit={this.getCityData}
          handleCity={this.handleCityInput} 
          errorMessage={this.state.error}/>
        <Footer />
      </>
    )
  }
};

export default App;