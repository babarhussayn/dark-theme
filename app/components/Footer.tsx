import Image from "next/image";
import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#0C1524] overflow-hidden ">
        <div className="flex justify-center items-center  md:mt-[10rem] mt-[22rem]  ">
          <div className="flex justify-center items-center flex-col md:flex-row md:w-[1200px] w-[600px] ">
            <div className="flex justify-between items-center flex-col gap-12 p-14 w-full">
              <div className="w-full">
                <div className="">
                  <Image
                    src="/images/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="flex justify-start items-center gap-6 w-full">
                <Image
                  src="/images/icon-location.svg"
                  alt="map"
                  width={20}
                  height={10}
                />
                <div className="w-full">
                  <h4>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis natus.
                  </h4>
                </div>
              </div>
            </div>
            <div className=" flex justify-center md:items-center items-start flex-col gap-4 md:w-full w-[75%]">
              <div className="flex justify-center  items-center gap-6">
                <div>
                  <Image
                    src="/images/icon-phone.svg"
                    alt="phone"
                    width={20}
                    height={30}
                  />
                </div>
                <div className="">
                  <h4>+1-023-569-874-5</h4>
                </div>
              </div>
              <div className="flex justify-center  items-center gap-6">
                <div>
                  <Image
                    src="/images/icon-email.svg"
                    alt="phone"
                    className="min-w-[20px]"
                    width={20}
                    height={30}
                  />
                </div>
                <div>
                  <h4>example@gamil.com</h4>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:items-center items-start flex-col md:w-full w-[85%] ">
              <div className="m-4 md:m-0 ">
                <h4>About us</h4>
                <ul className=" ">
                  <li className="mt-2">Jobs</li>
                  <li className="mt-2">Press</li>
                  <li className="mt-2">Blog</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:items-center items-start flex-col md:w-full w-[85%]">
              <div className="m-4 md:m-0 ">
                <h4>Contact us</h4>
                <ul>
                  <li className="mt-2">Terms</li>
                  <li className="mt-2">Privacy</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center w-full m-4 md:m-0">
              <div className="flex justify-items-center gap-4">
                <div className="">
                  <TiSocialFacebookCircular
                    fontSize={50}
                    className="hover:text-[#83d9e9] cursor-pointer"
                  />
                </div>
                <div className="">
                  <TiSocialTwitterCircular
                    fontSize={50}
                    className="hover:text-[#83d9e9] cursor-pointer"
                  />
                </div>
                <div className="">
                  <TiSocialInstagram
                    fontSize={45}
                    className="hover:text-[#83d9e9] cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
