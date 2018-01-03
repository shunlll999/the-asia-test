import React from 'react';

const CoverImage = ({ photoList }) => (
  <div className="cover-image">
    {photoList && (
      photoList.map((photo, i) => (
        <img key={i} src={photo.details.absolute_url} alt={photo.details.name}/>
      ))
    )}
  </div>
);

export default CoverImage;