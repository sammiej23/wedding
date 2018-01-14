import React from 'react';

export const Photos = (props) => {
  let src = props.src;
  return (
    <div id="photoGallery">
      <img src={src} />
    </div>
  );
}

/*Photos.propTypes = {
  src: React.PropTypes.string.isRequired
};*/
