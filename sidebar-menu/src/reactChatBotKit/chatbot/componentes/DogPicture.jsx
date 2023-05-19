// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img  width={"200px"}  height={"200px"}  src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPicture;