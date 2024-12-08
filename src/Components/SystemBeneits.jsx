


"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CircleDot, Grid } from 'lucide-react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const SystemBenefits = () => {
  const [isClient, setIsClient] = useState(false);

  const progressData = [
    { label: 'Finished', percentage: '10%', width: 'w-1/4' },
    { label: 'In Progress', percentage: '13%', width: 'w-2/3' },
    { label: 'Rejected', percentage: '11%', width: 'w-1/2' }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-28 lg:gap-20 md:gap-12 p-8 bg-gray-50  justify-between items-center">
      <div className="bg-white rounded-xl p-6 shadow-sm w-full md:w-96 relative">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Projects</p>
              <h2 className="text-2xl font-semibold">1475</h2>
            </div>
            <span className="text-green-500 text-sm">↑ 4.3%</span>
          </div>
          
          <div className="relative">
            <div className="space-y-4">
              {progressData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-600">{item.percentage}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className={`h-full bg-gray-300 rounded-full ${item.width}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-[-45px] -bottom-24 bg-white h-[170px] w-[210px] p-3 rounded-lg shadow-md">
              <div className="flex justify-between items-center">
                <div className="grid bg-[#e3ffcc] p-1 rounded-md"> 
                  <Grid /> 
                </div> 
                <BsThreeDotsVertical />
              </div>
              <div className="flex gap-2 mt-2">
                <h1 className="text-xl text-gray-700">Total Projects</h1>
                <ArrowUpRight />
                <p className="text-[#142f32]">8%</p>
              </div>
              <h1 className="font-semibold mt-4 text-3xl">1951+</h1>
              <p className="text-gray-400 text-sm">
                Increase of <span className="text-green-400">126</span> this month 
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:max-w-xl">
        <h1 className="text-2xl font-semibold mb-2">
          Key Benefits of Our System for Your Business Efficiency
        </h1>
        <p className="text-gray-600 mb-8">
          Our systems boost productivity, cut costs, and drive business growth.
        </p>
        
        <div className="space-y-6">
          {[
            {
              title: "Boosting Quality with Tech",
              description: "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards."
            },
            {
              title: "Optimization Production Process",
              description: "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output."
            },
            {
              title: "AI-Driven Production",
              description: "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results."
            }
          ].map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <div className="mt-1">
                <CircleDot className="text-green-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemBenefits;
