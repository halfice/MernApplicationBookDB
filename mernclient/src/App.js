import React, { Component } from 'react';
import { BrowseRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' Component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='/edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div></Router>

    );
  }
}

export default App;
