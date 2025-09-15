import React from 'react';

const Avatar = ({ src, alt }) => (
  <img
    className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-white"
    src={src || `https://i.pravatar.cc/150?u=${alt}`}
    alt={alt}
  />
);

export default Avatar;