import React from 'react';

const PhotoItem = (props) =>{

  if(props.isError){
    return (
      <li className="not-found">
      <h3>Oops. Something has gone wrong!</h3>
      <p>There seems to be a network error. Please check your connection and try again!</p>
    </li>
    );
  }

  if(props.notFound){
    return (
      <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
    );
  }

  return (
    <li>
     <img src={props.photoUrl} alt="" />
   </li>
 );
}

export default PhotoItem;
