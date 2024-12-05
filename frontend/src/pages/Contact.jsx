import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-2xl pt-12 text-center border-t">
        <Title text1={"About "} text2={"Us"} />
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ea,
          maiores illum mollitia, hic magni tempora tenetur ad voluptates nemo
          sed quidem voluptate, blanditiis repellendus esse vero quibusdam
          magnam non.
        </p>
      </div>

      <div className="text-2xl pt-32 text-right">
        <div className="flex flex-col sm:flex-row border-gray-400 ">
          <img
            className="w-full sm:w-1/2"
            src={assets.contact_hero}
            alt="hero"
          />

          <div className="w-full sm:w-1/2  items-center text-center  py-10 sm:py-0">
            <div className="pt-4 text-xl">
              <Title text1={"Contact "} text2={"Us"} />
            </div>
            <div className="text-[#414141] pt-8 text-lg">
              <p className="parkinsans-bold">e-mail: </p>{" "}
              <p className="parkinsans-bold"> dynamicwing@gmail.com</p>
            </div>
            <div className="text-[#414141] pt-8 text-lg">
              <p className="parkinsans-bold">Call: </p>{" "}
              <p className="parkinsans-bold"> +91 xxx-xxx-xxxx</p>
            </div>
            <div className="text-[#414141] pt-8 text-lg">
              <p className="parkinsans-bold">Store: </p>{" "}
              <p className="parkinsans-bold"> Jamshedpur, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
