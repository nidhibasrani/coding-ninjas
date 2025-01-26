import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#15181a]">
      {/* Radial Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient (rgba(0, 0, 0, 0.8), #15181a)",
        }}
      />

      {/* Dotted Pattern Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.075) 2px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative text-center flex flex-col justify-center items-center gap-4 py-20 px-6">
        {/* Top text */}
        <div
          className="
          inline-block
          text-2xl 
          mb-4 
          font-semibold
          animate-gradient
          bg-gradient-multi 
          bg-[length:400%_400%]
          bg-clip-text 
          text-transparent
        "
        >
          Restricted by opportunities?
        </div>
        <div className="before"></div>

        {/* Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto !leading-tight">
          Get the tech career
          <br className="hidden md:block" />
          you deserve. Faster.
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 font-normal text-md mb-8 max-w-2xl mx-auto">
          Structured coding courses that get you there faster with confidence.
        </p>

        {/* Button */}
        <button className="bg-[#FF6B3D] hover:bg-[#ff5c2a] font-mulish text-white font-semibold text-xl px-8 py-4 rounded-lg inline-flex items-center gap-2">
          Explore offerings
          <img src="./arrow-down.svg" alt="arrow" height={25} width={25} />
        </button>

        {/* Video */}
        <div className="md:w-3/5 mt-20 mb-4 ">
          <video src="./coding ninja video.mp4" controls autoPlay></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
