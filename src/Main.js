import React from 'react';
// import Header from './Header';
// import Main from './Main';
// import Footer from './Footer';
import Map from './Map.js';

class Main extends React.Component {
  render() {
    let parseLat = parseInt(this.props.lat)
    let parseLon = parseInt(this.props.lon)
    return (
      <>
        <form onSubmit={this.props.submit}>
          <label>Pick a city
            <input type="text" onInput={this.props.handleCity} name="city" />
          </label>
          <button type="submit">Explore!</button>
        </form>
        <p>City Name: {this.props.name}</p>
        <p>Lat: {this.props.lat}</p>
        <p>lon: {this.props.lon}</p>
          {/* {this.state.error
            ?
            <p>{this.state.errorMessage}</p>
            :
            <ul>
            {/* FILL LATER */}
        {/* </ul>} */}
        <Map 
        url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${parseLat},${parseLon}&zoom=12`} name={this.props.name}/>
      </>
    )
  }
}

export default Main;