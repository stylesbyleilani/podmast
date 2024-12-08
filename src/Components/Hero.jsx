

import Image from "next/image";
import { ArrowUpRight, CircleAlertIcon, Grid } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='flex justify-center items-center bg-[#f1f5f9]' id='home'>
      <div className="hero-contents mt-20 w-full max-w-6xl px-4 sm:px-8 lg:px-12">
        <div className="relative z-10 text-center mt-10"> 
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl tracking-wide text-[#142f32]">
            <span className="block">The future of Manufacturing</span>
            <span className="block mt-2">With Latest Technology</span>
          </h1>
          <p className="mt-1 p-3 md:p-5 text-base sm:text-lg text-center text-gray-500 max-w-4xl mx-auto">
            Learning to do their best work with others, in harmony and safety, while achieving excellence through collaborative growth.
          </p>
        </div>

        <div className="hidden lg:flex justify-center lg:mt-5 text-lg font-medium space-x-7 items-center"> 
          <a  href="/register" className='font-bold border-none text-[#e3ffcc] bg-[#142f32] rounded-full py-3 px-7 text-center'>
            Get Started 
          </a>
          <button className='font-bold rounded-full text-[#142f32] bg-white py-3 px-7'> 
            Try Demo
          </button>
        </div> 

        <div className="star-div mt-5 flex gap-3 items-center justify-center">
          <div className="stars flex text-lg gap-1"> 
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-300 text-lg"/>  
            ))}
          </div>
          <div className="po">
            <h1 className="font-semibold text-gray-900 text-lg">5.0</h1>
          </div>
        </div>

        <div className="div flex justify-center gap-3 mt-2 items-center">
          <p className="text-gray-400">from 80 +</p>
          <p className="text-gray-900 font-semibold underline">reviews</p>
        </div>

        <div className="div flex flex-col md:flex-row items-center gap-7">
          <div className="div-1">
            <Image
              alt="img"
              src="/m1.jpg"
              width={230}
              height={300}
              className="h-[300px] w-[230px] rounded-lg object-cover"
            />
          </div>

          <div className="div-2 lg:mt-24 bg-[#142f32] flex flex-col justify-center items-center rounded-lg text-gray-200 w-full sm:w-[180px] lg:w-[180px] h-[200px] p-2">
            <h1 className="font-medium text-4xl">100+</h1>
            <p className="text-gray-400 mt-2 text-center">
              <span className="block">Our Esteemed</span>
              <span className="block">Clients and</span>
              <span>Partners</span>
            </p>
          </div>

          <div className="div-3 lg:mt-28  bg-white h-[170px] rounded-lg w-full sm:w-[210px] lg:w-[210px] p-3">
            <div className="icon flex justify-between items-center">
              <div className="grid bg-[#e3ffcc] p-1 rounded-md"> 
                <Grid/> 
              </div> 
              <BsThreeDotsVertical/>
            </div>
            <div className="div flex gap-2 mt-2">
              <h1 className="text-xl text-gray-700">Total Projects</h1>
              <ArrowUpRight/>
              <p className="text-[#142f32]">8%</p>
            </div>
            <h1 className="font-semibold mt-4 text-3xl">1951+</h1>
            <p className="text-gray-400 text-sm">
              Increase of <span className="text-green-400">126</span> this month 
            </p>
          </div>

          <div className="div-4 lg:mt-24 bg-[#e3ffcc] flex flex-col justify-center items-center rounded-lg text-gray-900 w-full sm:w-[160px] lg:w-[160px] h-[200px] p-2">
            <h1 className="font-medium text-4xl">6+</h1>
            <p className="text-gray-800 mt-2 text-center">
              <span className="block">Years of</span>
              <span className="block">Dedicated</span>
              <span>Service</span>
            </p>
          </div>    

          <div className="div-5 bg-[#142f32] flex flex-col justify-center lg:items-start items-center rounded-lg text-gray-200 w-full sm:w-[180px] lg:w-[180px] h-[300px] p-2">
            <div className="div mt-12">
              <CircleAlertIcon/>
              <p className="text-gray-400 mt-2 text-start">
                <span className="block">Archive Optimal</span>
                <span className="block">Efficiency and Boost</span>
                <span>Productivity</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
