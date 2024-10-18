import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchBox = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-[41rem]  absolute">
        <div className=" w-[50%] bg-[#283347] rounded-[10px]">
          <div className="flex justify-center items-center flex-col p-8">
            <div>
              <div className="flex justify-center items-center flex-col m-4">
                <h4>Get early access today</h4>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi exercitationem voluptate optio a tenetur numquam,
                  omnis facere, dolor enim odit, laudantium error et porro neque
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-[50px] bg-white text-[#3333]"
                />
                <Button
                  type="submit"
                  className="bg-[#63e1d9] py-5 px-8 rounded-[50px]"
                >
                  Subscribe
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
