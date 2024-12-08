




import React from 'react';

const Work = () => {
  return (
    <section className="bg-[#142f32] px-4 py-16 md:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200 text-center">
          From Idea to Production in Days
        </h2>
        
        <p className="text-gray-300 text-center space-y-1">
          <span className="block">
            Accelerate your production with technology. Reduce
          </span>
          <span>
            downtime and optimize costs. Get a special offer now!
          </span>
        </p>

        <button 
          className="px-6 py-2 bg-[#e3ffcc] text-emerald-950 rounded-full font-medium 
                     hover:bg-green-200 focus:ring-2 focus:ring-green-300 focus:outline-none
                     transition-colors duration-200 ease-in-out
                     transform hover:scale-105"
          aria-label="Work with us"
        >
          Work with us
        </button>
      </div>
    </section>
  );
};

export default Work;