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
      <div className=" w-full ">
        <div className="flex justify-center items-center m-6">
          <div className="flex justify-between items-center w-[50%]">
            <div>
              <div>
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={50}
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
