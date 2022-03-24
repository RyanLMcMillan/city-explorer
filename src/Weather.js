// 'use strict';
// import Modal from 'react-bootstrap/Modal';
import {Card} from 'react-bootstrap';
import React from 'react';
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
      <>
        <Card>
          <Card.Title>{this.props.name}
          </Card.Title>
            <Card.Text>{this.props.date}</Card.Text>
            <Card.Text>{this.props.weather}</Card.Text>
        </Card>
      </>
    )
  };
}

export default Weather;