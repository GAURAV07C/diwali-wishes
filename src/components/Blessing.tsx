import Image from "next/image";
import React from "react";

const Blessing = () => {
  return (
    <div
      className=" w-full h-full bg-[#F2DDB4] overflow-hidden  relative z-10"
      id="blessing"
    >
      <div className="md:w-[1280px] md:h-[832px]  mx-auto flex flex-col md:flex-row justify-center items-center  gap-3 md:gap-0">
        <div className=" md:w-[817px] md:h-[800.92px] mx-auto  md:order-last  md:ml-[100px] mt-[-215px] md:mt-0">
          <Image
            src="/pink-chakra.png"
            alt="pink chakra"
            width={817}
            height={800.92}
            className=" animate-spin360 h-[348.39px] w-[355.38px] md:w-[817px] md:h-[800.92px] "
          />
        </div>
        <div className="  w-10px    md:order-firsts mb-16">
          <Image
            src="/mandapa.png"
            alt="mandap"
            width={390}
            height={341}
          ></Image>
          <Image
            src="/lakshmi-ganesh.png"
            alt="lakshmi-ganesh"
            width={351}
            height={301}
            className="-mt-[260px] w-[351px] h-[301px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Blessing;
