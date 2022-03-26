import React from 'react';
import {Card} from 'react-bootstrap';
import './Movie.css';

class Movie extends React.Component{
  constructor(props){
    super(props);
    this.state={};

  }
  render() {
    // console.log(this.props)
    return (
      <div id="movieDiv">
      {this.props.movieArr.map((movie,idx) => (
        <Card key={idx} style={{ width: '18rem' }} className="movieCard">
          {/* {console.log(movie.imgUrl)} */}
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="overviewText">{movie.overview}</Card.Text>
          <Card.Img className="image" src={'https://image.tmdb.org/t/p/w500'+movie.imgUrl}/>
          <Card.Text>Average Votes: {movie.avgVotes}</Card.Text>
          <Card.Text>Popularity: {movie.popularity}</Card.Text>
          <Card.Text>Release Date: {movie.releaseDate}</Card.Text>
        </Card>
      ))}
      </div>
    )
  }
}

export default Movie;