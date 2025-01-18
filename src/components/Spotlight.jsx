// Spotlight.jsx
import React from 'react';
import Card from './Spotlightcard';

const Spotlight = () => {
  const cardsData = [
    {
      profile: './public/cxo.png',
      content: 'Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase',
    },
    {
      profile: './public/hindustan_times.png', // Placeholder image path
      content: "Sustainable development through upskilling: India's engineering renaissance",
    },
    {
      profile: './public/the_hindu.png', // Placeholder image path
      content: 'Women in tech earn 7% more than men on average but men snag the highest salaries',
    },
    {
      profile: './public/the_economic_times.png', // Placeholder image path
      content: 'Tech grads sign up for "bootcamps" to be more employable',
    },
    {
      profile: './public/the_times_of_india.png', // Placeholder image path
      content: 'Young professionals must embrace continuous upskilling in the age of AI',
    },
    {
      profile: './public/moneycontrol.png', // Placeholder image path
      content: 'Generative AI courses in hot demand as more Indians flock to upskilling platforms',
    },
  ];

  return (
    <section className="bg-pink-50 py-12 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Coding Ninjas in Spotlight</h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center gap-8">
          {/* Large Card */}
          <div className="w-full lg:w-3/12 flex justify-center">
            <img src='./public/spotlight.webp' alt="Spotlight" className="rounded-lg shadow-lg " />
          </div>

          {/* Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full lg:w-5/12 font-mulish text-xs p-0 pl-0 pr-0">
            {cardsData.map((card, index) => (
              <Card
                key={index}
                title={card.profile}
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
