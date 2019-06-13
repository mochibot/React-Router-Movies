import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = (movie) => {
    if (this.state.savedList.length === 0 || this.state.savedList.every(item => item.title !== movie.title)) {
      const updatedList = this.state.savedList;
      updatedList.push(movie);
      this.setState({ 
        savedList: updatedList
      });
    }
    /* re-wrote code to add each movie once
      const savedList = this.state.savedList;
      savedList.push(movie);
      this.setState({ savedList });
    */      
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        {/* <div>Replace this Div with your Routes</div> */}
        <Route exact path='/' component={MovieList}/>
        <Route 
          path='/movies/:itemId' 
          render={props => <Movie {...props} addToSavedList={this.addToSavedList}/>} />
      </div>
    );
  }
}
