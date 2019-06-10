import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link to={`/movies/${movie.id}`} style={{textDecoration: 'none'}}><span className="saved-movie" key={movie.id}>{movie.title}</span></Link>
        ))}
        <Link to='/' style={{textDecoration: 'none', color: 'black', border: '1px solid gray'}}>
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
