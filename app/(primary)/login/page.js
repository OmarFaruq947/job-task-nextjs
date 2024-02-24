"use client";  
import Link from "next/link";
import { useState } from "react"; 
import { useUserLoginMutation } from "@/redux/features/api/authApi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [employeeId, setEmployeeId] = useState()
  const [password, setPassword] = useState()
  
  const [loginUser] = useUserLoginMutation() 
  const router = useRouter();
  
 
  // const registerHandler = async () => {
  //   const RegisterData = {
  //     name,
  //     email,
      // employeeId,
  //     password,
  //     passwordConfirm,
  //     role,
  //     phoneNumber,
  //   };
  //   const res = await createUser(RegisterData);
  //   if (res?.data?.token) {
  //     console.log("register hoise");
  //     router.push("/login");
  //     toast("Registration Sucessfull!");
  //   }
  // };

  const handleSubmit = async (event) => {
    
    const loginData = {employeeId, password};
    event.preventDefault(); 
    fetch("https://staging-api.erpxbd.com/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "employeeId": "aaa",
        "password": "11111111"
    }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data?.token){
          router.push("/dashboard/region");
          toast("Login Sucessfull!");
        }
      }) 
     
  };
  return (
    <div className="Banner">
      <div className="mx-auto my-10 max-w-md rounded-xl border px-4 py-10 text-[#4E4E4E] shadow-lg sm:px-8 bg-white">
        <div className="text-center">
          <p className="mb-5 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B141F] ">
            Welcome Back
          </p>
          <p className="mb-6 sm:text-xl md:text-2xl text-[#4E4E4E]">
            Please login to your account
          </p>
        </div>
        <div className="mb-6">
          <form 
          onSubmit={handleSubmit}
          
          >
            <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
              <input
                type="text"
                onChange={(e) => setEmployeeId(e.target.value)}
                name="employeeId"
                value={employeeId}
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your employeeId"
              />
            </div>

            <div className="relative flex mb-3 overflow-hidden transition border-b-2 focus-within:border-b-blue-500">
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                id="password"
                name="password"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 mb-6 font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>
        </div>

        <div className="flex justify-center">
          <span className="">
            Do not have any account?
            <Link
              href="/registration"
              className="font-medium text-blue-600 cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
