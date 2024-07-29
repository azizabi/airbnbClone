import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import InfoCard from './InfoCard';
import searchResultsData from '../../search.json'; // Import JSON data

const Search = () => {
  const location = useLocation();
  const { location: searchLocation, startDate, endDate, noOfGuests } = queryString.parse(location.search);

  const formattedStartDate = format(new Date(startDate), "dd MMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setSearchResults(searchResultsData.searchResults);
  }, []);

  return (
    <div>
      <Header placeholder={`${searchLocation} | ${range} | ${noOfGuests} guests`} />
      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
          <h1 className='text-3xl font-semibold mb-6'>Stays in {searchLocation}</h1>
          <div className='hidden lg:inline-flex mb-5 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>
          <div className='flex flex-col'>
            {searchResults.map(({ img, location, description, title, star, price, total }) => (
              <InfoCard 
                img={img}
                key={img}
                location={location}
                description={description}
                star={star}
                price={price}
                total={total}
                title={title}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
