import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-24" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            optio nesciunt eveniet iure molestiae aliquid rerum sit, possimus
            asperiores corporis sint quia eius earum nihil ducimus, consectetur
            adipisci. Rerum, eos.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-yellow-900 parkinsans-bold">
            COMPANY
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 text-yellow-900 parkinsans-bold">
            Get in Touch
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 xxx-xxx-xxxx</li>
            <li>dynamicwing@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center parkinsans-bold text-yellow-900">
          Copyright 2024@dw.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
