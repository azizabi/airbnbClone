import React from 'react';

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className='relative w-full min-w-[300px] h-64 md:h-80 lg:h-96'>
        <img
          src={img}
          alt={title}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
      <div className='absolute top-1/2 left-6 md:left-12 transform -translate-y-1/2'>
        <h3 className='text-2xl md:text-4xl mb-3 w-48 md:w-80 text-white'>{title}</h3>
        <p className='text-sm md:text-base text-white mb-5'>{description}</p>
        <button className='text-xs md:text-sm font-semibold text-gray-900 bg-teal-300 px-4 py-2 rounded-lg'>
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
