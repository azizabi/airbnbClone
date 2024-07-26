import React from 'react';

const MediumCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center m-2 mt-5 space-y-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-64 w-64">
        <img src={img} className="rounded-lg object-cover h-full w-full" alt={title} />
      </div>
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default MediumCard;
