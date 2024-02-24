"use client";
import AreaTable from "@/components/table/AreaTable";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Page() {

  
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="h-screen">
<div className="flex items-center justify-end ">
        <button
          className="flex items-center py-1 px-2 bg-[#0B2E4E] text-white rounded font-medium duration-500"
          onClick={toggleModal}
        >
          <Icon icon="ic:baseline-plus" /> <span>Create New</span>
        </button>
      </div>


<AreaTable />



      {showModal && (


        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0">
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0  ">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label
                className="block text-[#495057] text-sm font-bold mb-2"
                htmlFor="username"
              >
                Region
              </label>
              <select
                required
                className="bg-white px-3 py-2 transition-all cursor-pointer  border border-gray-200 rounded-lg w-full"
              >
                <option value="" disabled selected>
                  Select an option
                </option>
                <option value="option-1">Option 1</option>
                <option value="option-2">Option 2</option>
                <option value="option-3">Option 3</option>
              </select>
            </div>

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label
                className="block text-[#495057] text-sm font-bold mb-2"
                htmlFor="password"
              >
                Area
              </label>
              <input
                className="bg-white px-3 py-2 transition-all cursor-pointer  border border-gray-200 rounded-lg w-full"
                name="area"
                type="area"
                placeholder="Type Area"
              />
            </div>


              {/* button */}
              <div className=" px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-[#0B2E4E] text-white rounded font-medium  mr-2 transition duration-500"
                  onClick={toggleModal}
                >
                  <i className="fas fa-plus"></i> Add Area
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
