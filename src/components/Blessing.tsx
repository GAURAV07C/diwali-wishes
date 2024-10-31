import Image from "next/image";
import React from "react";

const Blessing = () => {
  return (
    <div
      className=" w-full h-full bg-[#F2DDB4] overflow-hidden  relative z-10"
      id="blessing"
    >
      <div className=" lg:w-[1280px] lg:h-[832px]  mx-auto   relative  justify-center items-center  gap-3 lg:gap-0">
        <div className="    mx-auto  lg:order-last    mt-[-215px]  lg:mt-0 lg:w-[817px] lg:h-[800.92px] lg:ml-[1000px]">
          <Image
            src="/pink-chakra.png"
            alt="pink chakra"
            width={817}
            height={800.92}
            className=" animate-spin360 h-[348.39px] w-[355.38px]  lg:w-[817px] lg:h-[800.92px]  "
          />
        </div>

        <div className="     lg:order-firsts mb-16 lg:w-[864px] lg:h-[722px] lg:-mt-[730px] lg:-ml[35px]">
          <Image
            src="/mandapa.png"
            alt="mandap"
            width={864}
            height={722.59}
            className="w-390 h-341 lg:w-[864px] lg:h-[722px] "
          />
          <Image
            src="/lakshmi-ganesh.png"
            alt="lakshmi-ganesh"
            width={351}
            height={301}
            className="-mt-[260px] w-[351px] h-[301px] mx-auto lg:w-[688.34px] lg:h-[590px] lg:-mt-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Blessing;
