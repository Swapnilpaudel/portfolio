import React from "react";

const Footer = ({ id }) => {
  return (
    <div id={id} className="text-white flex flex-row justify-between">
      <div className="flex flex-row justify-between">
        <p className="mr-1">Contact me-</p>
        <p className="mr-5">9845360777</p>
        <p className="mr-1">Gmail-</p>
        <p>swapnilpaudel@gmail.com</p>
      </div>

      <span className="flex-2">&copy; 2024 Swapnil</span>
    </div>
  );
};

export default Footer;
