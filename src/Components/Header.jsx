import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserIcon,
  UserCircleIcon
} from '@heroicons/react/24/solid';
import Logo from '../assets/logo.svg';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberGuest, setNumberGuest] = useState(1);
  const navigate = useNavigate();

  // Handle date range selection
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };

  // Reset search input
  const resetInput = () => {
    setSearchInput("");
  };

  // Handle search and navigate to results page
  const handleSearch = () => {
    const query = queryString.stringify({
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests: numberGuest,
    });

    navigate(`/search?${query}`);
  };

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10 md:py-5'>
      {/* Logo */}
      <div onClick={() => navigate('/')} className='relative flex items-center my-auto h-10 cursor-pointer'>
        <img src={Logo} width={100} alt="Logo" />
      </div>

      {/* Search Input */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
          type="text" 
          placeholder={placeholder || "Start your search"} 
          className="flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" 
        />
        <MagnifyingGlassIcon 
          className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" 
          onClick={handleSearch} 
        />
      </div>

      {/* Icons */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <Bars3Icon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {/* Date Range Picker and Guest Input */}
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto'>
          <DateRangePicker 
            ranges={[selectRange]} 
            minDate={new Date()} 
            rangeColors={["#fd5b61"]} 
            onChange={handleSelect} 
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl pl-2 flex-grow font-semibold'>Number of Guests</h2>
            <UserIcon className='h-5' />
            <input 
              type='number' 
              value={numberGuest} 
              onChange={(e) => setNumberGuest(e.target.value)} 
              min={1} 
              className='w-12 pl-2 text-lg outline-none text-red-400' 
            />
          </div>
          <div className='flex items-center'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
            <button onClick={handleSearch} className='flex-grow text-red-400'>Search</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
