import React, { Component } from 'react';


class PhotoItem extends Component {
  render() {
    if(this.props.notFound){
      return (
        <li className="not-found">
        <h3>No Results Found</h3>
        <p>You search did not return any results. Please try again.</p>
      </li>
      );
    }
    return (
       <li>
        <img src={this.props.photoUrl} alt="" />
      </li>
    );
  }
}

export default PhotoItem;
