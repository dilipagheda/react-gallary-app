import React, { Component } from 'react';
import PhotoItem from './PhotoItem';


class PhotoContainer extends Component {

  generatePhotoItems(){
    if(this.props.isLoading){
      return null;
    }
    let photos = this.props.photos;

    if(this.props.isError){
      return <PhotoItem isError={true} />
    }
    console.log("length:"+photos.length+"loader:"+this.props.isLoading);
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
