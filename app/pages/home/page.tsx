import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center flex-col mt-18">
          <div>
            <Image
              src="/images/illustration-intro.png"
              alt="laptop"
              width={550}
              height={400}
            />
          </div>
        </div>
        <div className="bg-bodyback bg-no-repeat  bg-cover  min-h-screen relative ">
          <div className="w-full absolute mt-28">
            <div className="flex justify-center items-center flex-col ">
              <h3 className="font-serif w-[625px] text-4xl text-nowrap text-center">
                All your files in one secure location
                <br /> accessible anywhere.
              </h3>
              <p className="flex w-[310px] mt-14">
                Fylo stores all your most important files in one secure
                location.Access them wherever you need, share and collaborate
                with friends family, and co-Workers
              </p>
              <div className="mt-10">
                <Button className="bg-blue-300 text-[#fefefe] rounded-2xl px-4">
                  Get Started
                </Button>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col mt-14">
              <div>
                <div className="grid grid-cols-2 row-span-2 gap-8">
                  <div>
                    <div>
                      <Image
                        src="/images/icon-access-anywhere.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>content</div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/icon-security.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>content</div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/icon-collaboration.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>content</div>
                  </div>
                  <div>
                    <div>
                      <Image
                        src="/images/icon-any-file.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>{" "}
                    <div>content</div>
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

export default HomePage;
