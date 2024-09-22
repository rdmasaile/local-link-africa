import React from "react";

const InfoSection = () => {
  return (
    <div className="w-[90%] m-auto py-16">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left side: Features */}
        <div className="md:w-1/2 space-y-10">
          {/* 100+ Sections */}
          <div className="flex items-start">
            <div className="mr-4 text-gray-400">
              <i className="fas fa-cubes fa-2x"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">100+ SECTIONS</h3>
              <p className="text-gray-600">
                Wireframe Kit features over 100 professionally designed sections
                all categorized and saved to the Divi Library.
              </p>
            </div>
          </div>

          {/* Easily Customizable */}
          <div className="flex items-start">
            <div className="mr-4 text-gray-400">
              <i className="fas fa-sliders-h fa-2x"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">EASILY CUSTOMIZABLE</h3>
              <p className="text-gray-600">
                Wireframe Kit is extremely flexible & customizable. Check out
                our videos on how to make customizations using simple CSS.
              </p>
            </div>
          </div>

          {/* Save Precious Time */}
          <div className="flex items-start">
            <div className="mr-4 text-gray-400">
              <i className="fas fa-clock fa-2x"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">SAVE PRECIOUS TIME</h3>
              <p className="text-gray-600">
                Our goal with Wireframe Kit is to save designers precious time,
                allowing them to create sites faster.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: Part of a System */}
        <div className="md:w-1/2 space-y-6 mt-12 md:mt-0">
          <h3 className="text-3xl font-bold">PART OF A SYSTEM</h3>
          <p className="text-gray-600">
            is part of our 3 Super Themes from . All Super Themes use the same
            sections, making design efficient.
          </p>
          <p className="text-gray-400 italic text-lg">
            This system will dramatically increase your efficiency and provide
            you with solid designs to present to your client.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-700">
            VIEW VIDEO
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
