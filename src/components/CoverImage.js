import React from 'react';

const CoverImage = ({ photoList }) => (
  <div className="cover-image">
    <div className="cover-image__holder">
      {photoList && (
        photoList.map((photo, i) => (
          <img key={i} src={photo.details.absolute_url} alt={photo.details.name} onClick={onSlideHandler}/>
        ))
      )}
    </div>
  </div>
);

const onSlideHandler = (event) => {
  console.log(event.target.parentElement);
}

export default CoverImage;