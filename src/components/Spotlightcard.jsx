// Card.jsx
import React from 'react';

const Card = ({ profile, content, image, buttonText }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
      {image && <img src={image} alt={profile} className="mb-4 rounded" />}
      <h3 className="text-lg font-semibold mb-2">{profile}</h3>
      <p className="text-gray-600">{content}</p>
      {buttonText && (
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
