import {Card} from 'react-bootstrap';
import React from 'react';

class Movie extends React.Component{
  constructor(props){
    super(props);
    this.state={};

  }
  render() {
    console.log(this.props)
    return (
      <>
      {this.props.movieArr.map((movie,idx) => (
        <Card key={idx}>
          {console.log(movie.imgUrl)}
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.overview}</Card.Text>
          <Card.Img src={'https://image.tmdb.org/t/p/w500'+movie.imgUrl}/>
          <Card.Text>{movie.avgVotes}</Card.Text>
          <Card.Text>{movie.popularity}</Card.Text>
          <Card.Text>{movie.releaseDate}</Card.Text>
        </Card>
      ))}
      </>
    )
  }
}

export default Movie;