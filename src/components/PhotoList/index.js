import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'adventures',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'friends',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'smiles',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'smiles',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'smiles',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
    {
      name: 'Chef Kenai',
      category: 'smiles',
      description:
        'This is Kenai, Britlees half corgi, half dachsund.'
    },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/kenai/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
