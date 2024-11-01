import Image from "next/image";
import React from "react";

const Gift = () => {
  return (
    <div className=" h-[700px]  ">
      <div
        className=" lg:flex"
        style={{
          backgroundImage: `
      linear-gradient(111.68deg, #F9C159 5.34%, #FFAC6C 35.5%, #FC7D7B 66.36%, #ED6589 96.32%),
      linear-gradient(249.65deg, rgba(255, 162, 0, 0.2) 3.58%, rgba(230, 199, 140, 0.2) 36.38%, rgba(235, 188, 123, 0.2) 62.73%, rgba(237, 142, 170, 0.2) 96.04%)
    `,
        }}
      > 
        {/* chakara image */}
        <div className="   w-[362px] mx-auto h-[355px] lg:w-[834px] lg:h-[850px] -mt-[220px]  lg:mt-[17px] lg:-ml-[400px] ">
          <Image
            src="/purple-chakra.png"
            alt="pink chakra"
            width={817}
            height={800.92}
            className=" animate-spin360 h-[348.39px] w-[355.38px] lg:w-[740px] lg:h-[726.22px]"
          />
        </div>
        <div className="lg:h-[880px] lg:w-[1150px] lg:bg-[url('/Frame.png')] lg:bg-cover lg:bg-center">

     
        \{/* rocket image */}
        <div
          className="-mt-[35px] -mb-[100px] transform "
          style={{ transform: "rotate(11.49deg)" }}
        >
          <Image
            src="/rocket-2.png"
            alt="gift"
            width={91.54}
            height={133.37}
            className="w-[91.54px] h-[133.37px]  "
          />
        </div>
        {/* text image */}
        <div className=" w-[372px] h-[572px]  rounded-[8px] mx-auto bg-gradient-to-l from-[#481D6C] to-[#870551]  text-white gap lg:w-[809px] lg:h-[664px] ">
          <div className="font-merriweather w-[336px] mx-auto h-[73px] lg:w-[751px] lg:h-[39px]  mt-9 mb-8 lg:mt-  lg:py-7 ">
            <p className="text-[22px] leading-[41px] font-bold lg:text-[36px] lg:leading-[41px]  lg:mt-[px]">
              Thank You for Being a Part of This Light!
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-6  w-[336px] mx-auto font-antiquas text-[18px]  leading-[20.4px] font-medium lg:w-[751px] lg:h-[531px] lg:text-[26px] lg:leading-[32px]">
              <p>
                This website was created especially for you, a small gift to
                share in the warmth and wonder of Diwali.
              </p>

              <p>
                Every colour, every word holds a wish for your happiness, woven
                together with the hope that it brings a spark of joy into your
                day.
              </p>

              <p>
                As you scroll through, know that each moment here is a gentle
                reminder of the light you bring to those around you. May this
                Diwali fill your heart with laughter, warmth, and a glow that
                brightens every corner of your world.
              </p>

              <p>With love and light</p>
            </div>
            
          </div>
        </div>
        {/* image  */}
        <div className="lg:ml-[540px]">
          <div className="-mt-[42px] ml-28 lg:-ml-[38px] lg:-mt-[100px]">
            <Image
              src="/gift.png"
              alt="gift"
              width={109.76}
              height={106.96}
              className="w-[109.76] h-[106.96] lg:w-[189.41px] lg:h-[184.59px]  "
            />
          </div>
          <div className="-mt-[6.3rem] ml-[12.8rem] lg:ml-[130px] lg:-mt-[170px]">
            <Image
              src="/soan-papadi.png"
              alt="gift"
              width={111}
              height={111}
              className=" w-[111px] h-[111p] lg:w-[194px] lg:h-[194px] "
            />
          </div>
          <div
            className="-mt-[9.7rem] ml-[260.79px] lg:-mt-[210px] lg:ml-[280px]"
            // style={{ boxShadow: "0px 2.65px 2.65px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <Image
              src="/rocket-1.png"
              alt="gift"
              width={115.11}
              height={147.26}
              className="w-[115.11px] h-[147.26px] lg:w-[173.53px] lg:h-[222px] "
            />
            
            
          </div>
          
        </div>

        <div className="  text-center w-full mx-auto -mt-2 mb-0 lg:mb-0">
          <p className="font-[Merge One] font-medium text-xl leading-[41px]">
            Made with ❤️
          </p>
        </div>

        
        
        </div>
      </div>
    </div>
  );
};

export default Gift;
