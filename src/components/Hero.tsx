// import Image from "next/image";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[820px] overflow-hidden">
      {/* First gradient layer (left to right) */}
      <div
        className="
       inset-0 bg-gradient-to-l from-[#8D287F] to-[#D15445] opacity-100"
      >
        {/* Second gradient layer (bottom to top) */}
        <div className=" inset-0 bg-gradient-to-t from-[rgba(247,182,84,0.2)] to-[rgba(225,38,84,0.2)] opacity-100">
          <div className=" w-[355.38px] mx-auto md:w-full lg:w-full">
            {/* chakara yellow */}
            <div className=" h-[348.39px] -mt-[210px]   ">
              <Image
                src="/yellow-chakra.png"
                alt="yellow chakra"
                width={355.38}
                height={348.39}
                className=" animate-spin360"
              />
            </div>

            <div className="md:mt-[102px]">
              {/* happy diwali */}

              <div className="   mx-auto flex flex-row   items-center justify-center   ">
                {/* Image */}
                <div className=" md:w-[619px] md:h-[126px] w-[273px] h-[64px] text-[42px] md:text-[96px] text-white gap-0 font-playfair font-extrabold leading-[55.99px] md:leading-[127.97px]  ">
                  <div>Happy Diwali</div>
                </div>
                {/* deepak 1 Image  */}
                <div className="w-[79.25px] h-[54.55px] md:w-[157.21px] md;[121px]">
                  <Image
                    src="/deepak-1.png"
                    alt="deep1"
                    width={79.25}
                    height={54.55}
                    loading="lazy"
                    className=" mb-6 relative"
                  />

                  <Image
                    src="/Deepak.gif"
                    alt="deepak gif"
                    width={30}
                    height={30}
                    className=" absolute -mt-[88.5px] ml-[22px]"
                  />
                </div>
              </div>
              {/* wishes */}
              <div className="h-[191px]  mt-2 font-merriweather font-semibold text-[20px] leading-[32px] text-white relative">
                Let’s dive into the sweets, light up the crackers, share the
                laughs and build memories that light up your hearts as much as
                the night sky. Let’s celebrate!
              </div>

              <Image
                src="/Cracker 2.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className=" absolute -mt-[300px] -ml-[20px] hidden"
                id="1"
              />

              <Image
                src="/Cracker 3.gif"
                alt="deepak gif"
                width={1000}
                height={1800}
                className=" absolute -mt-[85px] -ml-[14px] hidden"
              />

<Image
                src="/Cracker 1.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className=" absolute -mt-[300px] -ml-[20px] hidden"
              />

<Image
                src="/Cracker 4.gif"
                alt="deepak gif"
                width={1800}
                height={1800}
                className=" absolute -mt-[300px] -ml-[20px] hidden"
              />

              {/* button */}

              <div className="md:flex">
                {/* brust cracker button */}

                <div className="ml-[15px] md:w-[331px] h-[64px]">
                  <Button
                    variant="outline"
                    className="bg-white  w-[227px] h-[43.97px]  rounded-full"
                  >
                    <p className="text-black font-medium font-poppins text-[21.95px] leading-[32.92px] ">
                      Burst a Cracker!
                    </p>
                  </Button>
                </div>
                {/* get blessing */}
                <Link href="#blessing">
                  <div className=" md:mt-0 ml-[15px] z-30 relative ">
                    <Button
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        boxShadow:
                          "0.65px 3.26px 9.14px 0px rgba(0, 0, 0, 0.25)",
                      }}
                      variant="outline"
                      className="bg-transparent  w-[188px] h-[41.44px]  rounded-full border-2 border-white "
                    >
                      <p className="text-white font-medium font-poppins text-[20.89px] leading-[31.33px] ">
                        Get Blessings
                      </p>
                    </Button>
                  </div>
                </Link>
              </div>

              {/* Images */}

              {/* clip path  */}
              <div className=" -mt-[0.2rem] ml-[10]  w-[58.23px] h-[199px] z-20 flex justify-items-end">
                <Image
                  src="/Clip path group.png"
                  alt="clip-path"
                  width={58.23}
                  height={199}
                />
              </div>
              {/* Honey */}
              <div className=" w-[132.24px]  h-[145.42px] ml-[15.1rem] -mt-56  ">
                <Image
                  src="/honey.png"
                  alt="honey"
                  width={132.24}
                  height={145.42}
                />
              </div>
            </div>

            <div className="  w-full mt-9 mb-5">
              <div className=" -mt-[25px] ml-44 relative z-10">
                <Image
                  src="/laddu-1.png"
                  alt="ladu1"
                  height={146.65}
                  width={182.74}
                  className=""
                />
              </div>

              <div className="z-0 w-[168px]  ml-[60px] -mt-[7.3rem] relative ">
                <Image
                  src="/laddu-2.png"
                  alt="ladu2"
                  height={104.52}
                  width={168.64}
                />
              </div>

              <div className=" w-[104px]  -mt-[90px] -ml-[10px] relative z-10">
                <Image
                  src="/deepak-2.png"
                  alt="deepak2"
                  height={87.63}
                  width={122.45}
                />
                <Image
                  src="/Deepak.gif"
                  alt="deepak gif"
                  width={50}
                  height={50}
                  className=" absolute -mt-[98px] ml-[46px]"
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
