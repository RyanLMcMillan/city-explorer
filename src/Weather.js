import React from 'react';
import {Card} from 'react-bootstrap';
import './Weather.css'
class Weather extends React.Component {
  render() {
    // let forcastResults = this.props.forcastData.map((weather, index) => {
    //   console.log(index)
    //   console.log(weather)
    //   return (
    //     <Weather
    //       key={index}
    //       weather={weather}
    //     />
    //   );
    // });
    return (
      <div id="weatherDiv">
        <Card>
          <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.date}</Card.Text>
            <Card.Text>{this.props.weather}</Card.Text>
        </Card>
      </div>
    )
  };
}

export default Weather;