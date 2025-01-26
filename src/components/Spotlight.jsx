// Spotlight.jsx
import React from "react";
import Card from "./Spotlightcard";

const Spotlight = () => {
  const cardsData = [
    {
      profile: "./public/cxo.png",
      content:
        "Coding Ninjas Unconventional Approach Upskills 1L Students, Yields 2.2x Salary Increase",
    },
    {
      profile: "./public/hindustan_times.png", // Placeholder image path
      content:
        "Sustainable development through upskilling: India's engineering renaissance",
    },
    {
      profile: "./public/the_hindu.png", // Placeholder image path
      content:
        "Women in tech earn 7% more than men on average but men snag the highest salaries",
    },
    {
      profile: "./public/the_economic_times.png", // Placeholder image path
      content: 'Tech grads sign up for "bootcamps" to be more employable',
    },
    {
      profile: "./public/the_times_of_india.png", // Placeholder image path
      content:
        "Young professionals must embrace continuous upskilling in the age of AI",
    },
    {
      profile: "./public/moneycontrol.png", // Placeholder image path
      content:
        "Generative AI courses in hot demand as more Indians flock to upskilling platforms",
    },
  ];

  return (
    <section className="bg-pink-50 py-12 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          Coding Ninjas in Spotlight
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center gap-8">
          {/* Large Card */}
          <div className="w-full lg:w-3/12 flex justify-center">
            <img
              src="./public/spotlight.webp"
              alt="Spotlight"
              className="rounded-lg shadow-lg "
            />
          </div>

          {/* Small Cards */}
          <div className="w-full overflow-x-auto hide-scrollbar">
            <div className="flex gap-2 flex-nowrap">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] md:w-[250px] bg-white shadow-md rounded-lg"
                >
                  <Card title={card.profile} content={card.content} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
