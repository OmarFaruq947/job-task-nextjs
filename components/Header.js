'use client'; 

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/FieldX.png";
import Button from "./Button";


const Header = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <header className="flex flex-col gap-5 bg-[#F0F6FF] sticky top-0 z-[9999] text-brand navbar border-b px-20">
      <div className="py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src={logo}
            alt="logo"
          />
        </Link>

        <div className="ml-8 flex gap-5">
        <Button link="/login">
                <span>Login</span>
              </Button>

              <Button link="/registration">
                <span>Registration</span>
              </Button>

     
          {
            !! isLogin ?   <Button link="/dashboard/region">
                <span>Dashboard</span>
              </Button> : ""
          }
         
        </div>
      </div>
    </header>
  );
};

export default Header;
