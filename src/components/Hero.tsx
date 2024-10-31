"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const [crackerVisible, setCrackerVisible] = useState<number | null>(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const burstCracker = () => {
    const crackerIds = [1, 2, 3, 4]; // Array of cracker IDs
    const randomCracker =
      crackerIds[Math.floor(Math.random() * crackerIds.length)];
    setCrackerVisible(randomCracker);
    setIsButtonClicked(true);

    setTimeout(() => {
      setIsButtonClicked(false);
      setCrackerVisible(null);
    }, 4000);
  };
  return (
    <div className="relative h-[820px] overflow-hidden">
      {/* First gradient layer (left to right) */}
      <div
        className=" 
       inset-0 bg-gradient-to-l from-[#8D287F] to-[#D15445] opacity-100"
      >
        {/* Second gradient layer (bottom to top) */}
        <div className=" inset-0 bg-gradient-to-t from-[rgba(247,182,84,0.2)] to-[rgba(225,38,84,0.2)] opacity-100 ">
          <div className=" w-[355.38px] mx-auto lg:w-full lg:w-full lg:h-[832px] ">
            {/* chakara yellow */}
            <div className=" h-[348.39px] -mt-[210px] lg:w-[733.38px] lg:h-[758px] lg:-mt-[10px] lg:-ml-[440px] ">
              <Image
                src="/yellow-chakra.png"
                alt="yellow chakra"
                width={355.38}
                height={348.39}
                className=" w-[355.38px] h-[348.39px] lg:h-[758px] lg:w-[773.21px] animate-spin360   lg:mt-[5px] my-auto"
              />
            </div>

            <div className="lg:mt-[102px]">
              {/* happy diwali */}

              <div className="   mx-auto flex flex-row   items-center justify-center  lg:-mt-[750px] ">
                {/* Image */}
                <div className=" lg:w-[619px] lg:h-[126px] w-[273px] h-[64px] text-[42px] lg:text-[96px] text-white gap-0 font-playfair font-extrabold leading-[55.99px] lg:leading-[127.97px]  lg:ml-[100px]">
                  <div>Happy Diwali</div>
                </div>
                {/* deepak 1 Image  */}
                <div className="w-[79.25px] h-[54.55px] lg:w-[157.21px] lg:[121px]">
                  <Image
                    src="/deepak-1.png"
                    alt="deep1"
                    width={79.25}
                    height={54.55}
                    loading="lazy"
                    className=" mb-6 relative w-[79.25px] h-[54.55px] lg:h-[121px] lg:w-[157px] lg:ml-[6px] lg:-mt-[30px]"
                  />

                  <Image
                    src="/Deepak.gif"
                    alt="deepak gif"
                    width={50}
                    height={50}
                    className=" absolute -mt-[88.5px] ml-[22px] w-[30px] h-[30] lg:w-[50px] lg:h-[100px] lg:-mt-[195px] lg:ml-[53px]"
                  />
                </div>
              </div>
              {/* wishes */}
              <div className="h-[191px]  mt-2 font-merriweather font-semibold text-[20px] leading-[32px] text-white relative lg:text-[36px] lg:leading-[45.25px] lg:w-[895px] mx-auto lg:mt-[19px] lg:ml-[360px]">
                Let’s dive into the sweets, light up the crackers, share the
                laughs and build memories that light up your hearts as much as
                the night sky. Let’s celebrate!
              </div>

              <Image
                src="/Cracker 2.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className={` absolute w-[1800px] h-[1800px] -mt-[300px] -ml-[20px]  lg:-mt-[1000px] ${
                  crackerVisible == 2 ? "" : "hidden"
                } `}
              />

              <Image
                src="/Cracker 3.gif"
                alt="deepak gif"
                width={1000}
                height={1800}
                className={`absolute -mt-[85px] -ml-[14px] lg:-mt-[620px] lg:ml-[500px] ${
                  crackerVisible == 3 ? "" : "hidden"
                } `}
              />

              <Image
                src="/Cracker 1.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className={` absolute -mt-[300px] -ml-[20px] w-[1800px] h-[1800px] lg:-mt-[1000px] ${
                  crackerVisible == 1 ? "" : "hidden"
                } `}
              />

              <Image
                src="/Cracker 4.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className={` absolute -mt-[300px] -ml-[20px] lg:-mt-[1000px] ${
                  crackerVisible == 4 ? "" : "hidden"
                } `}
              />

              {/* button */}

              <div className="lg:flex lg:mt-[35px] lg:ml-[540px]">
                {/* brust cracker button */}

                <div className="ml-[15px]  h-[64px]  ">
                  <Button
                    onClick={burstCracker}
                    variant="outline"
                    className={`  w-[227px] h-[43.97px] lg:w-[331px] lg:h-[64px]  rounded-full  ${
                      isButtonClicked ? "bg-yellow-500 text-black" : "bg-white"
                    }`}
                  >
                    <p className="text-black font-medium font-poppins text-[21.95px] leading-[32.92px] ">
                      Burst a Cracker!
                    </p>
                  </Button>
                </div>
                {/* get blessing */}
                
                  <div className=" lg:mt-0 ml-[15px] z-30 relative ">
                  <Link href="#blessing">
                    <Button
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        boxShadow:
                          "0.65px 3.26px 9.14px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      variant="outline"
                      className="bg-transparent  w-[188px] h-[41.44px] lg:w-[288px] lg:h-[64px]  rounded-full border-2 border-white "
                    >
                      <p className="text-white font-medium font-poppins text-[20.89px] leading-[31.33px] ">
                        Get Blessings
                      </p>
                    </Button>
                    </Link>
                  </div>
                
              </div>

              {/* Images */}

              {/* clip path  */}
              <div className=" -mt-[0.2rem] ml-[10]  w-[58.23px] h-[199px] lg:h-[364pxpx] lg:w-[106.51px] z-20 flex justify-items-end lg:ml-[1700px] lg:-mt-[500px]">
                <Image
                  src="/Clip path group.png"
                  alt="clip-path"
                  width={106.51}
                  height={364}
                  className="w-[58.23px] h-[199px] lg:w-[106.51px] lg:h-[364px] "
                />
              </div>
              {/* Honey */}
              <div
                className=" w-[132.24px]  h-[145.42px] lg:w-[163.79px] lg:h-[180.96px]
              ml-[16rem]
              -mt-56 lg:mt-[250px] lg:ml-[1730px] "
                style={{ transform: "translateY(-50%)" }}
              >
                <Image
                  src="/honey.png"
                  alt="honey"
                  width={163.78}
                  height={180.96}
                  className="w-[132px] h-[145px] lg:w-[163.78px] lg:h-[180.96px]"
                />
              </div>
            </div>

            <div className="  w-full mt-9 mb-5 lg:ml-[1400px]">
              <div className=" -mt-[25px] ml-[11rem] relative z-10 lg:ml-[] lg:-mt-[150px]">
                <Image
                  src="/laddu-1.png"
                  alt="ladu1"
                  height={285.65}
                  width={256.36}
                  className="w-[182.74] h-[146.65] lg:w-[285.65px] lg:h-[256.36px]"
                />
              </div>

              <div className="z-0 w-[168px] lg:w-[260.5px]  ml-[60px] -mt-[7.3rem] relative lg:-mt-[200px] lg:-ml-[60px]">
                <Image
                  src="/laddu-2.png"
                  alt="ladu2"
                  height={180.55}
                  width={260.5}
                  className="w-[168.64px] h-[104.52px] lg:w-[260px] lg:h-[180.55px] "
                />
              </div>

              <div className=" w-[104px]  -mt-[90px] -ml-[10px] relative z-10 lg:-ml-[140px] lg:-mt-[180px]">
                <Image
                  src="/deepak-2.png"
                  alt="deepak2"
                  height={170.47}
                  width={259}
                  className="w-[122.5px] h-[87.63px] lg:w-[259px] lg:h-[170.47px]"
                />
                <Image
                  src="/Deepak.gif"
                  alt="deepak gif"
                  width={70}
                  height={90}
                  className="w-[50px] h-[50px] lg:h-[90px] lg:w-[70px]  absolute -mt-[105px] ml-[46px] lg:-mt-[200px] lg:ml-[35px]"
                />
              </div>
            </div>
            <div className="mt-14 ">.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
