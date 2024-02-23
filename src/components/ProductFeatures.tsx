"use client";

import Image from "next/image";
import pic2 from "../assets/Group 34050.png";
import icon1 from "../assets/icon/Group 33984.png";

const ProductFeatures = () => {
  return (
    <div className="py-12">
      <div className="text-center">
        <p className="text-[#0052CC] ">Product Features</p>
        <p className="text-[#0B141F] text-[48px] ">
          Make more out of your data
        </p>
      </div>

      <div className="sm:container mx-auto px-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="">
            <div className="mb-[60px] lg:text-end">
              <div className="w-[72px] h-[72px] shadow-lg bg-white  lg:ml-auto p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F]">
                Real-time analytics
              </h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="mb-[60px] lg:text-end">
              <div className="w-[72px] h-[72px] shadow-lg bg-white  lg:ml-auto p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F]">
                Intuitive dashboard
              </h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="lg:text-end">
              <div className="w-[72px] h-[72px] shadow-lg bg-white  lg:ml-auto p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F]">Smart suggestions</h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image src={pic2} alt="..." />
          </div>

          <div className="">
            <div className="mb-[60px]">
              <div className="w-[72px] h-[72px] shadow-lg bg-white p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F]">Multiple views</h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="mb-[60px]">
              <div className="w-[72px] h-[72px] shadow-lg bg-white p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F]">AI-led diagnoses</h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
            <div className="">
              <div className="w-[72px] h-[72px] shadow-lg bg-white p-4 rounded-3xl">
                <Image src={icon1} alt="..." width={40} height={40} />
              </div>
              <h1 className="text-[26px] text-[#0B141F] ">Responsive</h1>
              <p className="text-[16px] text-[#4E4E4E]">
                See product usage, sign-ins, feature metrics change as users
                work on your.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
