



import React from 'react';
import { GiMoebiusTriangle, GiStripedSun, GiTabiBoot } from 'react-icons/gi';

const Empower = () => {
  return (
    <div className="bg-[#f1f5f9] flex flex-col md:flex-row items-center justify-between p-6 lg:p-20">
      <div className="flex flex-col lg:w-1/2 space-y-4 lg:space-y-6">
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          <span className="block">Empowering Top Companies</span>
          <span>With Seamless Integrations</span>
        </h3>
        <p className="text-sm lg:text-base text-gray-500">
          <span className="block">Experience seamless connections with our innovative solutions, designed</span>
          <span className="block">to effortlessly integrate with your existing systems, enhance productivity,</span>
          <span>and drive your business towards greater success.</span>
        </p>

<button 
          className="w-[200px] py-2 bg-[#e3ffcc] text-emerald-950 rounded-full font-medium 
                     hover:bg-[#dbfcc0] focus:ring-2 focus:ring-green-300 focus:outline-none
                     transition-colors duration-200 ease-in-out
                     transform hover:scale-105"
          aria-label="Work with us"
        >
          Work with us
        </button>

      </div>

      <div className="flex justify-center lg:justify-end lg:w-1/2 mt-8 lg:mt-0">
        <div className="bg-[#e3ffcc] flex items-center justify-center rounded-md w-[280px] h-[300px]  lg:w-[420px] lg:h-[389px] relative">
          <div className="relative rounded-full p-8 lg:p-16 border border-gray-300">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-md">
              <GiStripedSun className="text-xl text-green-500" />
            </div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white p-1 rounded-md">
              <GiMoebiusTriangle className="text-xl text-purple-500" />
            </div>

            <div className="relative rounded-full p-12 lg:p-14 border border-gray-300">
              <div className="absolute -top-2 left-1/2 -translate-x-[-30px] bg-white p-1 rounded-md">
                <GiTabiBoot className="text-xl text-pink-500" />
              </div>
              <div className="absolute -bottom-1 left-1/2 -translate-x-16 bg-white p-1 rounded-md">
                <GiTabiBoot className="text-xl text-green-500" />
              </div>
              <div className="absolute -left-2 top-1/2 -translate-y-[20px] bg-white p-1 rounded-md">
                <GiMoebiusTriangle className="text-xl text-blue-500" />
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-[-30px] bg-white p-1 rounded-md">
                <GiMoebiusTriangle className="text-xl text-blue-800" />
              </div>

              <div className="relative rounded-full p-12 lg:p-16 border border-gray-300">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-1 rounded-md">
                  <GiMoebiusTriangle className="text-xl text-green-500" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white p-1 rounded-md">
                  <GiMoebiusTriangle className="text-xl text-blue-500" />
                </div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white p-1 rounded-md">
                  <GiStripedSun className="text-xl text-purple-500" />
                </div>
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-1 rounded-md">
                  <GiTabiBoot className="text-xl text-cyan-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
