import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Navbar {
  name: string;
  link: string;
}

const Navbar: Navbar[] = [
  {
    name: "Features",
    link: "#features",
  },
  {
    name: "Team",
    link: "#team",
  },
  {
    name: "Sign In",
    link: "#sign",
  },
];

const Header = () => {
  return (
    <>
      <div className=" w-full bg-[#2e3b52] top-0 p-4">
        <div className="flex justify-center items-center  top-0">
          <div className="flex justify-between items-center w-full md:w-[50%]  gap-6 md:gap-0">
            <div>
              <div>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={50}
                  className="min-w-[100px]"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-8">
              {Navbar.map((items, index) => (
                <div key={index}>
                  <Link href={items.link}>{items.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
