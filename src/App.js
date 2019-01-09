import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import './index.css';
import SearchPhraseForm from './SearchPhraseForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import appKey from './config'

class App extends Component {
  render() {
    console.log(appKey);
    return (
      <BrowserRouter>
        <div className="container">
          <SearchPhraseForm />
          <Nav />
          <PhotoContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
