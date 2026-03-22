import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} akshit5230. All rights reserved ;)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;