

import Link from "next/link";



const page = () => {

//   const [data, { isLoading, isError, error }] = useRegisterMutation();
//   console.log(data);
//   const [regData, setRegData] = useState({
//     name: "",
//     email: "",
//     employeeId: "",
//     password: "",
//     passwordConfirm: "",
//     role: "",
//     phoneNumber: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRegData((regInfo) => ({
//       ...regInfo,
//       [name]: value,
//     }));
//   };

  // console.log("data-->", regData);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     (async () => {
//       await axios
//         .post("https://staging-api.erpxbd.com/api/v1/users/signup", regData)
//         .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//     })();
    // try {
    //   const res = await register(regData);
    //   console.log(res);
    //   if ("data" in res) {
    //     const response = res?.data;
    //     console.log("data", response);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
//   };

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
        <form 
        // onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="text"
                name="name"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your Full Name"
              />
            </div>
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="email"
                name="email"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="text"
                name="employeeId"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Employee Id"
              />
            </div>

            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="password"
                name="password"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Password (min 8 character)"
              />
            </div>
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="password"
                name="passwordConfirm"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Confirm Password"
              />
            </div>
            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="text"
                name="role"
                className=" w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="Select Your Role(HUB)"
              />
            </div>

            <div className="focus-within:border-b-blue-500 relative mb-3 flex overflow-hidden border-b-2 transition">
              <input
                // onChange={handleChange}
                type="text"
                name="phoneNumber"
                className="w-full flex-1 appearance-none border-blue-300 bg-white px-4 py-2 text-base text-[#4E4E4E] placeholder-gray-400 focus:outline-none"
                placeholder="your Phone Number"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mb-6 rounded-xl bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>
        <div className="flex justify-center">
          <span className="">
            Already have an account?
            <Link
              href="/login"
              className="font-medium text-blue-600 hover:underline cursor-pointer"
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

export default page;