import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'Sailor Hat',
      category: 'adventures',
      description: 'A smug smile from our smirky sailor!'
    },
    {
      name: 'Big Nose',
      category: 'adventures',
      description: 'A close up of Kenais honker.'
    },
    {
      name: 'Chillin like a Villain',
      category: 'adventures',
      description: 'Dogs think they belong in front of doors...'
    },
    {
      name: 'One Sleepy Dog',
      category: 'adventures',
      description: 'What a long day he has after doing whatever a Kenai does.'
    },
    {
      name: 'Car Drive',
      category: 'adventures',
      description: 'All the wonderful places in the world that havent been peed on.'
    },
    {
      name: 'Truly Sleepy Kenai',
      category: 'adventures',
      description: 'Damn, that DOES look like a comfortable chair. I dont blame him.'
    },
    {
      name: 'Snow Adventures!!!',
      category: 'adventures',
      description: 'Disclaimer: It IS snow. ...or is it?'
    },
    {
      name: 'Walkin on the Sidewalk!',
      category: 'adventures',
      description: 'Hes sticking his tongue at you subtley.'
    },
    {
      name: 'Upside Down Kenai',
      category: 'adventures',
      description: 'When the paws are like that, you know all is good.'
    },
    {
      name: 'Leaf Head',
      category: 'adventures',
      description: 'Fashion Statement!'
    },
    {
      name: 'Howdy',
      category: 'friends',
      description: 'Meet the long dog of the law.'
    },
    {
      name: 'Hammock Time!',
      category: 'friends',
      description: 'Two very happy friends!'
    },
    {
      name: 'Gotta take care of the baby!',
      category: 'friends',
      description: 'You have to be very careful when picking him up. If you go too fast, he might hate you for a good couple of weeks before he comes around again...personal experience.'
    },
    {
      name: 'Kenai is concerned',
      category: 'friends',
      description: '"You havent paid attention to me in five seconds, this is an OUTRAGE!!!"'
    },
    {
      name: 'Kenais Mail Express Service',
      category: 'friends',
      description: 'Free Shipping with purchase for extremely good owners!'
    },
    {
      name: 'Swag Kenai',
      category: 'friends',
      description: 'Someone lost a pair of shades at the party and they aint gettin em back!'
    },
    {
      name: 'Bat Ears Baby Kenai',
      category: 'smiles',
      description: 'Yeah...Life is good! What a cute pup!'
    },
    {
      name: 'Dark Side Kenai',
      category: 'smiles',
      description: '"I ran out of food" was said only once...and never again out of fear.'
    },
    {
      name: 'Photogenic AF Kenai',
      category: 'smiles',
      description: 'This should be on a magazine cover. Dog food, chew toys, and a tv series.'
    },
    {
      name: 'Dog in the Wild!',
      category: 'smiles',
      description: 'Surrounded by water without a care in the world! More exploring!!!'
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
            src={require(`../../assets/small/${category}/${i}.jpg`)}
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
