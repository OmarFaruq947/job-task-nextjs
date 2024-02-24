"use client";
import { useRegisterMutation } from '@/redux/features/api/authApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const router = useRouter();
  const [createUser] = useRegisterMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const registerHandler = async () => {
    const RegisterData = {
      name,
      email,
      employeeId,
      password,
      passwordConfirm,
      role,
      phoneNumber,
    };
    const res = await createUser(RegisterData);
    if (res?.data?.token) {
      
      router.push("/login");
      toast("Registration Sucessfull!");
    }
  };

  return (
    <>
      <div className="Banner">
        <div className="mx-auto my-10 max-w-md rounded-xl border px-4 py-10 text-[#4E4E4E] shadow-lg sm:px-8 bg-white">
          <div className="text-center">
            <p className="mb-5 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B141F] ">
              Create Account
            </p>
            <p className="mb-6 sm:text-xl md:text-2xl">
              Fill in the details below to create an account
            </p>
          </div>
          <div>
            <div className="mb-6">
              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setEmployeeId(e.target.value)}
                  value={employeeId}
                  type="text"
                  name="employeeId"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Employee Id"
                />
              </div>

              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Password (min 8 character)"
                />
              </div>
              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  value={passwordConfirm}
                  type="password"
                  name="passwordConfirm"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setRole(e.target.value)}
                  value={role}
                  type="text"
                  name="role"
                  className=" w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="Select Your Role(HUB)"
                />
              </div>

              <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type="text"
                  name="phoneNumber"
                  className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                  placeholder="your Phone Number"
                />
              </div>
            </div>
            <button
              onClick={registerHandler}
              type="submit"
              className="w-full px-8 py-3 mb-6 font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center">
            <span className="">
              Already have an account?
              <Link
                href="/login"
                className="font-medium text-blue-600 cursor-pointer hover:underline"
              >
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
