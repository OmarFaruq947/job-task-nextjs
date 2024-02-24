"use client";
import Image from "next/image";
import profilePic from "../assets/Ellipse 1.png";
import pic4 from "../assets/Group 34027.png";
import Stets from "./Stets";


const About = () => {
  return (
    <div className="Banner">
      <div className="py-16 sm:container mx-auto px-12">
        <div className="grid lg:grid-cols-2 lg:gap-10 ">
          <div className="ml-auto hidden md:block md:order-last lg:order-first">
            <Image src={pic4} alt="..." width={484} height={588} />
          </div>

          <div className="pt-8 w-[586px] h-[529px]">
            <div className="border-b-2 pb-7">
              <p className="text-[#0052CC] ">About Us</p>
              <h2 className="text-[#0B141F] text-[48px] ">
                A dedicated solution for startups and enterprises
              </h2>
              <p className="mt-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="flex gap-5 pt-7">
              <div className="">
                <Image src={profilePic} alt="..." width={88} height={88} />
              </div>
              <div className="my-auto">
                <p className="text-[22px]">
                  Fieldx is for teams that care about their product growth
                </p>
                <h1 className="font-bold text-[22px]">CEO, FieldX</h1>
              </div>
            </div>
          </div>
        </div>

        <Stets />
      </div>
    </div>
  );
};

export default About;
