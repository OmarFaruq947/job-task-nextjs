"use client";

import Link from "next/link";

const Button = ({ children, link }: any) => {
  return (
    <>
      <Link
        href={link}
        className="bg-[#0052CC] px-4 py-2 hover:bg-[#F0F6FF] hover:border-b-2 hover:border-r-2 hover:border-[#0052CC] hover:text-[#0052CC] text-[#F0F6FF] text-[14] rounded-md duration-300"
      >
        {children}
      </Link>
    </>
  );
};

export default Button;
