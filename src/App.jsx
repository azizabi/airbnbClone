import React from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import SmallCard from './Components/SmallCard';
import MediumCard from './Components/MediumCard'; 
import exploreData from './exploreData.json'; 
import mediumCardData from './mediumCardData.json';
import LargeCard from './Components/LargeCard';
import FullCard from './assets/Fullcard.png'
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData.map((item) => (
              <SmallCard 
                key={item.location}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide">
            {mediumCardData.map((item) => (
              <MediumCard 
                key={item.title}
                img={item.img}
                title={item.title}
              />
            ))}
          </div>
        </section>

            <LargeCard
              img={FullCard}
              title='The Greatest Outdoors'
              description='Wishlist is curated by Airbnb'
              buttonText='Get Inspried'
            />

      </main>

      <Footer/>
    </div>
  );
};

export default App;

