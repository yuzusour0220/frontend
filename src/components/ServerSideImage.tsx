'use client';

import React, { useState, useEffect } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

interface ServerSideImageProps extends Omit<ImageProps, 'src'> {
  src: string;
}

const ServerSideImage: React.FC<ServerSideImageProps> = ({ src, alt, width, height, ...rest }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('/api/fetch-image?url=' + encodeURIComponent(src));
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const objectURL = URL.createObjectURL(blob);
        setImageSrc(objectURL);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();

    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
    };
  }, [src]);

  if (!imageSrc) return null;

  return <Image src={imageSrc} alt={alt} width={width} height={height} {...rest} />;
};

export default ServerSideImage;