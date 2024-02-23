"use client";

import Image from "next/image";
import logo from "../../assets/FieldX-white.png";
import facebook from "../../assets/icon/001-facebook.png";
import linkedin from "../../assets/icon/010-linkedin.png";
import twitter from "../../assets/icon/013-twitter.png";

const Footer = () => {
  return (
    <div className="max-h-[528px] bg-[#00193D]">
      <div className="border-b-white py-20">
        <div className="flex justify-around">
          <Image src={logo} alt="..." width={135.66} height={64} />
        </div>
        <p className="py-8 flex justify-center text-white text-md">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          <br />
          accusantium doloremque laudantium, totam rem aperiam eaque.
        </p>
        <div className="flex justify-center gap-5">
          <Image src={twitter} alt="..." width={40} height={40} />
          <Image src={linkedin} alt="..." width={40} height={40} />
          <Image src={facebook} alt="..." width={40} height={40} />
        </div>
      </div>
      <hr className="bg-[#0D3166] h-[1px] w-[1216px] mx-auto" />
      <div className="flex justify-center pt-7 pb-12 text-white">
        <p className="text-lg font-bold">
          © All rights reserve by <span className="text-[#F60E0E]">MAAC</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
