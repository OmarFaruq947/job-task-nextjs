"use client";

// import { useUserLoginMutation } from "@/redux/api/authApi";
import Link from "next/link";


const LoginPage = () => {
//   const [userLogin, isError] = useUserLoginMutation();
//   const [inputs, setInputs] = useState({
//     employeeId: "",
//     password: "",
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setInputs((prevInfo) => ({
//       ...prevInfo,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const res = await userLogin(inputs);
//       if ("data" in res) {
//         const re = res?.data;
//         console.log(re);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
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
        //   onSubmit={handleSubmit}
          
          >
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                type="text"
                // onChange={handleChange}
                name="employeeId"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your employeeId"
              />
            </div>

            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                type="password"
                // onChange={handleChange}
                id="password"
                name="password"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="w-full mb-6 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
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
              className="font-medium text-blue-600 hover:underline cursor-pointer"
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
