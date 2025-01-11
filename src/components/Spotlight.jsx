// Spotlight.jsx
import React from 'react';
import Card from './Spotlightcard';

const Spotlight = () => {
  const cardsData = [
   
    {
      title: 'CXOtoday.com',
      content: 'Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase',
    },
    {
      title: 'Hindustan Times',
      content: 'Sustainable development through upskilling: India\'s engineering renaissance',
    },
    {
      title: 'The Hindu',
      content: 'Women in tech earn 7% more than men on average but men snag the highest salaries',
    },
    {
      title: 'The Economic Times',
      content: 'Tech grads sign up for "bootcamps" to be more employable',
    },
    {
      title: 'The Times of India',
      content: 'Young professionals must embrace continuous upskilling in the age of AI',
    },
    {
      title: 'Moneycontrol',
      content: 'Generative AI courses in hot demand as more Indians flock to upskilling platforms',
    },
    {
        title: 'Moneycontrol',
        content: 'Generative AI courses in hot demand as more Indians flock to upskilling platforms',
      },
  ];

  return (
    <section className="bg-pink-50 py-12 ">
      <div className="container mx-7 px-4 gap-6">
        <h2 className="text-2xl font-bold text-center mb-8">Coding Ninjas in Spotlight</h2>
        <div className="flex flex-wrap justify-center lg:justify-between ">
          {/* Large Card */}
          <div className="w-full lg:w-5/12 ">
         <img src= './public/spotlight.webp' /> 
          </div>
          
          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-7/12">
            {cardsData.slice(1).map((card, index) => (
              <Card
                key={index + 1}
                title={card.title}
                content={card.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
