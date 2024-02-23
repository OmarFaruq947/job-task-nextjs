"use client";

import Image from "next/image";
import heroImage from "../assets/Group 33983.png";
import Button from "./ui/Button";

const Banner = () => {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#F0F6FF]">
        <main className="px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mt-20">
            <h2 className="text-[58] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl text-[#0B141F]">
              Analytics that transform your
              <br />
              product inside-out
            </h2>

            <div className="mt-5 sm:mt-8 sm:flex justify-center gap-5">
              <Button link="#/request">
                <span>Request for Demo</span>
              </Button>
              <Button link="#/download">
                <span>Download</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src={heroImage} alt="..." width={600} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Banner;
