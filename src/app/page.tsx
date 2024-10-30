import Blessing from "@/components/Blessing";
import Thanku from "@/components/Thanku";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className=" w-screen  mx-auto overflow-x-hidden ">
    <Hero />
    <Blessing />
    
    <Thanku />
    </div>
  );
}
