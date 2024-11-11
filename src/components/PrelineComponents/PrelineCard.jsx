import React from 'react';

const PrelineCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      {/* Card Image */}
      <img
        className="rounded-t-lg"
        src="https://via.placeholder.com/400x200"
        alt="Placeholder"
      />

      {/* Card Content */}
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Card Title
        </h5>
        <p className="mb-4 text-gray-700">
          This is a description for the card component. You can add any content here to make the card more descriptive and attractive.
        </p>
        
        {/* Button */}
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          data-prl-ripple="true"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PrelineCard;
