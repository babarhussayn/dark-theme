import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <>
      <div className="w-full bg-[#181f2b] relative mt-[6rem] ">
        <div className="flex justify-center items-center ">
          <div className="absolute top-0 md:left-[17%] left-[15%] transform -translate-x-1 -translate-y-9  z-0">
            <Image
              src="/images/bg-quotes.png"
              alt="comma"
              width={80}
              height={10}
            />
          </div>
          <div className="  z-10 flex justify-center items-center ">
            <div className="flex justify-between items-center flex-col md:flex-row gap-2 ">
              <div className="md:w-[400px] w-[300px] bg-[#283347] shadow-xl rounded-[16px]">
                <div className="p-4 m-4">
                  <div className="">
                    <p>
                      Fylo has improved our team productivity by an order of
                      magnitude. Since making the switch our team has become a
                      well-oiled collaboration machine.
                    </p>
                  </div>
                  <div className="flex justify-start items-center gap-8 mt-8">
                    <div>
                      <div className=" w-full">
                        <Image
                          src="/images/profile-1.jpg"
                          alt="p-1"
                          width={50}
                          height={30}
                          className="rounded-[36px]"
                        />
                      </div>
                    </div>
                    <div>
                      <h4>Sumeer</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[400px] w-[300px] bg-[#283347] shadow-xl rounded-[16px]">
                <div className="p-4 m-4">
                  <div>
                    {" "}
                    <h4>
                      Fylo has improved our team productivity by an order of
                      magnitude. Since making the switch our team has become a
                      well-oiled collaboration machine.
                    </h4>
                  </div>
                  <div className="flex justify-start items-center gap-8 mt-8">
                    <div>
                      <div className=" w-full">
                        <Image
                          src="/images/profile-2.jpg"
                          alt="p-1"
                          width={50}
                          height={30}
                          className="rounded-[36px]"
                        />
                      </div>
                    </div>
                    <div>
                      <h4>Sumeer</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[400px] w-[300px] bg-[#283347] shadow-xl rounded-[16px]">
                <div className="p-4 m-4">
                  <div>
                    {" "}
                    <h4>
                      Fylo has improved our team productivity by an order of
                      magnitude. Since making the switch our team has become a
                      well-oiled collaboration machine.
                    </h4>
                  </div>
                  <div className="flex justify-start items-center gap-8 mt-8">
                    <div>
                      <div className=" w-full">
                        <Image
                          src="/images/profile-3.jpg"
                          alt="p-1"
                          width={50}
                          height={30}
                          className="rounded-[36px]"
                        />
                      </div>
                    </div>
                    <div>
                      <h4>Sumeer</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;
