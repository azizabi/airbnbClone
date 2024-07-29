// Spinner.jsx
import React from 'react';
import { HashLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <HashLoader color="#3498db" size={60} />
    </div>
  );
};

export default Spinner;
