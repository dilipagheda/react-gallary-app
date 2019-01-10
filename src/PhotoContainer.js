import React, { Component } from 'react';
import PhotoItem from './PhotoItem';


class PhotoContainer extends Component {

  generatePhotoItems(){
    let photos = this.props.photos;

    if(this.props.isError){
      return <PhotoItem isError={true} />
    }

    if(photos.length === 0){
      return <PhotoItem notFound={true} />
    }
    return photos.map((current)=>{
      let photoUrl = `https://farm${current.farm}.staticflickr.com/${current.server}/${current.id}_${current.secret}_q.jpg`;
      return <PhotoItem photoUrl={photoUrl} key={current.id}/>
    });
  }

  render() {
    return (
        <div className="photo-container">
        <h2>Results</h2>
        <ul>
            {this.generatePhotoItems()}
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;
