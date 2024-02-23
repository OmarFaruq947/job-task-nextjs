"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/FieldX.png";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#F0F6FF] sticky top-0 z-[9999] text-brand navbar border-b px-20">
        <Link href="/" className="navbar-start ">
          <Image src={logo} alt="" />
        </Link>

        <div className="navbar-end gap-5">
          <Link
            href="/login"
            className="bg-[#0052CC] px-4 py-2 hover:bg-white hover:border-b-2 hover:border-r-2 hover:border-[#0052CC] hover:text-[#0052CC] text-[#fff] text-[14] rounded-md duration-300"
          >
            Login
          </Link>
          <Link
            href="/registration"
            className="bg-[#0052CC] px-4 py-2 hover:bg-white hover:border-b-2 hover:border-r-2 hover:border-[#0052CC] hover:text-[#0052CC] text-[#fff] text-[14] rounded-md duration-300"
          >
            Registration
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
