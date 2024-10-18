import Box from "@/app/components/Box";
import SearchBox from "@/app/components/SearchBox";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="w-full bg-[#2e3b52]">
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
        <div className="bg-bodyback bg-no-repeat  bg-cover bg-center    ">
          <div className="w-full inset-0">
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

            <div className="flex justify-center items-center flex-col  w-full">
              <div className="mt-[8rem]">
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

            <div className="bg-[#181f2b] w-full min-h-screen mt-[13rem] ">
              <div className=" flex justify-center items-center">
                <div className="grid grid-cols-2  items-center">
                  <div>
                    <div className="">
                      <Image
                        src="/images/illustration-stay-productive.png"
                        alt="imgrt"
                        width={500}
                        height={400}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center flex-col w-full ml-8">
                    <div className="w-[530px] flex flex-start items-center">
                      <h4 className="text-4xl ">
                        Stay productive, <br />
                        Wherever you are
                      </h4>
                    </div>
                    <div className=" flex justify-center items-center flex-col">
                      <p className=" p-4 w-[550px]">
                        Never let location be an issue when accessing your
                        files. Fylo has you covered for all of your file storage
                        needs.
                      </p>

                      <p className="p-4 w-[550px]">
                        Securely share files and folders with friends, family
                        and colleagues for live collaboration.No email
                        attachments required.
                      </p>
                    </div>
                    <div className="w-full">
                      <div className="flex items-center gap-2 underline decoration-[#62e0d9] p-4 underline-offset-[6px]">
                        <div>
                          {" "}
                          <div>
                            <Link href="#">See how Fylo work</Link>{" "}
                          </div>
                        </div>
                        <div>
                          <Image
                            src="/images/icon-arrow.svg"
                            alt="ffg"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col">
                <Box />
                <SearchBox />
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default HomePage;
