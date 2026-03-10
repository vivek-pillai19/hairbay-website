import React, { useState } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
      {...props}
    />
  );
};

export default OptimizedImage;
