


import React from 'react';
import { LineChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { GoHorizontalRule } from "react-icons/go";

const PricingCard = ({ title, description, price, features }) => (
  <div className="flex flex-col gap-3 bg-[#282930] rounded-lg p-6 w-full">
    <h2 className="font-semibold text-lg text-gray-200">{title}</h2>
    <p className="text-gray-500">{description}</p>
    
    <h3 className="font-semibold text-xl mt-2 text-gray-200">
      ${price} <span className="text-gray-500 font-medium">/month</span>
    </h3>

    <a href="/register" className="p-2 border border-green-400 rounded-full text-center text-gray-200 mt-4 hover:bg-green-400 hover:text-gray-900 transition-colors">
      Get Started
    </a>
    <div className="flex gap-2 text-gray-200 justify-center items-center">
      <hr className="w-28 h-1" />
      <span>Features</span>
      <hr className="w-28 h-1" />
    </div>
    
    <div className="space-y-3 mt-3">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-3 items-start">
          <CheckCircle2 className="w-5 h-5 text-gray-200 flex-shrink-0" />
          <p className="text-gray-500">{feature}</p>
        </div>
      ))}
    </div>
  </div>
);

const Pricing = () => {
  const pricingData = {
    starter: {
      title: "Starter",
      description: "This package offers basic features you need to get started",
      price: 39,
      features: [
        "Production up to 10,000 units per month",
        "24/7 technical support",
        "Access the production dashboard",
        "Initial setup guide"
      ]
    },
    enterprise: {
      title: "Enterprise",
      description: "This provides full access to all premium features",
      price: 99,
      features: [
        "Unlimited production units",
        "Dedicated account manager",
        "Tailored Manufacturing solutions",
        "Predictive production optimization"
      ]
    }
  };

  return (
    <div className="bg-neutral-900 p-4 md:p-8 lg:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-200">
            Tailored Plans for Your
            <span className="block">Manufacturing Scale</span>
          </h1>
          <p className="text-gray-500 mt-2">
            Flexible pricing for any business size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-6">
          <PricingCard {...pricingData.starter} />
          <PricingCard {...pricingData.enterprise} />
        </div>

        <div className="bg-[#142f32] p-6 rounded-lg text-center">
          <h2 className="font-semibold text-lg text-gray-200 mb-3">
            Professional
          </h2>
          <p className="text-gray-500 mb-4 max-w-2xl mx-auto">
            <span className='block'>Designed for greater flexibility, this solution offers
            </span>
           <span>advance tools
           for custom tailoring to your needs</span>  
          </p>
          <button className="px-6 py-2 bg-[#e3ffcc] text-[#142f32] rounded-full font-medium hover:bg-[#d0edb9] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;