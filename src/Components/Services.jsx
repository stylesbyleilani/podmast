


import React from 'react';
import { 
  CloudLightning, 
  ArrowUpRight, 
  Box, 
  LineChart, 
  Wrench,
  BarChart3
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className={`
    group p-6 rounded-lg backdrop-blur-sm transition-all duration-300
    bg-[#144045]/90 hover:bg-[#144045]/95
    hover:transform hover:-translate-y-1 hover:shadow-xl
    border border-gray-200/10
  `}>
    <div className="flex justify-between items-center mb-4">
      <Icon className="w-6 h-6 text-gray-200" />
      <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
    </div>
    
    <h2 className="font-semibold text-lg text-gray-200 mb-2">
      {title}
    </h2>
    
    <p className="text-gray-400 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: CloudLightning,
      title: "Production and Assembly",
      description: "Details on production processes, assembly, capacity and product type"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Comprehensive maintenance solutions for manufacturing equipment"
    },
    {
      icon: Box,
      title: "Inventory Management",
      description: "Smart inventory tracking and optimization systems"
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Real-time monitoring and performance optimization tools"
    },
    {
      icon: BarChart3,
      title: "Quality Control",
      description: "Advanced quality assurance and control mechanisms"
    },
    {
      icon: CloudLightning,
      title: "Cloud Integration",
      description: "Seamless cloud-based manufacturing solutions"
    }
  ];

  return (
    <div className="bg-[#142f32] mt-7 lg:mt-2 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-200 mb-4">
            <span className="block">Efficient and Integrated</span>
            <span>Manufacturing Services</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Simple operations with our efficient quality-focused services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;