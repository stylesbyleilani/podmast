






import React from 'react';
import { FaAppStoreIos, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-200 px-4 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h1 className="text-lg font-semibold text-gray-300 mb-3">Prodmast</h1>
          <p className="text-gray-400">
            Our solutions make production
            <br />
            faster and cheaper. Contact us for
            <br />
            more information
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-3">Company</h2>
          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#home" className="hover:text-gray-200">About us</a>
            <a href="#about" className="hover:text-gray-200">Customers</a>
            <a href="#sitemap" className="hover:text-gray-200">Newsroom</a>
            <a href="#faq" className="hover:text-gray-200">Events</a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-300 mb-3">Industries</h2>
          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#metal" className="hover:text-gray-200">Precision Metalforming</a>
            <a href="#manufacturing" className="hover:text-gray-200">Industrial Manufacturing</a>
            <a href="#tech" className="hover:text-gray-200">High Tech & Electronics</a>
            <a href="#aerospace" className="hover:text-gray-200">Aerospace</a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-300 mb-3">Products</h2>
          <div className="flex flex-col gap-3 text-gray-400">
            <a href="#mes" className="hover:text-gray-200">Manufacturing Execution System</a>
            <a href="#erp" className="hover:text-gray-200">Enterprise Resource Planning</a>
            <a href="#qms" className="hover:text-gray-200">Quality Management System</a>
            <a href="#scp" className="hover:text-gray-200">Supply Chain Planning</a>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-lg text-gray-300 mb-3">Get In Touch</h2>
          <div className="flex flex-col gap-3 text-gray-400">
            <p>hello@prodmast.com</p>
            <div className="flex gap-3">
              <a href="#linkedin" className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                <FaLinkedinIn />
              </a>
              <a href="#app" className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                <FaAppStoreIos />
              </a>
              <a href="#facebook" className="p-2 bg-gray-600 rounded-md hover:bg-gray-500">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-[2px]  text-green-300 my-6" />

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">©2024 Prodmast, All rights reserved</p>
        <div className="flex gap-6 text-gray-400">
          <a href="#terms" className="hover:text-gray-200">Terms & Conditions</a>
          <a href="#privacy" className="hover:text-gray-200">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


