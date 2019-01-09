import React, { Component } from 'react';
import PhotoItem from './PhotoItem';


class PhotoContainer extends Component {
  render() {
    return (
        <div class="photo-container">
        <h2>Results</h2>
        <ul>
            <PhotoItem />
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;
