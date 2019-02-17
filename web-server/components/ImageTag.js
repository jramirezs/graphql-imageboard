import React from 'react';

const ImageTag = ({ name, size, height, width, url }) => {
  return (
    <span>
      File:{' '}
      <a href={url} target="_blank">
        {name}
      </a>{' '}
      ({size}KB {height}x{width})
    </span>
  );
};

export default ImageTag;
