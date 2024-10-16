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
              <p className="flex w-[310px] mt-14 text-center">
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

            <div className="flex justify-center items-center flex-col mt-14 w-full">
              <div>
                <div className="grid grid-cols-2 row-span-2 gap-16">
                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <Image
                        src="/images/icon-access-anywhere.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-[450px]">
                      <h4 className="text-4xl font-serif">
                        Access Your files,anywhere
                      </h4>
                      <p className="text-center">
                        The ability to use a smartphone,tablet, or computer to
                        access your account means your files follow you anywhere
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <Image
                        src="/images/icon-security.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-[450px]">
                      <h4 className="text-4xl font-serif">
                        Security you can trust
                      </h4>
                      <p className="text-center">
                        2-factor authentication and user-controlled encryption
                        are just a couple of the security features we allow to
                        help secure your files
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <Image
                        src="/images/icon-collaboration.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex justify-center items-center flex-col w-[450px]">
                      <h4 className="text-4xl font-serif">
                        Real-time collaboration
                      </h4>
                      <p className="text-center">
                        securely share files and folders with friends,family and
                        collegues for live collaboration.No email attachments
                        required
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <div>
                      <Image
                        src="/images/icon-any-file.svg"
                        alt="phone"
                        width={100}
                        height={100}
                      />
                    </div>{" "}
                    <div className="flex justify-center items-center flex-col w-[450px]">
                      <h4 className="text-4xl font-serif">
                        Store any type of file
                      </h4>
                      <p className="text-center">
                        whether you sharing holidaya photos or work
                        documents,Fylo has you covered allowing for all file
                        types to be stored and shared.
                      </p>
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

export default HomePage;
