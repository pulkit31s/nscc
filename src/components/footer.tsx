import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">NSCC VIT Chennai</h2>
            <p className="text-gray-400">
              Newton School Coding Club at VIT Chennai.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li>
  <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
</li>
<li>
  <Link href="/events" className="text-gray-400 hover:text-white">Events</Link>
</li>
<li>
  <Link href="#about" className="text-gray-400 hover:text-white">About</Link>
</li>
<li>
  <Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link>
</li>
</ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {/* Add your social media icon SVG here */}
                </svg>
              </a>
              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} NSCC VIT Chennai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;