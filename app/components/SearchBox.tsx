import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center md:mt-[50rem] mt-[80rem]  absolute">
        <div className=" md:w-[35%] w-[75%] bg-[#283347] rounded-[10px]">
          <div className="flex justify-center items-center flex-col md:p-8 p-4">
            <div>
              <div className="flex justify-center items-center flex-col ">
                <h4 className="md:text-4xl">Get early access today</h4>
                <p className=" m-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi exercitationem voluptate optio a tenetur numquam,
                  omnis facere, dolor enim odit, laudantium error et porro neque
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="flex w-full max-w-sm items-center space-x-2 flex-col md:flex-row gap-4 md:gap-0">
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-[50px] bg-white text-[#3333] "
                />
                <Button
                  type="submit"
                  className="bg-[#63e1d9] py-5 px-8 rounded-[50px]"
                >
                  Get Started For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
