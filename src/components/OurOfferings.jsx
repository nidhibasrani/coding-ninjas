import OurOfferingCards from "./OurOfferingCards";
const OurOfferings = () => {
  const data = [
    {
      title: "Full Stack Web Development",
      att1: "140+ Hrs of content",
      att2: "600+ Problems",
      att3: "10k+ Learners",
      icon: "./public/fullstack.svg",
    },
    {
      title: "Data Analytics",
      att1: "100+ Hrs of content",
      att2: "300+",
      att3: "2k+ Learners",
      icon: "./public/data Analytics.svg",
    },
  ];
  return (
    <div className="bg-white max-w-screen-lg mx-auto ">
      <div className="parent flex-col my-14">
        <div className="  ">
          <h3 className=" text-[100px] font-bold text-light text-[#e3e3e3] text-center">
            {" "}
            OUR OFFERINGS
          </h3>
        </div>
        {/* <div className="left flex justify-around gap-6 items-center">
          <div className="logo flex">
            <img src="./public/jobbootcamps.svg" />
            <p className="card text-black font-mulish flex-col">
              Job Bootcamps
            </p>
            <p className="flex-col">(for graduates)</p>
            <div />
          </div>
        </div> */}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {data.length > 0 &&
          data.map((item, i) => (
            <div key={i} className="">
              <OurOfferingCards
                title={item.title}
                att1={item.att1}
                att2={item.att2}
                att3={item.att3}
                icon={item.icon}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurOfferings;
